import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 60;

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
  const MAX_TOTAL_TOKENS = 15000;

  try {
    let totalInputTokens = 0;
    let totalOutputTokens = 0;
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
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, an outline of exactly 5 to 6 highly detailed H2 headings, 5 actionable key takeaways, and 10 popular search terms for a blog article on CredSettle.
Make sure at least one of the H2 headings is explicitly a comparison section (e.g., "Comparison of Options", "X vs Y").
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
  "slug": "url-friendly-slug",
  "outline": ["H2 Heading 1", "H2 Heading 2", "H2 Heading 3", "H2 Heading 4", "H2 Heading 5", "H2 Heading 6"],
  "keyTakeaways": ["Takeaway 1", "Takeaway 2", "Takeaway 3", "Takeaway 4", "Takeaway 5"],
  "popularSearches": ["search term 1", "search term 2", "search term 3", "search term 4", "search term 5", "search term 6", "search term 7", "search term 8", "search term 9", "search term 10"]
}`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "blog_metadata",
          strict: true,
          schema: {
            type: "object",
            properties: {
              title: { type: "string" },
              subtitle: { type: "string" },
              metaTitle: { type: "string" },
              metaDescription: { type: "string" },
              slug: { type: "string" },
              outline: { type: "array", items: { type: "string" } },
              keyTakeaways: { type: "array", items: { type: "string" } },
              popularSearches: { type: "array", items: { type: "string" } }
            },
            required: ["title", "subtitle", "metaTitle", "metaDescription", "slug", "outline", "keyTakeaways", "popularSearches"],
            additionalProperties: false
          }
        }
      },
      temperature: 0.7,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
    
    if (step1Completion.usage) {
      totalInputTokens += step1Completion.usage.prompt_tokens;
      totalOutputTokens += step1Completion.usage.completion_tokens;
      console.log(`[Token Usage] Step 1: ${step1Completion.usage.total_tokens} tokens (${step1Completion.usage.prompt_tokens} in, ${step1Completion.usage.completion_tokens} out)`);
    }

    const step1Result = JSON.parse(step1ResultStr);
    const outline: string[] = step1Result.outline || [];

    console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}". Generated ${outline.length} headings.`);

    // STEP 2: Generate Body via Iterative Chunking
    console.log(`[AI Generator Flow] Step 2: Generating description content in chunks...`);
    
    let finalHtmlBodyChunks: string[] = [];
    
    for (let i = 0; i < outline.length; i++) {
      // Leave a buffer of ~2000 tokens for Step 3 (FAQs/Reviews)
      if (totalInputTokens + totalOutputTokens > MAX_TOTAL_TOKENS - 2000) {
        console.warn(`[AI Generator Flow] Token limit approaching (Limit: ${MAX_TOTAL_TOKENS}). Stopping chunk generation early to save quota.`);
        break;
      }

      const heading = outline[i];
      const isLastHeading = i === outline.length - 1;
      const isComparison = heading.toLowerCase().includes('compar') || heading.toLowerCase().includes(' vs');
      console.log(`[AI Generator Flow] Generating chunk ${i + 1}/${outline.length}: ${heading}`);
      
      const chunkSystemPrompt = `
You are a professional legal content writer and SEO expert. Write a fully human-written, SEO-optimized, exhaustive legal article section for CredSettle.
Target Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ""}
Article Title: ${step1Result.title}

**CRITICAL INSTRUCTION FOR LENGTH:
Write EXACTLY 200-230 words of HTML content specific ONLY to this H2 section: "<h2>${heading}</h2>".
DO NOT exceed 230 words, otherwise the total blog length will overshoot the 2000 word limit. Keep sentences punchy and highly informative.
Start the response directly with the "<h2>${heading}</h2>" tag, followed by the content.
Dive deep into legal precedents, procedures, pitfalls, historical context, or case studies where appropriate.

**Requirements**:
- **Structure**: Use HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. 
- **Tone**: Professional, authoritative, human. Use Indian context (Rupees ₹, RBI, DRT, etc.) naturally.
- **No Markdown**: Do NOT use markdown headers (like ##) or markdown formatting. Use HTML tags instead.${isLastHeading ? "\n- **SOURCES / CITATIONS**: Because this is the FINAL section of the article, you MUST generate a '<h3>Sources & References</h3>' section at the very end of your HTML output. This should be formatted as an HTML list containing exactly 5 highly relevant external sources. EVERY SINGLE BULLET POINT MUST CONTAIN A CLICKABLE HYPERLINK using an <a href=\"...\"> tag. DO NOT USE PLAIN TEXT BRACKETS FOR URLs. YOU WILL BE PENALIZED IF YOU DO NOT PROVIDE 5 SEPARATE <a href> LINKS TO REAL DOMAINS (e.g. rbi.org.in, sbi.co.in, consumeraffairs.nic.in, etc.)." : "\n- **NO CONCLUSIONS**: This is merely ONE section of a larger article. DO NOT write any concluding paragraphs, summaries, 'in conclusion', or wrap-ups at the end of this section. End the section factually and leave it open-ended."}${isComparison ? "\n- **COMPARISON TABLE**: Because this section is a comparison, you MUST include a highly detailed HTML <table> comparing the options or concepts across multiple parameters (e.g., Who it's for, What it does, Impact, Cost). Use <thead>, <tbody>, <tr>, <th>, and <td>." : ""}
- **Internal Linking**: You MUST naturally integrate at least one link to the following CredSettle domain pages where relevant:
  - https://www.credsettle.com/loan-settlement
  - https://www.credsettle.com/services/anti-harassment
  - https://www.credsettle.com/services/personal-loan-settlement
  - https://www.credsettle.com/services/credit-card-settlement
  - https://www.credsettle.com/nbfc-loan-settlement
- **Do NOT** include any title (H1), FAQs, or Reviews.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only.
- **CRITICAL NEGATIVE CONSTRAINT**:
  Under no circumstances should you include any em dashes (—) anywhere in your entire response. Always use normal hyphens (-), colons, commas, or parentheses if needed instead.
`;

      const context = body.context || body.writeup;
      const chunkUserMessage = context && context !== primaryKeyword
        ? `Write the 200-230 word HTML section for "<h2>${heading}</h2>".\nAdditional overall context: ${context}`
        : `Write the 200-230 word HTML section for "<h2>${heading}</h2>".`;

      try {
        const chunkCompletion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: chunkSystemPrompt },
            { role: "user", content: chunkUserMessage },
          ],
          temperature: 0.8,
        });

        if (chunkCompletion.usage) {
          totalInputTokens += chunkCompletion.usage.prompt_tokens;
          totalOutputTokens += chunkCompletion.usage.completion_tokens;
          console.log(`[Token Usage] Step 2 Chunk ${i + 1}: ${chunkCompletion.usage.total_tokens} tokens (${chunkCompletion.usage.prompt_tokens} in, ${chunkCompletion.usage.completion_tokens} out)`);
        }

        let rawChunk = sanitizeText(chunkCompletion.choices[0]?.message?.content || "");

        // Clean up markdown fences if present
        let cleanedChunk = rawChunk.trim();
        if (cleanedChunk.startsWith("\`\`\`html")) {
          cleanedChunk = cleanedChunk.slice(7).trim();
        } else if (cleanedChunk.startsWith("\`\`\`")) {
          cleanedChunk = cleanedChunk.slice(3).trim();
        }
        if (cleanedChunk.endsWith("\`\`\`")) {
          cleanedChunk = cleanedChunk.slice(0, -3).trim();
        }

        finalHtmlBodyChunks.push(cleanedChunk);
      } catch (chunkError) {
        console.error(`[AI Generator Flow] Error generating chunk for heading "${heading}":`, chunkError);
        continue;
      }
    }

    const cleanedDescription = finalHtmlBodyChunks.join('\n\n');
    console.log(`[AI Generator Flow] Step 2 complete. Total description length: ${cleanedDescription.split(/\s+/).length} words.`);
    console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt...`);

    // STEP 3: Generate FAQs and Reviews
    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = "Professional legal recovery illustration";
    let infographicPrompt = "Infographic detailing the crux of the blog";

    if (totalInputTokens + totalOutputTokens >= MAX_TOTAL_TOKENS) {
      console.warn(`[AI Generator Flow] Hard token limit (${MAX_TOTAL_TOKENS}) reached. Skipping FAQs and Reviews to prevent quota overuse.`);
    } else {
      try {
      const step3SystemPrompt = `
You are a legal content strategist and SEO expert for CredSettle.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the recovery service.
3. A suggested image prompt describing a clean, professional, modern corporate illustration suitable for the article's main hero section.
4. An infographic prompt describing a highly detailed, data-driven infographic visually explaining the crux of the article.
Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description:
${cleanedDescription.substring(0, 4000)}

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
  "suggestedImagePrompt": "Visual description for the article's featured image",
  "infographicPrompt": "Visual description for the article's crux infographic"
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
      
      if (step3Completion.usage) {
        totalInputTokens += step3Completion.usage.prompt_tokens;
        totalOutputTokens += step3Completion.usage.completion_tokens;
        console.log(`[Token Usage] Step 3: ${step3Completion.usage.total_tokens} tokens (${step3Completion.usage.prompt_tokens} in, ${step3Completion.usage.completion_tokens} out)`);
      }

      const step3Result = JSON.parse(step3ResultStr);

      faqs = step3Result.faqs || [];
      reviews = step3Result.reviews || [];
      suggestedImagePrompt = step3Result.suggestedImagePrompt || suggestedImagePrompt;
      infographicPrompt = step3Result.infographicPrompt || infographicPrompt;

      console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}`);
      } catch (step3Error) {
        console.error("[AI Generator Flow] Error in Step 3:", step3Error);
      }
    }

    const totalTokensAllSteps = totalInputTokens + totalOutputTokens;
    console.log(`=========================================`);
    console.log(`[Token Usage Summary] FULL GENERATION`);
    console.log(`Total Input Tokens: ${totalInputTokens}`);
    console.log(`Total Output Tokens: ${totalOutputTokens}`);
    console.log(`Total Combined Tokens: ${totalTokensAllSteps}`);
    console.log(`Estimated Cost (gpt-4o): ~$${((totalInputTokens / 1000000) * 5.00 + (totalOutputTokens / 1000000) * 15.00).toFixed(4)}`);
    console.log(`=========================================`);

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
      suggestedImagePrompt: suggestedImagePrompt,
      infographicPrompt: infographicPrompt,
      keyTakeaways: step1Result.keyTakeaways || [],
      popularSearches: step1Result.popularSearches || []
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
