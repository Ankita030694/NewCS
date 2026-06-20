import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300;

export async function POST(request: Request) {
  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret is not set." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

  try {
    const body = await request.json();
    const primaryKeyword = body.primaryKeyword || body.context || body.writeup;
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords;

    if (!primaryKeyword) {
      return NextResponse.json({ error: "Primary Keyword, Context, or Writeup is required" }, { status: 400 });
    }

    console.log(`[AI Generator Flow] Step 1: Generating SEO metadata for: [${primaryKeyword}]...`);

    // STEP 1: Generate Metadata
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional legal SEO and AEO strategist.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, and URL slug for a blog article on CredSettle.
Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ""}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug"
}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
    const step1Result = JSON.parse(step1ResultStr);

    console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}"`);
    console.log(`[AI Generator Flow] Step 2: Generating description content (3000+ words HTML)...`);

    // STEP 2: Generate Body
    const step2SystemPrompt = `
You are a professional legal content writer and SEO expert. Write a fully human-written, SEO-optimized, exhaustive legal article body for CredSettle (https://www.credsettle.com/).
Target Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ""}
Title: ${step1Result.title}
Subtitle: ${step1Result.subtitle}

**CRITICAL WORD COUNT REQUIREMENT**:
The content MUST be extremely detailed, exhaustive, and exceed 4000 words in length.
To achieve this:
1. Create at least 15 main H2 sections.
2. Under EACH H2 section, include at least 4-5 comprehensive, lengthy paragraphs (minimum 300 words per section).
3. Dive deep into legal precedents, step-by-step procedures, potential pitfalls, historical context, and comprehensive case studies. Do not summarize; explain everything in painstaking detail.

**Requirements**:
- **Structure**: Use HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. Include at least 8 main H2 sections.
- **Tone**: Professional, authoritative, human. Use Indian context (Rupees ₹, RBI, DRT, etc.) naturally.
- **No Markdown**: Do NOT use markdown headers (like ## or ###) or markdown bold (like **text**). Use HTML tags instead (like <h2>, <h3>, <strong>).
- **Internal Linking**: You MUST naturally integrate links to the following CredSettle pages where relevant:
  - https://www.credsettle.com/loan-settlement
  - https://www.credsettle.com/services/anti-harassment
  - https://www.credsettle.com/services/personal-loan-settlement
  - https://www.credsettle.com/services/credit-card-settlement
  - https://www.credsettle.com/nbfc-loan-settlement
- **Do NOT** include any title (H1) or subtitle, as they are already generated. Start directly with the introduction paragraphs.
- **Do NOT** include any FAQs or Reviews in this content.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only. Start directly with the first HTML tag (e.g. <h2> or <p>).
- **CRITICAL NEGATIVE CONSTRAINT**:
  Under no circumstances should you include any em dashes (—) anywhere in your entire response. Always use normal hyphens (-), colons, commas, or parentheses if needed instead.
`;

    const context = body.context || body.writeup;
    const step2UserMessage = context && context !== primaryKeyword
      ? `Write an exhaustive, extremely detailed 4000+ words HTML body about: ${primaryKeyword}\nAdditional context & details: ${context}`
      : `Write an exhaustive, extremely detailed 4000+ words HTML body about: ${primaryKeyword}`;

    const step2Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: step2SystemPrompt },
        { role: "user", content: step2UserMessage },
      ],
      temperature: 0.8,
      max_tokens: 10000,
    });

    let rawDescription = sanitizeText(step2Completion.choices[0]?.message?.content || "");

    // Clean up markdown fences at the root level
    let cleanedDescription = rawDescription.trim();
    if (cleanedDescription.startsWith("\`\`\`html")) {
      cleanedDescription = cleanedDescription.slice(7).trim();
    } else if (cleanedDescription.startsWith("\`\`\`")) {
      cleanedDescription = cleanedDescription.slice(3).trim();
    }
    if (cleanedDescription.endsWith("\`\`\`")) {
      cleanedDescription = cleanedDescription.slice(0, -3).trim();
    }

    console.log(`[AI Generator Flow] Step 2 complete. Description length: ${cleanedDescription.split(/\\s+/).length} words.`);
    console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt...`);

    // STEP 3: Generate FAQs and Reviews
    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = "Professional legal recovery illustration";

    try {
      const step3SystemPrompt = `
You are a legal content strategist and SEO expert for CredSettle.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the recovery service.
3. A suggested image prompt describing a premium, conceptual, textless 3D isometric illustration suitable for this article. The prompt MUST be highly descriptive (at least 30-40 words) focusing on abstract geometric shapes representing balance, growth, and security, rather than literal objects like scales or gavels. Explicitly demand "absolutely zero typography, labels, or pseudo-text".

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description:
${cleanedDescription}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured image"
}`;

      const step3Completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: step3SystemPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.8,
      });

      const step3ResultStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
      const step3Result = JSON.parse(step3ResultStr);

      faqs = step3Result.faqs || [];
      reviews = step3Result.reviews || [];
      suggestedImagePrompt = step3Result.suggestedImagePrompt || suggestedImagePrompt;

      console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}`);
    } catch (step3Error) {
      console.error("[AI Generator Flow] Error in Step 3:", step3Error);
    }

    // Build the final unified JSON object
    const finalResult = {
      title: step1Result.title,
      subtitle: step1Result.subtitle,
      metaTitle: step1Result.metaTitle,
      metaDescription: step1Result.metaDescription,
      slug: step1Result.slug,
      description: cleanedDescription,
      faqs: faqs,
      reviews: reviews,
      suggestedImagePrompt: suggestedImagePrompt
    };

    const finalJsonStr = JSON.stringify(finalResult);

    // Stream the final JSON to the client to keep compatibility with the dashboard streaming reader
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(new TextEncoder().encode(finalJsonStr));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error generating article:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
