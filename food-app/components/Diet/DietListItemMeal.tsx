import Image from "next/image"
import Link from "next/link"

const DietListItemMeal = ({ title, meal }: { title: string, meal: any }) => {
    return (
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <div className="w-[10vw] h-[50px] relative mt-2 rounded overflow-hidden">
                <Image
                    className="rounded object-cover"
                    src={meal.imageUrl}
                    alt={meal.title}
                    layout="fill"
                />
            </div>
            <h3 className="mt-2 text-base font-medium text-gray-600">{meal.title}</h3>
            <Link href={`/meals/${meal.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                    Pokaż więcej
                </button>
            </Link>
        </div>
    );
};

export default DietListItemMeal