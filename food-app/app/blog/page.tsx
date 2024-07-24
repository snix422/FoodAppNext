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
        <main>
            <h1>Blog</h1>
            <section>
                {posts.map((post:any)=>{
                    return(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <h4>{post.author}</h4>
                            <Link href={`/blog/${post.id}`}>
                                <button>Zobacz</button>
                            </Link>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default Blog