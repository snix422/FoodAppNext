/*export const getOffers = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getOffers`);
    if(!res.ok){
        throw new Error("Wystąpił błąd z pobraniem ofert")
    }
    return res.json();
}*/

import { OfferType } from "@/types/types";


export const getOffers = async () :Promise<OfferType[]> => {
    try {
        const res = await fetch('http://localhost:3000/api/getOffers');
        if (!res.ok) {
            throw new Error(`Wystąpił problem z pobraniem ofert ${res.status}`)
        }

        const data: OfferType[] = await res.json();
        return data;
    } catch (error) {
        throw new Error(`Wystąpił problem z pobraniem ofert ${error}`)
    }
}