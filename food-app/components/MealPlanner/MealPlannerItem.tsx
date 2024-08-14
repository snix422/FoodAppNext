"use client"

import { setSelectedMeal } from "@/redux/slices/mealPlannerSlice";
import { RootState } from "@/redux/store";
import Image from "next/image"
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
    return(
        <div className={`w-[20vw] h-[60vh] flex flex-col items-center relative mb-12 ${isSelected ? 'border-red-200 border-2' : ''}`} onClick={handleSelect}>
            <div className="w-full h-[60%] relative rounded">
                <Image
                    className="rounded"
                    src={data?.imageUrl}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="text-lg font-bold">{data.title}</h2>
            <input type="checkbox" className="absolute bottom-0 form-checkbox
            
            
            h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 custom-checkbox"
        />

        <div className="flex">
        <span>Kcal: {data.kcal}</span>
        <span>Węglowodany: {data.carbohydrates}</span>
        <span>Białko: {data.protein}</span>
        <span>Tłuszcze: {data.fat}</span>  
        </div>   
        {isOpen ? <button>Pokaż Mniej</button> : <button>Pokaż więcej</button>}     
        </div>
    )
}

export default MealPlannerItem