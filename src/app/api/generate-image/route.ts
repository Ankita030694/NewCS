import { NextRequest, NextResponse } from "next/server";
import { adminStorage } from '@/lib/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid';

export const maxDuration = 300;

export async function POST(req: NextRequest) {
  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
      { status: 500 }
    );
  }

  // Helper function to download and save an image to Firebase Storage
  const saveImageToFirebase = async (imageUrl: string, promptText: string): Promise<string> => {
    let buffer: Buffer;
    let contentType = "image/png";

    if (imageUrl.startsWith("data:")) {
      const base64Parts = imageUrl.split(",");
      const base64Data = base64Parts[1];
      buffer = Buffer.from(base64Data, "base64");
      const match = base64Parts[0].match(/data:(.*?);base64/);
      if (match) {
        contentType = match[1];
      }
    } else {
      const imageFetchResponse = await fetch(imageUrl);
      if (!imageFetchResponse.ok) {
        throw new Error(`Failed to fetch generated image: ${imageFetchResponse.statusText}`);
      }
      const imageArrayBuffer = await imageFetchResponse.arrayBuffer();
      buffer = Buffer.from(imageArrayBuffer);
      contentType = imageFetchResponse.headers.get("content-type") || "image/png";
    }

    let finalBuffer: any = buffer;
    let finalContentType = contentType;

    try {
      const sharp = (await import("sharp")).default;
      let pipeline = sharp(buffer);
      const metadata = await pipeline.metadata();

      if (metadata.format === "jpeg" || metadata.format === "png") {
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({
            width: 1200,
            fit: "inside",
            withoutEnlargement: true
          });
        }

        if (metadata.format === "png") {
          finalBuffer = await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
          finalContentType = "image/png";
        } else {
          finalBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
          finalContentType = "image/jpeg";
        }
      }
    } catch (sharpError) {
      console.warn("Could not process dynamic generated image with sharp, saving raw file:", sharpError);
    }

    const bucket = adminStorage.bucket();
    const fileName = `blog-images/ai-generated-${uuidv4()}.${finalContentType === 'image/png' ? 'png' : 'jpg'}`;
    const file = bucket.file(fileName);

    await file.save(finalBuffer, {
      metadata: {
        contentType: finalContentType,
        metadata: { prompt: promptText }
      },
    });

    await file.makePublic();
    return `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileName)}?alt=media`;
  };

  try {
    const body = await req.json();
    const prompt = typeof body.prompt === "string" ? body.prompt : undefined;
    if (!prompt) {
      return NextResponse.json({ error: "Missing image prompt string parameter." }, { status: 400 });
    }

    console.log("[AI Image Generator] Attempting generation with dall-e-3 model (1024x1024 resolution)...");
    
    // Enhance the prompt for high quality corporate results avoiding text and weird physics
    const enhancedPrompt = `${prompt}. Style: Premium 3D isometric corporate illustration, highly abstract and conceptual. Purely graphical and textless. Use clean geometric shapes and modern gradients (blue and silver). Ensure there is absolutely zero typography, labels, or pseudo-text. Focus on abstract representations of balance and financial security rather than literal objects.`;

    // Attempt dall-e-3 image generation
    const openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: enhancedPrompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.warn(`[AI Image Generator] OpenAI dall-e-3 generation failed: ${data.error?.message || "empty response"}. Falling back to dynamic prompt-based Pollinations AI (FLUX) generation...`);
      
      const encodedPrompt = encodeURIComponent(enhancedPrompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      
      const savedUrl = await saveImageToFirebase(dynamicFallbackUrl, prompt);
      
      return NextResponse.json({ 
        success: true, 
        url: savedUrl,
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: "OpenAI generation failed; successfully resolved via high-speed Pollinations AI (FLUX) fallback."
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

    const savedUrl = await saveImageToFirebase(imageUrl, prompt);

    return NextResponse.json({ success: true, url: savedUrl, imageUrl: savedUrl });
  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);
    
    try {
      const body = await req.json().catch(() => ({}));
      const promptText = typeof body.prompt === "string" ? body.prompt : "Legal money recovery professional illustration";
      const encodedPrompt = encodeURIComponent(promptText);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      
      const savedUrl = await saveImageToFirebase(dynamicFallbackUrl, promptText);
      
      return NextResponse.json({ 
        success: true, 
        url: savedUrl,
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: `Critical crash: ${error.message}. Successfully resolved via dynamic Pollinations AI (FLUX) fallback.` 
      });
    } catch (fallbackErr: any) {
      console.error("Critical fallback failed:", fallbackErr);
      const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1024&h=1024&q=80";
      try {
        const savedUrl = await saveImageToFirebase(defaultFallbackUrl, "Default legal balance vector");
        return NextResponse.json({ 
          success: true, 
          url: savedUrl,
          imageUrl: savedUrl, 
          isFallback: true, 
          warning: `All attempts crashed. Loaded default legal balance vector.` 
        });
      } catch (dbErr) {
        return NextResponse.json({ 
          success: true, 
          url: defaultFallbackUrl,
          imageUrl: defaultFallbackUrl, 
          isFallback: true, 
          warning: `All attempts and database save crashed. Loaded default external legal balance vector.` 
        });
      }
    }
  }
}

export const runtime = 'nodejs'; // Use nodejs runtime for Buffer, sharp, and firebase-admin
