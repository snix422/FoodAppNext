import Image from "next/image"
import Link from "next/link"

const DietListItemMeal = ({title,meal}:{title:string,meal:any}) => {
    return(
        <div className="flex flex-col items-center">
                <h2>{title}</h2>
                    <div className="w-[10vw] h-[50px] relative rounded">
                        <Image
                            className="rounded"
                            src={meal.imageUrl}
                            alt="Local Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3>{meal.title}</h3>
                    <Link href={`/meals/${meal.id}`}><button>Pokaż więcej</button></Link>
            </div>
    )
}

export default DietListItemMeal