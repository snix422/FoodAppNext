"use client"

import Image from "next/image"

const PostItem = ({data}:{data:any}) => {
    console.log(data,'post')
    return(
        <div className="w-1/5 h-[30vh] relative mb-12">
            <div className="w-full h-[80%] relative rounded">
                <Image
                    className="rounded"
                    src={data.imageUrl}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="text-lg text-bold">{data.title}</h2>
            <span>{data.dataPublikacji.slice(0,10)}</span>
        </div>
    )
}

export default PostItem