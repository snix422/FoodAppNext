
"use server"

import cloudinary from '@/cloudinary/cloudinary';
import { PrismaClient } from '@prisma/client';
import FormData from 'form-data';
import fetch from 'node-fetch';
import { Readable } from 'stream';
import { promises as fsPromises } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function savePostToDatabase(title: string, content: string, authorName: string, image:string) {
    // Sprawdzenie czy autor istnieje
    let author = await prisma.author.findFirst({
        where: { name: authorName }
    });

    // Jeśli autor nie istnieje, stwórz nowego autora
    if (!author) {
        console.log('Creating new author:', authorName);
        author = await prisma.author.create({
            data: {
                name: authorName
            }
        });
    }

    // Dodanie posta do bazy danych
    await prisma.post.create({
        data: {
            title,
            content,
            authorId: author.id,
            imageUrl:image
        }
    });

    return {
        message: "Post został pomyślnie dodany",
        errors: {}
    };
}



// utils/uploadToCloudinary.ts
interface CloudinaryResponse {
    secure_url: string;
  }
  export async function uploadImageToCloudinary(buffer: Buffer, fileName: string): Promise<string> {
    const form = new FormData();
    form.append('file', buffer, { filename: fileName });
    form.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET || '');

    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: form,
        headers: form.getHeaders(), // użyj getHeaders() z form-data
    });

    if (!response.ok) {
        throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    }

    const result: CloudinaryResponse = await response.json() as CloudinaryResponse;
    console.log('Upload successful, URL:', result.secure_url);
    return result.secure_url;
}