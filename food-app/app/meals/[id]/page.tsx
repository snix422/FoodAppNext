import MainInformationMealPage from "@/components/Meals/MainInfomationMealPage";

const getOfferByTitle = async (id:number) => {
    try {
        const res = await fetch(`http://localhost:3000/api/getMeal?id=${id}`);
        if(!res.ok){
            console.log(res);
            return;
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return;
    }
}

interface MealPageProps {
    params:{
        id:number
    }
}

const MealPage : React.FC<MealPageProps> = async ({params}) => {
    const title = params.id;
    const meal = await getOfferByTitle(title);
    return(
        <main className="w-[100vw] h-[100vh]">
            <MainInformationMealPage data={meal} />
        </main>
    )
}

export default MealPage