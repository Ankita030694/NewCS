import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(request: Request) {
    try {
        const { currentContent, expansionPrompt } = await request.json();

        if (!currentContent) {
            return NextResponse.json({ error: 'Current content is required' }, { status: 400 });
        }

        const systemPrompt = `
      You are an expert content writer and SEO strategist.
      
      **Goal**: Expand the provided HTML blog content to reach a total of **5000+ words**.
      
      **Instructions**:
      1. **Maintain Quality**: Do not add fluff. Add depth, examples, case studies, regulatory details, and expert insights relevant to the topic.
      2. **Structure**: Continue using the existing HTML structure (H2, H3, P, UL, LI, Table).
      3. **Instruction**: Follow this specific expansion prompt: "${expansionPrompt || 'Expand the content naturally while maintaining the professional tone and SEO value.'}"
      4. **Context**: The content is for CredSettle (www.credsettle.com), an Indian debt settlement platform. Use Indian context (RBI, Banks, Legal terms).
      5. **Keep Links**: Preserve any existing internal links.
      
      **CRITICAL**: Return ONLY the improved and expanded HTML content. No markdown code blocks, just the HTML string.
    `;

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Here is the current content:\n\n${currentContent}` },
            ],
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of response) {
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
        console.error('Error expanding content:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const runtime = 'edge';
export const maxDuration = 300;
