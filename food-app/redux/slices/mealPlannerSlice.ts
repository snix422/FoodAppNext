import { MealType } from "@prisma/client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { act } from "react"

interface MealSelection {
    mealType: MealType;
    mealId: string;
  }
  
  interface Meal {
    id: string;
    title: string;
    type: MealType;
  }
  
  interface MealPlannerState {
    selectedMeals: MealSelection[];
    meals: any[];
  }
  
  const initialState: MealPlannerState = {
    selectedMeals: [],
    meals: [],
  };

const mealPlannerSlice = createSlice({
    name:'mealPlanner',
    initialState,
    reducers:{
        setMeals(state, action: PayloadAction<any[]>) {
            state.meals = action.payload;
        },
        setSelectedMeal(state,action:PayloadAction<MealSelection>){
            const {mealType, mealId} = action.payload;
            const existingSelection = state.selectedMeals.find((selection)=>
                selection.mealType === mealType
            )
            if(existingSelection){
                existingSelection.mealId = mealId
            }else{
                state.selectedMeals.push(action.payload)
            }
        },
        clearSelectedMeals(state){
            state.selectedMeals = []
        }
    }
})

export const {setSelectedMeal, clearSelectedMeals} = mealPlannerSlice.actions;
export default mealPlannerSlice.reducer;