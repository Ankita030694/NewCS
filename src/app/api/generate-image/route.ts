import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { adminStorage } from '@/lib/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        // 1. Generate image using DALL-E 3
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            response_format: "url",
        });

        const imageUrl = response.data?.[0]?.url;
        if (!imageUrl) {
            throw new Error('No image URL returned from OpenAI');
        }

        // 2. Download the image
        const imageRes = await fetch(imageUrl);
        const imageBuffer = await imageRes.arrayBuffer();

        // 3. Upload to Firebase Storage
        const bucket = adminStorage.bucket();
        const fileName = `blog-images/${uuidv4()}.png`;
        const file = bucket.file(fileName);

        await file.save(Buffer.from(imageBuffer), {
            metadata: {
                contentType: 'image/png',
            },
        });

        // 4. Make public or get signed URL
        // For simplicity, we can use a direct Firebase Storage URL with 'alt=media' or make it public
        await file.makePublic();
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileName)}?alt=media`;

        return NextResponse.json({ url: publicUrl });

    } catch (error) {
        console.error('Error generating image:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const runtime = 'nodejs'; // Use nodejs runtime for Buffer and firebase-admin
