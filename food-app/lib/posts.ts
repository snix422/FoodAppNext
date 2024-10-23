
"use server"

import { PrismaClient } from '@prisma/client';
import FormData from 'form-data';
import fetch from 'node-fetch';
import toast from 'react-hot-toast';
import Error from 'next/error';

const prisma = new PrismaClient();

export async function savePostToDatabase(title: string, content: string, authorName: string, image:string) {
    const loadingToast = toast.loading("Dodawanie posta...")
    try {
       
        let author = await prisma.author.findFirst({
            where: { name: authorName }
        });

       
        if (!author) {
            console.log('Creating new author:', authorName);
            author = await prisma.author.create({
                data: {
                    name: authorName
                }
            });
        }

        
        await prisma.post.create({
            data: {
                title,
                content,
                authorId: author.id,
                imageUrl: image
            }
        });

        
        toast.success("Post został pomyślnie dodany");
        return {
            message: "Post został pomyślnie dodany",
            errors: {}
        };
    } catch (error:any) {
        
        console.error("Błąd podczas dodawania posta:", error);
        toast.error("Wystąpił błąd podczas dodawania posta. Spróbuj ponownie."); 
        return {
            message: "Wystąpił błąd",
            errors: error?.message || "Nieznany błąd"
        };
    }finally{
        toast.dismiss(loadingToast)
    }
}




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
        headers: form.getHeaders(), 
    });

    if (!response.ok) {
        //throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    }

    const result: CloudinaryResponse = await response.json() as CloudinaryResponse;
    console.log('Upload successful, URL:', result.secure_url);
    return result.secure_url;
}