import { Meal, MealsStateRedux } from "@/types/types";
import { MealType } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MealsStateRedux = {
    meals: [],
    filteredMeals: [],
    searchTerm: "",
    mealType: ""
}

const mealsSlice = createSlice({
    name:"meals",
    initialState,
    reducers: {
        setMeals(state,action:PayloadAction<Meal[]>){
            state.meals = action.payload;
            state.filteredMeals = action.payload;
        },
        filterMeals(state){
            const {meals,searchTerm,mealType} = state;
            state.filteredMeals = meals.filter(meal => 
                meal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (mealType === "" || meal.type === mealType)
            )
        },
        setSearchTerm(state,action:PayloadAction<string>){
            state.searchTerm = action.payload;
            state.filteredMeals = state.meals.filter(meal => 
                meal.title.toLowerCase().includes(action.payload.toLowerCase()) && 
                (state.mealType === "" || meal.type === state.mealType)
            )
        },
        setMealType(state,action:PayloadAction<MealType | "">){
            state.mealType = action.payload;
            state.filteredMeals = state.meals.filter(meal =>
                meal.title.toLowerCase().includes(state.searchTerm.toLowerCase()) && 
                (action.payload === "" || meal.type === action.payload)
            )
        }
    }
})

export const {setMeals, filterMeals,setSearchTerm,setMealType} = mealsSlice.actions;
export default mealsSlice.reducer;