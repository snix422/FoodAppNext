import { getOffers } from "@/libs/api/getOffers";
import HeadingOfferTitle from "./HeadingOfferTitle";
import OffersList from "./OffersList";



const OffersContainer = async () => {
    const offers = await getOffers();
    return(
        <section className="w-[100vw] bg-purple-300 flex flex-col gap-8 pt-24">
            <HeadingOfferTitle title="Nasza oferta" />
            <OffersList offers={offers}/>
        </section>
    )
}

export default OffersContainer