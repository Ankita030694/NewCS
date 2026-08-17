import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const logs: string[] = [];
  const addLog = (msg: string) => {
    const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
    const formatted = `[${timestamp}] ${msg}`;
    logs.push(formatted);
    console.log(`[AI Image Generator] ${formatted}`);
  };

  const apiKey = process.env.HELLO_DROP_CHOO || process.env.OPENAI_API_KEY;

  try {
    const body = await request.json();
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : undefined;

    if (!prompt) {
      addLog("Validation Error: 'prompt' field is missing or empty.");
      return NextResponse.json(
        { success: false, error: "Prompt is required", logs },
        { status: 400 }
      );
    }

    addLog(`Received prompt (${prompt.length} chars): "${prompt.slice(0, 100)}..."`);

    // STRATEGY 1: OpenAI Image API with gpt-image-2
    if (apiKey) {
      addLog("OpenAI API key detected. Attempting generation with gpt-image-2...");

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000);

        const response = await fetch("https://api.openai.com/v1/images/generations", {
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
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const data = await response.json();

        if (response.ok && data.data?.[0]) {
          const firstItem = data.data[0];
          const imageUrl = firstItem.b64_json
            ? `data:image/png;base64,${firstItem.b64_json}`
            : firstItem.url;

          if (imageUrl) {
            addLog("gpt-image-2 generation succeeded.");
            return NextResponse.json({
              success: true,
              url: imageUrl,
              imageUrl: imageUrl,
              model: "gpt-image-2",
              logs,
            });
          }
        }

        const errMsg = data.error?.message || response.statusText || "Empty or invalid response from OpenAI";
        addLog(`gpt-image-2 returned status ${response.status}: ${errMsg}`);
      } catch (openaiErr: any) {
        addLog(`gpt-image-2 request error: ${openaiErr.message || String(openaiErr)}`);
      }
    } else {
      addLog("OpenAI API secret (HELLO_DROP_CHOO / OPENAI_API_KEY) is not configured.");
    }

    // STRATEGY 2: Server-side Pollinations AI (FLUX) Generation & Buffer Proxy
    addLog("Initiating high-resolution Pollinations AI (FLUX) generation...");
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const seed = Math.floor(Math.random() * 1000000);
      const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${seed}&model=flux`;

      addLog(`Fetching image buffer from Pollinations AI (seed: ${seed})...`);
      const imgFetch = await fetch(pollinationsUrl, {
        headers: {
          "User-Agent": "CredSettle-BlogGenerator/1.0",
        },
      });

      if (imgFetch.ok) {
        const arrayBuffer = await imgFetch.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const contentType = imgFetch.headers.get("content-type") || "image/jpeg";
        const b64DataUrl = `data:${contentType};base64,${buffer.toString("base64")}`;

        addLog(`Pollinations AI generation successful (${(buffer.length / 1024).toFixed(1)} KB converted to base64).`);
        return NextResponse.json({
          success: true,
          url: b64DataUrl,
          imageUrl: b64DataUrl,
          isFallback: true,
          model: "pollinations-flux",
          logs,
        });
      } else {
        addLog(`Pollinations AI returned HTTP status ${imgFetch.status}. Returning direct URL.`);
        return NextResponse.json({
          success: true,
          url: pollinationsUrl,
          imageUrl: pollinationsUrl,
          isFallback: true,
          model: "pollinations-flux-url",
          logs,
        });
      }
    } catch (pollinationsError: any) {
      addLog(`Pollinations AI generation error: ${pollinationsError.message || String(pollinationsError)}`);
    }

    // STRATEGY 3: Final Corporate Stock Legal Asset
    addLog("All dynamic generators failed. Using high-quality verified legal placeholder asset.");
    const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1024&h=1024&q=80";

    return NextResponse.json({
      success: true,
      url: defaultFallbackUrl,
      imageUrl: defaultFallbackUrl,
      isFallback: true,
      model: "static-fallback",
      warning: "Loaded default legal balance asset.",
      logs,
    });
  } catch (criticalError: any) {
    addLog(`Critical API crash: ${criticalError.message || String(criticalError)}`);
    return NextResponse.json(
      {
        success: false,
        error: criticalError.message || "Internal server error during image generation",
        logs,
      },
      { status: 500 }
    );
  }
}
