"use client"

import DietListItem from "./DietListItem";

const DietsListUser = ({diets}:{diets:any}) => {
    console.log(diets,'diety');
    return(
        <div className="h-full w-full flex flex-col items-center gap-12">
            <h1 className="mt-12 text-3xl max-sm:text-base max-sm:font-bold max-lg:text-2xl">Twoje indywidualnie stworzone diety ({diets.userMeals?.length})</h1>
            <div className="flex flex-col mt-12 gap-8">
            {diets.userMeals?.map((d:any, index:number)=>{
                return <DietListItem meal={d} id={index+1} />
            })}
            </div>
        </div>
    )
}

export default DietsListUser