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

    // STEP 2: Generate Body via Parallel Concurrent Chunking
    console.log(`[AI Generator Flow] Step 2: Generating description content for ${outline.length} headings concurrently...`);
    const context = body.context || body.writeup;

    const chunkPromises = outline.map(async (heading, i) => {
      const isLastHeading = i === outline.length - 1;
      const isComparison = heading.toLowerCase().includes('compar') || heading.toLowerCase().includes(' vs');
      
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
          temperature: 0.7,
        });

        if (chunkCompletion.usage) {
          totalInputTokens += chunkCompletion.usage.prompt_tokens;
          totalOutputTokens += chunkCompletion.usage.completion_tokens;
        }

        let rawChunk = sanitizeText(chunkCompletion.choices[0]?.message?.content || "");
        let cleanedChunk = rawChunk.trim();
        if (cleanedChunk.startsWith("```html")) {
          cleanedChunk = cleanedChunk.slice(7).trim();
        } else if (cleanedChunk.startsWith("```")) {
          cleanedChunk = cleanedChunk.slice(3).trim();
        }
        if (cleanedChunk.endsWith("```")) {
          cleanedChunk = cleanedChunk.slice(0, -3).trim();
        }

        return cleanedChunk;
      } catch (chunkError) {
        console.error(`[AI Generator Flow] Error generating chunk for heading "${heading}":`, chunkError);
        return `<h2>${heading}</h2>\n<p>Comprehensive legal guide and advisory regarding ${heading}.</p>`;
      }
    });

    const finalHtmlBodyChunks = await Promise.all(chunkPromises);
    const cleanedDescription = finalHtmlBodyChunks.filter(Boolean).join('\n\n');
    console.log(`[AI Generator Flow] Step 2 complete. Total description length: ${cleanedDescription.split(/\s+/).length} words.`);
    console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt...`);

    // Dynamic fallback prompt builders adhering to strict 70% white light mode, #007AFF blue, CredSettle branding, and high-impact layout
    const buildDynamicCoverImagePrompt = (title: string, keyword: string) => {
      return `Clean bright light mode corporate editorial graphic banner set in an Indian urban landscape with modern Mumbai BKC glass high-rise towers in soft daylight. Prominently featuring the brand name "CredSettle" and the exact blog title text clearly written on the image: "${title}" in bold, modern, legible typography in shades of #007AFF blue and charcoal. Color balance strictly composed of 70% bright white background, 20% vibrant #007AFF blue text/accents, and 10% crisp black/charcoal contrast. Clean studio lighting, minimal aesthetic, sharp focus, 8k resolution, ultra-professional legal-tech banner. NO black background, NO fake random law firm names.`;
    };

    const buildDynamicInfographicPrompt = (title: string, takeaways: string[], headings: string[]) => {
      const step1 = headings[0] ? headings[0].replace(/<\/?[^>]+(>|$)/g, "").slice(0, 30) : "1. Notice Audit";
      const step2 = headings[1] ? headings[1].replace(/<\/?[^>]+(>|$)/g, "").slice(0, 30) : "2. Legal Protection";
      const step3 = headings[2] ? headings[2].replace(/<\/?[^>]+(>|$)/g, "").slice(0, 30) : "3. Bank Settlement";
      const step4 = headings[3] ? headings[3].replace(/<\/?[^>]+(>|$)/g, "").slice(0, 30) : "4. No Dues Certificate";
      const heroStat = takeaways && takeaways[0] ? takeaways[0].slice(0, 45) : "Up to 70% Debt Waiver";

      return `Clean, minimalist, high-impact visual process infographic poster for CredSettle titled "${title}". 70% clean white background, 20% #007AFF blue cards and badges, 10% black typography. Featuring 4 bold punchy milestone cards connected by directional arrows: [${step1}] -> [${step2}] -> [${step3}] -> [${step4}], with one large hero highlight badge "${heroStat}". Sleek 3D glassmorphic icons (legal shield, scales, verified certificate), uncluttered spacious layout, zero tiny noisy text, high CTR modern graphic design.`;
    };

    // STEP 3: Generate FAQs, Reviews, Cover Image Prompt, and Infographic Prompt
    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = buildDynamicCoverImagePrompt(step1Result.title, primaryKeyword);
    let infographicPrompt = buildDynamicInfographicPrompt(step1Result.title, step1Result.keyTakeaways || [], outline);

    if (totalInputTokens + totalOutputTokens >= MAX_TOTAL_TOKENS) {
      console.warn(`[AI Generator Flow] Hard token limit (${MAX_TOTAL_TOKENS}) reached. Using dynamic fallback prompts for image and infographic.`);
    } else {
      try {
        const step3SystemPrompt = `
You are a legal content strategist, master visual prompt engineer, and creative director for CredSettle (www.credsettle.com).
Analyze the generated article Title, Subtitle, Key Takeaways, Outline, and HTML Description, and generate:

1. faqs: At least 8-10 highly relevant, exhaustive FAQs (frequently asked questions) that directly answer specific practical, procedural, and legal questions addressed in the article.
2. reviews: 5 realistic customer review snippets (with authentic Indian full names) expressing relief and high satisfaction with CredSettle's legal debt settlement and anti-harassment services.

3. suggestedImagePrompt: A dynamic, highly detailed image generation prompt for the FEATURED COVER IMAGE. Must follow these STRICT rules:
   - LIGHT MODE BACKGROUND (70% White): The image MUST have a clean, bright, modern LIGHT MODE background with ample white space (e.g. sunlit modern Indian corporate office, floor-to-ceiling glass windows overlooking Mumbai BKC / Bangalore / Cyber City Gurgaon skyline in daylight). STRICT NEGATIVE: NO dark backgrounds, NO black backgrounds, NO night scenes.
   - BRAND NAME & BLOG TITLE: MUST prominently mention "CredSettle" brand and the exact blog title text clearly written on the image: "Prominently feature 'CredSettle' and the exact blog title text clearly written in bold, modern, legible typography on the image: \\"${step1Result.title}\\"". STRICT NEGATIVE: DO NOT invent fake law firm names like 'Legal Shield Associates' or random advocate names. ONLY use 'CredSettle'.
   - COLOR PALETTE RATIO: Strictly composed of 70% Pure White background, 20% #007AFF Electric Blue (for headline typography and brand accents), and 10% Crisp Black/Charcoal (for dark text accents and subtle contrast).
   - TOPIC NUANCE: Dynamic narrative reflecting this specific article topic (e.g., credit card debt settlement, personal loan relief, bank recovery harassment defence, Sec 138 notice, OTS agreement).
   - STYLE: Clean, bright, ultra-modern corporate legal-tech editorial banner, 8k resolution, minimalist layout.

4. infographicPrompt: A dynamic, MINIMALIST, HIGH-IMPACT infographic prompt that is clean, uncluttered, and forces users to click. Must follow these STRICT rules:
   - LESS IS MORE / HIGH IMPACT: DO NOT stuff the infographic with paragraphs or noisy micro-text. Focus ONLY on 3 to 4 bold, punchy milestone steps / cards (e.g., Step 1 -> Step 2 -> Step 3 -> Step 4) derived from the blog outline, plus 1 large high-impact hero statistic badge (e.g., "Up to 70% Debt Reduction" or "45-90 Days Resolution").
   - VISUAL ELEMENTS: Large 3D glassmorphic cards with recognizable 3D corporate trust icons (shield, scales, verified stamp, agreement document), bold glowing #007AFF directional arrows, clean high-contrast stat badges.
   - COLOR RATIO & BACKGROUND: 70% Crisp White studio background, 20% #007AFF Blue cards/accents, 10% Black typography for crystal-clear readability.
   - INSTANT READABILITY: Clean spacious composition that can be understood in 3 seconds at a glance.

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}
Key Takeaways: ${JSON.stringify(step1Result.keyTakeaways || [])}
Article Outline: ${JSON.stringify(outline)}

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
  "suggestedImagePrompt": "Detailed prompt for light mode featured cover image (70% white, 20% #007AFF blue, 10% black) with CredSettle brand and title on image in Indian landscape",
  "infographicPrompt": "Detailed prompt for clean, uncluttered, high-impact 4-step infographic with hero stat badge on 70% white background with #007AFF blue accents"
}`;

        const step3Completion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: step3SystemPrompt }
          ],
          response_format: { type: "json_object" },
          temperature: 0.7,
        });

        const step3ResultStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
        
        if (step3Completion.usage) {
          totalInputTokens += step3Completion.usage.prompt_tokens;
          totalOutputTokens += step3Completion.usage.completion_tokens;
          console.log(`[Token Usage] Step 3: ${step3Completion.usage.total_tokens} tokens (${step3Completion.usage.prompt_tokens} in, ${step3Completion.usage.completion_tokens} out)`);
        }

        const step3Result = JSON.parse(step3ResultStr);

        faqs = Array.isArray(step3Result.faqs) && step3Result.faqs.length > 0 ? step3Result.faqs : [];
        reviews = Array.isArray(step3Result.reviews) && step3Result.reviews.length > 0 ? step3Result.reviews : [];
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
