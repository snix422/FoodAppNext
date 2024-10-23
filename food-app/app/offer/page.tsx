import HeadingOfferTitle from "@/components/Offers/HeadingOfferTitle";
import OfferListPage from "@/components/Offers/OfferListPage";
import OffersList from "@/components/Offers/OffersList"
import { OfferType } from "@/types/types";

const getOffers = async () :Promise<OfferType[]> => {
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

const Offer = async () => {
    const offers : OfferType[] = await getOffers();
    return(
        <main className="w-[100vw] bg-pink-50 flex flex-col items-center gap-8 p-12">
            <HeadingOfferTitle title="Nasza oferta"/>
            <OfferListPage offers={offers}/>
        </main>
    )
}

export default Offer