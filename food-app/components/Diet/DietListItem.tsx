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
        <div className="w-[80vw] h-[30vh] flex flex-col justify-center items-center gap-12 rounded-xl bg-gray-200">
            <div className="flex items-center gap-12">
            {mealsType.map((m:any) => <DietListItemMeal title={m.title} meal={m.meal} />)}
            </div>
            <SummaryStatistic kcal={kcalAmount} carbohydrates={carbohydratesAmount} protein={proteinAmount} fat={fatAmount} /> 
        </div>
    );

}

export default DietListItem