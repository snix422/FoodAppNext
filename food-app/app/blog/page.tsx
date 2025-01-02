import HeadingTitle from "@/components/Blog/HeadingTitle";
import PostsList from "@/components/Blog/PostsList";
import { getPosts } from "@/libs/api/getPosts";
import { Post } from "@prisma/client";



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