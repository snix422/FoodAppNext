"use client"

import Image from "next/image"
import ButtonSeeMore from "./ButtonSeeMore"

const PostItem = ({data}:{data:any}) => {
    console.log(data,'post')
    return(
        <div className="w-1/5 flex flex-col h-[50vh] w-[30vw] relative mb-12">
            <div className="w-full h-[80%] relative rounded">
                <Image
                    className="rounded"
                    src={data.imageUrl}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="text-lg font-bold">{data.title}</h2>
            <span>{data.dataPublikacji.slice(0,10)}</span>
            <ButtonSeeMore title="Zobacz więcej" id={data.id}/>
        </div>
    )
}

export default PostItem