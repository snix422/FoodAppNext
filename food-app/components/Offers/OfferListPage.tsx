"use client"

import { OfferType } from "@/types/types"
import OfferItemPage from "./OfferItemPage"

const OfferListPage = ({offers}:{offers:OfferType[]}) => {
    return(
        <div className="flex flex-col gap-8">
            {offers.map((o:any)=>{
                return(
                    <OfferItemPage data={o}/>
                )
            })}
        </div>
    )
}

export default OfferListPage