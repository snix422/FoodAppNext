import Image from "next/image"
import Link from "next/link"

const OfferItem = ({ data }: { data: any }) => {
    return (
        <div className="max-md:w-[90vw] max-lg:w-[40vw] w-[25vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 flex flex-col h-[35vh] relative mb-12 bg-white rounded-lg shadow-md">
            <Link href={`/offer/${data.id}`} passHref>
                <div className="relative w-full h-40 cursor-pointer">
                    <Image
                        src={data.imageUrl || '/offer/dumbbell-1966247_1280.jpg'}
                        alt={data.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
            </Link>
            <div className="p-4 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{data.title}</h3>
                <span className="text-xl font-semibold text-gray-600">{data.price} zł</span>
            </div>
        </div>
    );
};
export default OfferItem