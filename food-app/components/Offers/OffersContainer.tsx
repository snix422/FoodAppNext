import HeadingOfferTitle from "./HeadingOfferTitle";
import OffersList from "./OffersList";

const getOffers = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getOffers`);
    if(!res.ok){
        console.log(res);
    }
    return res.json();
}

const OffersContainer = async () => {
    const offers = await getOffers();
    console.log(offers,'home')
    return(
        <section className="w-[100vw] bg-purple-300 flex flex-col gap-8 pt-24">
            <HeadingOfferTitle title="Nasza oferta" />
            <OffersList offers={offers}/>
        </section>
    )
}

export default OffersContainer