"use client"

import FilterOptions from "@/components/Meals/FilterOptions";
import MealHeadingTitle from "@/components/Meals/MealHeadingTitle";
import MealsList from "@/components/Meals/MealsList"
import DefaultPlaceholder from "@/components/Placeholders/DefaultPlaceholder";
import { setMeals } from "@/redux/slices/mealSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const Meals = () => {
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState<null|string>(null);
    const dispatch:AppDispatch = useDispatch();
    const {meals} = useSelector((state:RootState)=>state.meals);

    useEffect(() => {
      setLoading(true);
      setError(null)
      const fetchMeals = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/getMeals`);
  
          if (!res.ok) {
            throw new Error("Wystąpił problem z pobraniem posiłków");
          }
  
          const data = await res.json();
          dispatch(setMeals(data));
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message); 
          } else {
            setError("Wystąpił nieznany błąd");
          }
        } finally {
          setLoading(false);
        }
      };
    
        fetchMeals();
      }, [dispatch]);

     
      if(error){
        return(
          <main className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl text-red-500">Wystąpił błąd!</h1>
          <p className="text-lg mt-4">{error}</p>
        </main>
        )
      }
    return(
        <main className="flex flex-col items-center gap-12 pt-12 pb-12">
            <MealHeadingTitle title="Nasze posiłki" />
            <FilterOptions />
            {loading ? <DefaultPlaceholder lines={8} height={100} /> : <MealsList meals={meals}/>}
        </main>
    )
}

export default Meals