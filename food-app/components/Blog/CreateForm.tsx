"use client"

import { sendPost } from "@/lib/meals"
import { useFormState } from "react-dom"
import ImagePicker from "./ImagePicker";

const CreateForm = () => {
    const [state,formAction,pending] = useFormState(sendPost,{title:null,content:null,author:null});

    return(
        <form action={formAction} className="flex flex-col items-center w-[20vw]">
        <div className="flex flex-col items-center w-full mt-8">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                className="mt-1 p-2 w-[30vw] max-xl:w-[60vw] max-md:w-[70vw] max-sm:w-[80vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-4/4"
                
            />
            {state.title ? <span>{state.title}</span> : null}
        </div>
        <div className="flex flex-col items-center w-full mt-8">
            <label htmlFor="content">Content</label>
            <textarea
                id="content"
                name="content"
                className="mt-1 p-2 w-[30vw] max-xl:w-[60vw] max-md:w-[70vw] max-sm:w-[80vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                
            />
            {state.content ? <span>{state.content}</span> : null}
        </div>
        <div className="flex flex-col items-center w-full mt-8">
            <label htmlFor="author">Author</label>
            <input
                type="text"
                id="author"
                name="author"
                className="mt-1 p-2 w-[30vw] max-xl:w-[60vw] max-md:w-[70vw] max-sm:w-[80vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                
            />
            {state.author ? <span>{state.author}</span> : null}
        </div>
        <ImagePicker label="Your image" name="image" />
        <button type="submit" className="w-full max-md:w-[50vw] bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105 mt-12">
            {pending ? "Ładowanie" : "Dodaj post"}
        </button>
        </form>
    )
}

export default CreateForm