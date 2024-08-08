"use client"

import Image from "next/image";
import Link from "next/link";

const OfferItemPage = ({data}:{data:any}) => {
    console.log(data);
    return(
        <div className="w-[100vw] h-[30vh] flex gap-12">
        <div className="w-[40%] h-full relative">
        <Image className="rounded" src={"/offer/salad-2756467_1280.jpg"} layout="fill"
            objectFit="cover" alt="obrazek"/>
        </div>
    <div className="w-[50%] flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p>{data.description}</p>
        <span className="font-bold"> {data.price !== null ? `${data.price} zł` : "No price available"}</span>
        <Link href="/contact"><button className="font-bold">Skontaktuj się z nami</button></Link>
    </div>
</div>
    )
}

export default OfferItemPage