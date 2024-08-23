import OfferItem from "./OfferItem"

const OffersList = ({ offers }: { offers: any[] }) => {
    return (
        <div className="flex flex-col gap-12 p-4 sm:flex-row sm:flex-wrap sm:gap-12 sm:justify-center">
            {offers.map((o: any) => (
                
                    <OfferItem data={o} />
                
            ))}
        </div>
    );
};

export default OffersList