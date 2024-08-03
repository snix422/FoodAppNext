"use client"

import { MealTypeTranslation } from "@/types/types"
import { MealType } from "@prisma/client";

const MealItem = ({data}:{data:any}) => {
    const mealType: MealType = data.type;
    return(
        <div className="w-1/5">
            <h2>{data.title}</h2>
            <span>{data.kcal}</span>
            <p>{MealTypeTranslation[mealType]}</p>
        </div>
    )
}

export default MealItem