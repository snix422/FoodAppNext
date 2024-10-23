
import { savePostToDatabase } from "./posts";
import { Meal } from "@/types/types";


type FormState = {
    message: string | null;
};

export async function sendPost(prevState: FormState,formData:any): Promise<any>{
    console.log(formData);
    const title = formData.get("title") as string;
    const content = formData.get("content");
    const author = formData.get("author");
    const img = formData.get("image") as File | null;
    let imageUrl = "";
    console.log(img);

    let titleError = "";
    let contentError = ""
    let authorError = ""

    if(!title){
        titleError = "Pole tytuł nie może być puste"
    }
    if(!content){
        contentError = "Pole treść nie może być puste"
    }
    if(!author){
        authorError = "Pole autor nie może być puste"
    }

    if (img) {
        try {
            const formData = new FormData();
            formData.append('file', img);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                console.log(response);
                throw new Error('Failed to upload image');
            }
            console.log('po fetchu');
            const data = await response.json();
            imageUrl = data.imageUrl;
            console.log('Image URL:', imageUrl);
        } catch (error) {
            console.error('Error uploading image to server:', error);
            return { title: titleError, content: contentError, author: authorError };
        }
    }

      try {
        await savePostToDatabase(title, content, author, imageUrl);
      } catch (error) {
        console.error('Error saving post:', error);
        return { title: titleError, content: contentError, author: authorError };
      }

    return {title:titleError,content:contentError,author:authorError};
}


interface SaveMealsParams {
    userId: string;
    meals: Meal[];
  }
  
  export async function saveMeals({ userId, meals }: SaveMealsParams): Promise<void> {
    const response = await fetch('/api/sendRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        meals,
      }),
    });
  
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save meals');
    }
  
    return response.json();
  }