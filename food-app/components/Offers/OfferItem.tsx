const OfferItem = ({data}:{data:any}) => {
    return(
        <div>
            <h2>{data.title}</h2>
            <span>{data.price}</span>
        </div>
    )
}

export default OfferItem