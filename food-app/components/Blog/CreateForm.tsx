const CreateForm = () => {
    return(
        <form className="flex flex-col items-center w-[20vw]">
        <div className="flex flex-col items-center w-full mt-8">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-4/4"
                required
            />
        </div>
        <div className="flex flex-col items-center w-full mt-8">
            <label htmlFor="content">Content</label>
            <textarea
                id="content"
                name="content"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
        </div>
        <div className="flex flex-col items-center w-full mt-8">
            <label htmlFor="author">Author</label>
            <input
                type="text"
                id="author"
                name="author"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105 mt-12">Dodaj post</button>
        </form>
    )
}

export default CreateForm