import OfferItem from "./OfferItem"

const OffersList = ({offers}:{offers:any}) => {
    console.log(offers,'hom')
    return(
        <div className="flex justify-center w-[100vw] gap-12">
            {offers.map((o:any)=>{
                return(
                    <OfferItem data={o}/>
                )
            })}
        </div>
    )
}

export default OffersList