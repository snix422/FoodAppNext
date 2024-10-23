import HeadingTitle from "./HeadingTitle";
import PostsList from "./PostsList";

const getLatestPosts = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getLatestPost`);
    if(!res.ok){
        throw new Error("Wystąpił problem z pobraniem ostatnich postów")
    }
    return res.json();
}

const LatestPosts = async () => {
    const latestPosts = await getLatestPosts();
    return(
        <section className="w-[100vw] bg-blue-200 pt-24">
            <HeadingTitle title="Ostatnie wpisy" className="text-4xl" />
            <PostsList posts={latestPosts} />
        </section>
    )
}

export default LatestPosts