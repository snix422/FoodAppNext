

const getPostById = async (id: number) => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/getPost?id=${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Fetch error: ', error);
        return null;
    }
}

interface PageProps {
    params: {
        id: string; // ID jest typu string
    };
}

const BlogPage = async ({params} :PageProps) => {
   
    const id = Number(params.id);
    const currentPost = await getPostById(Number(id));
    return(
        <main>
            <h1>{currentPost.title}</h1>
        </main>
    )
}

export default BlogPage