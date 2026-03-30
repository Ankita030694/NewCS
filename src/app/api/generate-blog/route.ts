import { NextResponse } from 'next/server';
import OpenAI from 'openai';


export async function POST(request: Request) {
    const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
  });
    try {
        const { primaryKeyword, secondaryKeyword } = await request.json();

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        const systemPrompt = `
      You are a professional SEO and AEO expert and legal content strategist for CredSettle (www.credsettle.com).
      
      **Role**: Create a fully human-written, SEO-optimized, and authority-building blog article for CredSettle.
      
      **Goal**: Rank #1 on Google. Follow Google’s 2024-2025 SEO and E-E-A-T guidelines strictly.
      
      **Topic**: Target [${primaryKeyword}] with secondary keywords [${secondaryKeyword || ''}].
      
      **CRITICAL OUTPUT RULES (FAILING THESE = FAILURE)**:
      1. **Word Count**: The main body content ('description' field) MUST be **3000+ words**. Go extremely deep, be exhaustive.
      2. **Content Separation**: 
         - **DO NOT** include FAQs in the 'description' (main body). Put them ONLY in the 'faqs' JSON array.
         - **DO NOT** include Reviews in the 'description' (main body). Put them ONLY in the 'reviews' JSON array.
         - The 'description' should ONLY contain the article text.
      3. **Internal Linking**: You MUST naturally integrate mentions and links to the following CredSettle services within the body content where relevant:
         - https://www.credsettle.com/loan-settlement
         - https://www.credsettle.com/services/anti-harassment
         - https://www.credsettle.com/services/personal-loan-settlement
         - https://www.credsettle.com/services/credit-card-settlement
         - https://www.credsettle.com/nbfc-loan-settlement
         (Use these URLs directly or hyperlinked on relevant keywords).
      4. **Localization**: Use **Indian Rupees (₹)**, Indian names, and Indian legal context (RBI, DRT, etc.).

      **Structure Requirements**:
      - **H1**: Blog title with the primary keyword.
      - **H2**: Main sections covering key legal aspects, practical tips, and solutions. Include primary keyword.
      - **H3/H4**: Subtopics, examples, step-by-step guidance, and case studies.
      - **Introduction**: 2-3 paragraphs, hook the reader, mention primary keyword twice.
      - **Content**: Professional, authoritative, human tone. Actionable advice. Use bullet points/tables.
      - **Conclusion**: 2-3 paragraphs summary + Call to Action.

      **Return JSON Structure**:
      {
        "title": "H1 Title (max 70 chars)",
        "subtitle": "Engaging subtitle (max 120 chars)",
        "description": "FULL HTML CONTENT (3000+ words). Use <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. NO FAQs here. NO Reviews here.",
        "metaTitle": "SEO meta title (60-70 chars)",
        "metaDescription": "SEO meta description (150-160 chars)",
        "faqs": [
          { "question": "Q1...", "answer": "A1..." },
            ... (8-10 items)
        ],
        "reviews": [
          { "name": "Indian Name", "rating": 5, "review": "Detailed review..." },
            ... (5 items)
        ],
        "slug": "url-friendly-slug",
        "suggestedImagePrompt": "Visual description"
      }
      Encourage usage of infographics/tables in the HTML.
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Write an article about ${primaryKeyword}` },
            ],
            response_format: { type: "json_object" },
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content || "";
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    } catch (error) {
        console.error('Error generating article:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const runtime = 'edge';
export const maxDuration = 300;
