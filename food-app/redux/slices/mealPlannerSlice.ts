
import { createSlice, PayloadAction } from "@reduxjs/toolkit"



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
           
                const newMeal = action.payload;

               
                const existingIndex = state.selectedMeals.findIndex((meal) => meal.type === newMeal.type);
          
                if (existingIndex !== -1) {
                 
                  state.selectedMeals.splice(existingIndex, 1);
                }
          
                
                state.selectedMeals.push(newMeal);
        },
        clearSelectedMeals(state){
            state.selectedMeals = []
        }
    }
})

export const {setSelectedMeal, clearSelectedMeals} = mealPlannerSlice.actions;
export default mealPlannerSlice.reducer;