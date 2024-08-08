import HeadingOfferTitle from "@/components/Offers/HeadingOfferTitle";
import OfferListPage from "@/components/Offers/OfferListPage";
import OffersList from "@/components/Offers/OffersList"
import { OfferType } from "@/types/types";

const getOffers = async () :Promise<OfferType[]> => {
    try {
        const res = await fetch('http://localhost:3000/api/getOffers');
        if (!res.ok) {
            console.error('Fetch error:', await res.text());
            return [];
        }

        const data: OfferType[] = await res.json();
        console.log('Fetched offers:', data); // Sprawdź, czy `price` jest tutaj

        return data;
    } catch (error) {
        console.error('Error fetching offers:', error);
        return [];
    }
}

const Offer = async () => {
    const offers : OfferType[] = await getOffers();
    console.log(offers);
    return(
        <main className="w-[100vw] flex flex-col items-center gap-8 pt-12 pb-12">
            <HeadingOfferTitle title="Nasza oferta"/>
            <OfferListPage offers={offers}/>
        </main>
    )
}

export default Offer