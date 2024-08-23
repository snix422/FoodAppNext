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
        <div className="filters flex flex-col items-center gap-4">
                <input
                    type="text"
                    placeholder="Szukaj po nazwie"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="filter-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                />
                <div className="type-filter flex flex-col items-center gap-2 ">
                    <label className="text-lg">Typ posiłku: </label>
                    <select
                        value={mealType}
                        onChange={handleMealTypeChange}
                        className="filter-input w-full text-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors duration-300 appearance-none bg-white"
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