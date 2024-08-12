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
    selectedMeals: any[];
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
        setSelectedMeal(state,action:PayloadAction<any>){
            //const {mealType, mealId} = action.payload;
            /*const existingSelection = state.selectedMeals.find((selection)=>
                selection.type === action.payload.type
            )
            if(existingSelection){
               
                //existingSelection.id = action.payload.id;
                state.selectedMeals.filter(m => m.id !== existingSelection.id);
                state.selectedMeals.push(action.payload);
            }else{
                state.selectedMeals.push(action.payload)
            }*/
                const newMeal = action.payload;

                // Znajdź indeks istniejącego posiłku z tym samym typem posiłku
                const existingIndex = state.selectedMeals.findIndex((meal) => meal.type === newMeal.type);
          
                if (existingIndex !== -1) {
                  // Jeśli istnieje taki posiłek, usuń go
                  state.selectedMeals.splice(existingIndex, 1);
                }
          
                // Dodaj nowy posiłek
                state.selectedMeals.push(newMeal);
        },
        clearSelectedMeals(state){
            state.selectedMeals = []
        }
    }
})

export const {setSelectedMeal, clearSelectedMeals} = mealPlannerSlice.actions;
export default mealPlannerSlice.reducer;