import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const apiKey = process.env.HELLO_DROP_CHOO;

  // Captured outside the try block so the fallback can access it even if request.json() crashes
  let parsedPrompt = "Legal money recovery professional illustration";

  try {
    const body = await request.json();
    const prompt = typeof body.prompt === "string" ? body.prompt : undefined;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    parsedPrompt = prompt;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
        { status: 500 }
      );
    }

    console.log("[AI Image Generator] Attempting generation with gpt-image-2 model (1024x1024 resolution)...");

    // Add a 280 second timeout to stay just under Vercel Premium's 300s limit
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 280000);

    const openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.warn(`[AI Image Generator] OpenAI gpt-image-2 generation failed: ${data.error?.message || "empty response"}. Falling back to dynamic prompt-based Pollinations AI (FLUX) generation...`);

      const encodedPrompt = encodeURIComponent(prompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;

      return NextResponse.json({
        success: true,
        url: dynamicFallbackUrl,
        imageUrl: dynamicFallbackUrl,
        isFallback: true,
        warning: `OpenAI gpt-image-2 generation failed: ${data.error?.message || "empty response"}. Resolved via Pollinations AI (FLUX) fallback.`
      });
    }

    const firstItem = data.data?.[0];
    if (!firstItem) {
      throw new Error("No data returned from OpenAI");
    }

    const imageUrl = firstItem.b64_json
      ? `data:image/png;base64,${firstItem.b64_json}`
      : firstItem.url;

    if (!imageUrl) {
      throw new Error("No image URL or base64 data returned from OpenAI");
    }

    return NextResponse.json({ success: true, url: imageUrl, imageUrl: imageUrl });
  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);

    try {
      const encodedPrompt = encodeURIComponent(parsedPrompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;

      return NextResponse.json({
        success: true,
        url: dynamicFallbackUrl,
        imageUrl: dynamicFallbackUrl,
        isFallback: true,
        warning: `Critical crash: ${error.message}. Successfully resolved via dynamic Pollinations AI (FLUX) fallback.`
      });
    } catch (fallbackErr: any) {
      console.error("Critical fallback failed:", fallbackErr);
      const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1024&h=1024&q=80";
      return NextResponse.json({
        success: true,
        url: defaultFallbackUrl,
        imageUrl: defaultFallbackUrl,
        isFallback: true,
        warning: `All attempts crashed. Loaded default external legal balance vector.`
      });
    }
  }
}
