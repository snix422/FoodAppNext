import HeadingTitle from "@/components/Blog/HeadingTitle";
import Image from "next/image";


const getPostById = async (id: number) => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/getPost?id=${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        throw new Error("Błąd z pobieraniem danych")
    }
}

interface PageProps {
    params: {
        id: string;
    };
}

const BlogPage = async ({params} :PageProps) => {
   
    const id = Number(params.id);
    const currentPost = await getPostById(Number(id));
    console.log(currentPost)
    return(
        <main className="flex flex-col items-center pt-12">
            <HeadingTitle title={currentPost.title} className="text-4xl" />
            <div className="max-sm:w-[80vw] max-lg:w-[60vw] w-[40vw] h-[40vh] relative rounded">
                <Image
                    className="rounded"
                    src={currentPost.imageUrl}
                    alt={currentPost.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <p className="w-4/5 text-center pt-12 max-md:text-xl text-2xl">{currentPost.content}</p>
            <div className="w-[60vw] flex max-md:flex-col max-md:items-center justify-between pt-12">
            <span className="font-bold">Data stworzenia: {currentPost.dataPublikacji?.slice(0,10)}</span>
            <span className="font-bold">Autor: {currentPost.author?.name}</span>
            </div>
        </main>
    )
}

export default BlogPage