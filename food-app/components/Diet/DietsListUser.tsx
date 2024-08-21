"use client"

import DietListItem from "./DietListItem";

const DietsListUser = ({diets}:{diets:any}) => {
    console.log(diets,'diety');
    return(
        <div>
            <h1>Twoj indywidualnie stworzon diety</h1>
            {diets.userMeals?.map((d:any)=>{
                return <DietListItem meal={d} />
            })}
        </div>
    )
}

export default DietsListUser