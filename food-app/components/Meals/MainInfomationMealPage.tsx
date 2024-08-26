"use client"

import Image from "next/image"

interface MainInformationMealPageProps {
    data:any
}

const MainInformationMealPage :React.FC<MainInformationMealPageProps> = ({data}) => {
    console.log(data);
    return(
        <div className="w-[100vw] h-[100vh] flex max-xl:flex-col max-xl:items-center items-center pt-12">
    <div className="w-[50%] h-[50vh] max-xl:w-[70%] max-xl:h-[50vh] relative">
        <Image src={data?.imageUrl} alt={data?.title} layout="fill" objectFit="cover" />
    </div>
    <div className="w-[30vw] max-xl:w-[80%] max-xl:items-center p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">{data?.title}</h2>
        <span className="font-bold">Opis:</span>
        <p className="mt-2">{data?.description}</p>
        <span className="font-bold">Sposób przygotowania:</span>
        <span>{data?.preparation}</span>
        <div className="flex flex-col max-xl:items-center gap-2">
            <span className="font-bold">Składniki:</span>
            {data?.ingredients.map((i:any)=><p>{i}</p>)}
        </div>
    </div>
    <div className="mt-4 space-y-2 flex flex-col items-center">
            <span className="font-bold">Wartośći odżywcze:</span>
            <span className="block">Kcal: {data?.kcal}</span>
            <span className="block">Węglowodany: {data?.carbohydrates}</span>
            <span className="block">Białko: {data?.protein}</span>
            <span className="block">Tłuszcz: {data?.fat}</span>
    </div>
</div>
    )
}

export default MainInformationMealPage