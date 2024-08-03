import PostItem from "./PostItem"

const PostsList = ({posts}:{posts:any[]}) => {
    return(
        <div>
            {posts.map((p:any)=>{
                return(
                    <PostItem data={p}/>
                )
            })}
        </div>
    )
}

export default PostsList