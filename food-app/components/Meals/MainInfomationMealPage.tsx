"use client"

import Image from "next/image"

interface MainInformationMealPageProps {
    data:any
}

const MainInformationMealPage :React.FC<MainInformationMealPageProps> = ({data}) => {
    console.log(data);
    return(
        <div className="w-[100vw] h-[70vh] flex">
    <div className="w-[30vw] h-[30vh]">
        <Image src={data?.imageUrl} alt={data?.title} layout="fill" objectFit="cover" />
    </div>
    <div className="w-[70vw] p-4">
        <h2 className="text-xl font-bold">{data?.title}</h2>
        <p className="mt-2">{data?.content}</p>
        <div className="mt-4 space-y-2">
            <span className="block">Kcal: {data?.kcal}</span>
            <span className="block">Węglowodany: {data?.carbohydrates}</span>
            <span className="block">Białko: {data?.protein}</span>
            <span className="block">Tłuszcz: {data?.fat}</span>
        </div>
    </div>
</div>
    )
}

export default MainInformationMealPage