import { Post } from "@prisma/client"
import PostItem from "./PostItem"

const PostsList = ({posts}:{posts:Post[]}) => {
    return(
        <div className="flex flex-wrap w-[100vw] gap-8 justify-center">
            {posts.map((p:any)=>{
                return(
                    <PostItem key={p.item} data={p}/>
                )
            })}
        </div>
    )
}

export default PostsList