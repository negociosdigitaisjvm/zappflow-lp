import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save file to disk
    const fileName = `${Date.now()}-${file.name}`;
    const path = join(process.cwd(), 'public', 'uploads', fileName);
    await writeFile(path, buffer);

    // Save to database
    const image = await prisma.image.create({
      data: {
        name: file.name,
        path: path,
        url: `/uploads/${fileName}`,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}
