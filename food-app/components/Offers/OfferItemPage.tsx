"use client"

import Image from "next/image";
import Link from "next/link";

const OfferItemPage = ({ data }: { data: any }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Obrazek */}
        <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
            <Image
                className="rounded-lg"
                src={data.imageUrl || "/offer/salad-2756467_1280.jpg"}
                alt="Obrazek oferty"
                layout="fill"
                objectFit="cover"
            />
        </div>

        {/* Treść */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text-gray-700">{data.description}</p>
            <span className="text-xl font-bold">{data.price !== null ? `${data.price} zł` : "No price available"}</span>
            <Link href="/contact">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    Skontaktuj się z nami
                </button>
            </Link>
        </div>
    </div>
);
};

export default OfferItemPage