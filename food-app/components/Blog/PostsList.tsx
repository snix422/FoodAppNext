import PostItem from "./PostItem"

const PostsList = ({posts}:{posts:any[]}) => {
    return(
        <div className="flex flex-wrap w-[100vw] gap-8 justify-center">
            {posts.map((p:any)=>{
                return(
                    <PostItem data={p}/>
                )
            })}
        </div>
    )
}

export default PostsList