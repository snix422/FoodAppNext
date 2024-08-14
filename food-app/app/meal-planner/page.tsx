

import MealPlannerForm from "@/components/MealPlanner/MealPlannerForm";
import MealPlannerSelectList from "@/components/MealPlanner/MealPlannerSelectList";
import MealPlannerSubmitButton from "@/components/MealPlanner/MealPlannerSubmitButton";
import { setMeals } from "@/redux/slices/mealSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const getMeals = async () => {
    const res = await fetch("http://localhost:3000/api/getMeals");
    if(!res.ok){
      return []
    }
    return res.json();
}

const mealPlannerPage = async () => {
/*const dispatch = useDispatch();

  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch(`http://localhost:3000/api/getMeals`);
      if (response.ok) {
        const meals = await response.json();
        console.log(meals, 'test')
        dispatch(setMeals(meals)); // Upewnij się, że masz setMeals w slicie
      }
    };

    loadMeals();
  }, []);*/
  const meals = await getMeals();
 
    return(
        <main>
            <MealPlannerForm meals={meals} />
            <MealPlannerSelectList meals={meals} />
            <MealPlannerSubmitButton />
           
        </main>
    )
}

export default mealPlannerPage