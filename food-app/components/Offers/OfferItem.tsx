const OfferItem = ({data}:{data:any}) => {
    return(
        <div className="w-1/5 h-[30vh] bg-gray-200">
            <h3 className="text-lg font-bold">{data.title}</h3>
            <span>{data.price} zł</span>
        </div>
    )
}

export default OfferItem