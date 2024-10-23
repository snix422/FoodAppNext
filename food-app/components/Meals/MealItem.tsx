"use client"

import { Meal, MealTypeTranslation } from "@/types/types"
import { MealType } from "@prisma/client";
import Image from "next/image";
import ButtonDetails from "./ButtonDetails";

const MealItem = ({data}:{data:Meal}) => {
   
    const mealType: MealType = data.type;
    console.log(data);

    return(
        <div className="max-md:w-4/5 max-xl:w-2/5 w-1/5 h-[30vh] relative mb-12">
            <div className="w-full h-[80%] relative rounded">
                <Image
                    className="rounded"
                    src={data?.imageUrl}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="text-lg font-bold">{data.title}</h2>
            <p>{MealTypeTranslation[mealType]}</p>
            <ButtonDetails title={data.title} />
        </div>
    )
}

export default MealItem