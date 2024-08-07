import prisma from "@/prisma/client";
import { savePostToDatabase, uploadImageToCloudinary } from "./posts";

type FormData = {
    title: string;
    content: string;
    author: string;
};

/*export async function sendMeal(title:string, content:string, author:string) {
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
}*/

type FormState = {
    message: string | null;
};

export async function sendPost(prevState: FormState,formData:any): Promise<any>{
    console.log(formData);
    const title = formData.get("title") as string;
    const content = formData.get("content");
    const author = formData.get("author");
    const img = formData.get("image");
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
          imageUrl = await uploadImageToCloudinary(img);
        } catch (error) {
          console.error('Error uploading image to Cloudinary:', error);
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