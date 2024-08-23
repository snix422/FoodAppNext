"use client"

import Image from "next/image"
import ButtonSeeMore from "./ButtonSeeMore"

const PostItem = ({ data }: { data: any }) => {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 flex flex-col h-[40vh] relative mb-12 bg-white rounded-lg shadow-md">
    <div className="relative w-full h-[70%] rounded-lg overflow-hidden">
        <Image
            className="object-cover"
            src={data.imageUrl}
            alt={data.title}
            layout="fill"
        />
    </div>
    <div className="flex flex-col p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
        <span className="text-sm text-gray-500">{data.dataPublikacji.slice(0, 10)}</span>
        <ButtonSeeMore title="Zobacz więcej" id={data.id} />
    </div>
</div>
    );
};

export default PostItem