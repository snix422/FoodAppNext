import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./slices/mealSlice"
import mealsPlannerReducer from "./slices/mealPlannerSlice"
import burgerMenuReducer from "./slices/burgerMenuSlice"

export const store = configureStore({
    reducer:{
        meals: mealsReducer,
        mealPlanner: mealsPlannerReducer,
        burgerMenu: burgerMenuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

