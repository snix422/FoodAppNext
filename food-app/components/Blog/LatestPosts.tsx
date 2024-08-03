import HeadingTitle from "./HeadingTitle";
import PostsList from "./PostsList";

const getLatestPosts = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getLatestPost`);
    if(!res.ok){
        console.log(res)
    }
    return res.json();
}

const LatestPosts = async () => {
    const latestPosts = await getLatestPosts();
    return(
        <section>
            <HeadingTitle title="Ostatnie wpisy" />
            <PostsList posts={latestPosts} />
        </section>
    )
}

export default LatestPosts