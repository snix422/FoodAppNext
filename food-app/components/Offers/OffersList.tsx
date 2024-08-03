import OfferItem from "./OfferItem"

const OffersList = ({offers}:{offers:any}) => {
    console.log(offers,'hom')
    return(
        <div>
            {offers.map((o:any)=>{
                return(
                    <OfferItem data={o}/>
                )
            })}
        </div>
    )
}

export default OffersList