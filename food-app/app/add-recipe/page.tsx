"use client"
import { sendRecipe } from "@/lib/actions";
import { useFormState } from 'react-dom';

interface RecipeFormData {
    title: string;
    content: string;
    author: string;
}

const AddRecipe = async () => {
    const [state, formAction] = useFormState(sendRecipe, undefined);
    return(
        <main>
            <h1>Add a New Recipe</h1>
            <form action={formAction}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        required
                    />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </main>
    )
}

export default AddRecipe