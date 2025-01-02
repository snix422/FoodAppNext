import { getLatestPosts } from "@/libs/api/getLatestPosts";
import HeadingTitle from "./HeadingTitle";
import PostsList from "./PostsList";


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