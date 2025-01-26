import MainInformationMealPage from "@/components/Meals/MainInfomationMealPage";
import { getMealById } from "@/libs/api/getMealById";

const getOfferByTitle = async (id:number) => {
    try {
        const res = await fetch(`http://localhost:3000/api/getMeal?id=${id}`);
        if(!res.ok){
            throw new Error("Wystąpił problem z pobieraniem posiłków")
        }
        return res.json();
    } catch (error) {
        throw new Error("Wystąpił problem z pobieraniem posiłków")
    }
}

interface MealPageProps {
    params:{
        id:number
    }
}

const MealPage : React.FC<MealPageProps> = async ({params}) => {
    const id = params.id;
    console.log(params);
    const meal = await getMealById(id);
    return(
        <main className="w-[100vw] h-[100vh]">
            <MainInformationMealPage data={meal} />
        </main>
    )
}

export default MealPage