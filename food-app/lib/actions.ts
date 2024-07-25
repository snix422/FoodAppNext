"use server"

import { redirect } from "next/navigation";
import { sendMeal } from "./meals";

export async function sendRecipe(state:void,formData: FormData) :Promise<void> {
    'use server';
    const title = formData.get('title')?.toString();
    const content = formData.get('content')?.toString();
    const author = formData.get('author')?.toString();

    if (!title || !content || !author) {
        throw new Error('All fields are required');
    }

    try {
        sendMeal(title,content,author);
        redirect('/'); // Przekierowanie po dodaniu
    } catch (error) {
        console.error('Error adding recipe:', error);
        throw new Error('Internal Server Error');
    }
}