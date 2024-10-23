"use client"

import { useState } from "react";

const AddRecipe = () => {

    const [ingredients, setIngredients] = useState<any>([{ name: "", quantity: "" }]);

    const handleInputChange = (index:any, event:any
    ) => {
        const values = [...ingredients];
        values[index][event.target.name] = event.target.value;
        setIngredients(values);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: "", quantity: "" }]);
    };

    const handleRemoveIngredient = (index:any) => {
        const values = [...ingredients];
        values.splice(index, 1);
        setIngredients(values);
    };
    return(
        <main>
            <h1>Add a New Recipe</h1>
            <form>
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

                <div>
                    <label>Ingredients</label>
                    {ingredients.map((ingredient:any, index:number) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="name"
                                value={ingredient.name}
                                placeholder="Ingredient Name"
                                onChange={event => handleInputChange(index, event)}
                                required
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={ingredient.quantity}
                                placeholder="Quantity"
                                onChange={event => handleInputChange(index, event)}
                                required
                            />
                            <button type="button" onClick={() => handleRemoveIngredient(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                </div>



                <button type="submit">Add Recipe</button>
                
            </form>
        </main>
    )
}

export default AddRecipe