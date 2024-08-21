import Image from "next/image"

const DietListItem = ({meal}:{meal:any}) => {
    console.log(meal.Meal_sniadanie.imageUrl)
    return (
        <div className="w-[80vw] h-[10vh]">
            <div className="flex flex-col items-center">
                <h2>Śniadanie:</h2>
                    <div className="w-[10vw] h-[50px] relative rounded">
                        <Image
                            className="rounded"
                            src={meal.Meal_sniadanie.imageUrl}
                            alt="Local Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3>{meal.Meal_sniadanie.title}</h3>
                
            </div>
            <div className="flex flex-col items-center">
                <h2>2 Śniadanie:</h2>
                    <div className="w-[10vw] h-[50px] relative rounded">
                        <Image
                            className="rounded"
                            src={meal.Meal_drugieSniadanie.imageUrl}
                            alt="Local Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3>{meal.Meal_drugieSniadanie.title}</h3>
                
            </div>
        </div>
    );

}

export default DietListItem