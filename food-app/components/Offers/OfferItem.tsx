import Image from "next/image"
import Link from "next/link"

const OfferItem = ({data}:{data:any}) => {
    return(
        <div className="w-1/5 h-[30vh] bg-gray-200">
            <Link href="/offer">
            <div className="w-full h-[80%] relative">
                <Image src={"/offer/dumbbell-1966247_1280.jpg"} alt="obrazek" layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-bold">{data.title}</h3>
            <span>{data.price} zł</span>
            </Link>
        </div>
    )
}

export default OfferItem