import Image from "next/image"
import DietListItemMeal from "./DietListItemMeal";
import SummaryStatistic from "./SummaryStatistic";

const DietListItem = ({meal,id}:{meal:any,id:number}) => {
    console.log(meal.Meal_sniadanie.imageUrl)
    const mealsType = [{title:"Śniadanie", meal:meal.Meal_sniadanie},
        {title:"2 Śniadanie",meal:meal.Meal_drugieSniadanie},
        {title:"Obiad",meal:meal.Meal_obiad},
        {title:"Kolacja",meal:meal.Meal_kolacje}
    ];

    const kcalAmount = mealsType.reduce((sum:number,curValue)=>sum+curValue.meal.kcal,0)
    const carbohydratesAmount = mealsType.reduce((sum:number,curValue)=>sum+curValue.meal.carbohydrates,0)
    const proteinAmount = mealsType.reduce((sum:number,curValue) => sum+curValue.meal.protein,0);
    const fatAmount = mealsType.reduce((sum:number,curValue) => sum + curValue.meal.fat,0);
    return (
        <div className="w-[80vw] mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-8">
        {/* Lista posiłków */}
        <div className="flex flex-wrap gap-6 justify-center">
            {mealsType.map((m) => (
                <DietListItemMeal key={m.title} title={m.title} meal={m.meal} />
            ))}
        </div>
        {/* Podsumowanie statystyk */}
        <SummaryStatistic
            kcal={kcalAmount}
            carbohydrates={carbohydratesAmount}
            protein={proteinAmount}
            fat={fatAmount}
        />
    </div>
);

}

export default DietListItem