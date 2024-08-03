"use client"

import FilterOptions from "@/components/Meals/FilterOptions";
import MealHeadingTitle from "@/components/Meals/MealHeadingTitle";
import MealItem from "@/components/Meals/MealItem"
import MealsList from "@/components/Meals/MealsList"
import { setMeals } from "@/redux/slices/mealSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const Meals = () => {
    //const meals = await getMeals();
    const dispatch:AppDispatch = useDispatch();
    const {meals} = useSelector((state:RootState)=>state.meals);

    useEffect(() => {
        const fetchMeals = async () => {
          const res = await fetch(`http://localhost:3000/api/getMeals`);
          if (res.ok) {
            const meals = await res.json();
            dispatch(setMeals(meals));
          }
        };
    
        fetchMeals();
      }, [dispatch]);

    return(
        <main className="flex flex-col items-center gap-12 pt-12 pb-12">
            <MealHeadingTitle title="Nasze posiłki" />
            <FilterOptions />
            <MealsList meals={meals}/>
        </main>
    )
}

export default Meals