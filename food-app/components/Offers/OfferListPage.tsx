"use client"

import OfferItemPage from "./OfferItemPage"

const OfferListPage = ({offers}:{offers:any}) => {
    console.log(offers);
    return(
        <div>
            {offers.map((o:any)=>{
                return(
                    <OfferItemPage data={o}/>
                )
            })}
        </div>
    )
}

export default OfferListPage