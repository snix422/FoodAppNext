"use client"

import { setSelectedMeal } from "@/redux/slices/mealPlannerSlice";
import { RootState } from "@/redux/store";
import { MealType } from "@prisma/client";
import { useDispatch, useSelector } from "react-redux";

const MealPlannerForm = ({meals}:{meals:any}) => {
    const dispatch = useDispatch();
    const { selectedMeals } = useSelector((state: RootState) => state.mealPlanner);
    console.log(meals);
    console.log(selectedMeals);

    const getFilteredMeals = (mealType: MealType) => {
        return meals.filter((meal:any) => meal.type === mealType);
      };
    
      const handleChange = (mealType: MealType, event: React.ChangeEvent<HTMLSelectElement>) => {
        const mealId = event.target.value;
        dispatch(setSelectedMeal({ mealType, mealId }));
      };
      
    return(
    <div>
      <span>Selected</span>
      {selectedMeals.map((m)=><h2>{m.title}</h2>)}
      <h2>Wybierz posiłki na każdy posiłek dnia</h2>
      {Object.values(MealType).map((mealType) => (
        <div key={mealType}>
          <label>
            {mealType}:
            <select
              value={selectedMeals.find((selection) => selection.mealType === mealType)?.mealId || ''}
              onChange={(event) => handleChange(mealType, event)}
            >
              <option value="">-- Wybierz --</option>
              {getFilteredMeals(mealType).map((meal:any) => (
                <option key={meal.id} value={meal.id}>
                  {meal.title}
                </option>
              ))}
            </select>
          </label>
          
        </div>
      ))}
    </div>
    )}

export default MealPlannerForm