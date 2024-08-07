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

export async function uploadImageToCloudinary(filePath: string): Promise<string> {
    const form = new FormData();
    
    // Read the file as a buffer
    const fileBuffer = await fsPromises.readFile(filePath);
    
    // Extract the file name from the path
    const fileName = path.basename(filePath);
  
    // Append the file to the form-data object
    form.append('file', fileBuffer, { filename: fileName });
    form.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET || '');
  
    // Make a POST request to Cloudinary
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: form,
      headers: form.getHeaders(), // Use getHeaders() to set the correct headers for form-data
    });
  
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    }
  
    // Parse the response and return the image URL
    const result: CloudinaryResponse = await response.json() as CloudinaryResponse;

    return result.secure_url;
  }