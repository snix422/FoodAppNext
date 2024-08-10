"use client"

import { Meal } from "@/types/types"
import MealPlannerItem from "./MealPlannerItem"
import { MealType } from "@prisma/client"

const MealPlannerSelectList = ({meals}:{meals:any[]}) => {
    console.log(meals)

    const groupedMeals = {
        [MealType.BREAKFAST]: meals.filter(m => m.type === MealType.BREAKFAST),
        [MealType.SECOND_BREAKFAST]: meals.filter(m => m.type === MealType.SECOND_BREAKFAST),
        [MealType.LUNCH]: meals.filter(m => m.type === MealType.LUNCH),
        [MealType.DINNER]: meals.filter(m => m.type === MealType.DINNER),
    };

    const mealTypeLabels = {
        [MealType.BREAKFAST]: 'Śniadanie',
        [MealType.SECOND_BREAKFAST]: '2 Śniadanie',
        [MealType.LUNCH]: 'Obiad',
        [MealType.DINNER]: 'Kolacja',
    };
    return(
        <>
         {Object.entries(groupedMeals).map(([mealType, mealList]) => (
                <div key={mealType} className="flex flex-col items-center mt-8">
                    <h3>{mealTypeLabels[mealType as unknown as MealType]}</h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                    {mealList.length > 0 ? mealList.map((m: Meal) => (
                        <div key={m.id} className="flex">
                            <MealPlannerItem data={m} />
                        </div>
                    )) : <p>Brak posiłków w tej kategorii</p>}
                    </div>
                </div>
            ))}
        </>
    )
}

export default MealPlannerSelectList