"use client"

import { useEffect } from "react"
import MealItem from "./MealItem"
import { setMeals } from "@/redux/slices/mealSlice"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { MealTypeTranslation } from "@/types/types"

const MealsList = ({meals}:{meals:any}) => {
    const {filteredMeals,searchTerm,mealType} = useSelector((state:RootState)=>state.meals);

    useEffect(()=>{
        setMeals(meals)
    },[meals])

    return(
        <div className="flex flex-col flex-wrap items-center gap-4">
            {searchTerm || mealType ? <h2>Wyszukanie dla:</h2> : null}
            {searchTerm ? <h3>dla frazy: {searchTerm}</h3> : null}
            {mealType ? <h3>dla typu posiłku: {MealTypeTranslation[mealType]}</h3>: null}
            {searchTerm.length>0 || mealType.length>0 && filteredMeals.length>0 ? <h4>Liczba wyników: {filteredMeals.length}</h4> : null}
            {filteredMeals.length == 0 ? <h3>Brak wyników</h3> : null}
            
            <div className="flex flex-wrap justify-center gap-4"> 
            {filteredMeals.map((m:any)=>{
                return(
                    <MealItem data={m} />
                )
            })}
            </div>
        </div>
    )
}

export default MealsList