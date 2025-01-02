
import MealPlannerSelectList from "@/components/MealPlanner/MealPlannerSelectList";
import MealPlannerSubmitButton from "@/components/MealPlanner/MealPlannerSubmitButton";
import MealPlannerTitle from "@/components/MealPlanner/MealPlannerTitle";
import { getMeals } from "@/libs/api/getMeals";




const mealPlannerPage = async () => {
  const meals = await getMeals();
    return(
        <main className="w-[100vw] min-h-[100vh] bg-red-100 flex flex-col items-center pt-12 pb-12">
            <MealPlannerTitle title="Planer diety" />
            <MealPlannerSelectList meals={meals} />
            <MealPlannerSubmitButton />           
        </main>
    )
}

export default mealPlannerPage