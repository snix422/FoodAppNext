import prisma from "@/prisma/client";

export async function sendMeal(title:string, content:string, author:string) {
    if (!title || !content || !author) {
        throw new Error('All fields are required');
    }

    try {
        // Zapisz przepis do bazy danych
        await prisma.post.create({
            data: {
                title,
                content,
                author,
            },
        });
    } catch (error) {
        console.error('Error in sendMeal:', error);
        throw new Error('Internal Server Error');
    }
}