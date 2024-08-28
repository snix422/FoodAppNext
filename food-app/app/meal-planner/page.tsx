"use server"
import MealPlannerSelectList from "@/components/MealPlanner/MealPlannerSelectList";
import MealPlannerSubmitButton from "@/components/MealPlanner/MealPlannerSubmitButton";
import MealPlannerTitle from "@/components/MealPlanner/MealPlannerTitle";


const getMeals = async () => {
    const res = await fetch("http://localhost:3000/api/getMeals");
    if(!res.ok){
      return []
    }
    return res.json();
}

const mealPlannerPage = async () => {
  const meals = await getMeals();
    return(
        <main className="w-[100vw] flex flex-col items-center pt-12 pb-12">
            <MealPlannerTitle title="Planer diety" />
            <MealPlannerSelectList meals={meals} />
            <MealPlannerSubmitButton />           
        </main>
    )
}

export default mealPlannerPage