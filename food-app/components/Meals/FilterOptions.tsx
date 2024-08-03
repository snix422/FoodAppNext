"use client"

import { setMealType, setSearchTerm } from "@/redux/slices/mealSlice";
import { AppDispatch, RootState } from "@/redux/store"
import { MealType } from "@prisma/client";
import { useDispatch, useSelector } from "react-redux"

const FilterOptions = () => {
    const dispatch:AppDispatch = useDispatch();
    const {searchTerm,mealType} = useSelector((state:RootState)=>state.meals);

    const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value))
    }

    const handleMealTypeChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setMealType(e.target.value as MealType))
    }
    return(
        <div className="filters">
                <input
                    type="text"
                    placeholder="Szukaj po nazwie"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="filter-input"
                />
                <div className="type-filter">
                    <label>Typ posiłku: </label>
                    <select
                        value={mealType}
                        onChange={handleMealTypeChange}
                        className="filter-input"
                    >
                        <option value="">Wszystkie</option>
                        <option value={MealType.BREAKFAST}>Śniadanie</option>
                        <option value={MealType.SECOND_BREAKFAST}>Drugie Śniadanie</option>
                        <option value={MealType.LUNCH}>Obiad</option>
                        <option value={MealType.DINNER}>Kolacja</option>
                    </select>
                </div>
            </div>
    )
}

export default FilterOptions