"use client"

const OfferItemPage = ({data}:{data:any}) => {
    console.log(data);
    return(
        <div>
            <div></div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <span> {data.price !== null ? data.price : "No price available"}</span>
        </div>
    )
}

export default OfferItemPage