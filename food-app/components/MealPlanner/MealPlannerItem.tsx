"use client"

import { setSelectedMeal } from "@/redux/slices/mealPlannerSlice";
import { RootState } from "@/redux/store";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MealPlannerItem = ({data}:{data:any}) => {
    const [isOpen,setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const selectedItems = useSelector((state:RootState)=>state.mealPlanner.selectedMeals);
    const isSelected = selectedItems.some((s)=>s.id=== data.id);
   
    const toggle = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleSelect = () => {
        dispatch(setSelectedMeal(data));
    }
    
    console.log(data);
    return (
        <div className={`w-[25vw] max-xl:w-[40vw] max-md:w-[80vw] min-h-[50vh] flex flex-col items-center relative mb-12 p-4 rounded-lg transition-transform duration-300 ease-in-out ${isSelected ? 'scale-105 bg-red-50 border-red-500 border-4 shadow-lg' : 'scale-100 bg-white border-gray-200 border-2 shadow-sm'}`}>
            <div className="w-full h-[60%] relative rounded overflow-hidden">
                <Image
                    className="rounded"
                    src={data?.imageUrl}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="text-lg font-bold mt-2 text-center">{data.title}</h2>
            <input
                type="checkbox"
                checked={isSelected}
                className="absolute bottom-2 form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <Link href={`/meals/${data.id}`}>
                <button className="underline text-lg">Pokaż szczegóły</button>
            </Link>
            <button
                className="h-1/10 mt-4 w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
                onClick={handleSelect}
            >
                Dodaj posiłek do swojej diety
            </button>
        </div>
    );
}

export default MealPlannerItem