import HeadingTitle from "@/components/Blog/HeadingTitle";
import PostsList from "@/components/Blog/PostsList";
import Link from "next/link";

const getPosts = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
    if(!res.ok){
        console.log(res)
    }
    return res.json()
}

const Blog = async () => {
    const posts : {id:number, title:string, content:string, author:string}[] = await getPosts();
    return (
        <main className="pt-12">
            <HeadingTitle title="Blog" className="text-4xl" />
            <PostsList posts={posts}/>
        </main>
    )
}

export default Blog