import HeadingTitle from "@/components/Blog/HeadingTitle";
import PostsList from "@/components/Blog/PostsList";
import { Post } from "@prisma/client";

const getPosts = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
    if(!res.ok){
        throw new Error(`Nie udało się pobrać postów ${res.status}`)
    }
    return res.json()
}

const Blog = async () => {
    const posts : Post[] = await getPosts();
    return (
        <main className="min-h-[100vh] bg-red-100 pt-12">
            <HeadingTitle title="Blog" className="text-4xl" />
            <PostsList posts={posts}/>
        </main>
    )
}

export default Blog