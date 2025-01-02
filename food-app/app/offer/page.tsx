import HeadingOfferTitle from "@/components/Offers/HeadingOfferTitle";
import OfferListPage from "@/components/Offers/OfferListPage";
import OffersList from "@/components/Offers/OffersList"
import { getOffers } from "@/libs/api/getOffers";
import { OfferType } from "@/types/types";

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