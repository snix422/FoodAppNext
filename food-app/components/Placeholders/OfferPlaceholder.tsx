type DefaultPlaceholderProps = {
    lines:number,
    height:number
}

const OfferPlaceholder:React.FC<DefaultPlaceholderProps> = ({lines,height}) => {
    return (
        <div className="flex flex-col items-center gap-8">
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className="animate-pulse bg-gray-300 rounded-lg mb-2 w-[80vw]"
                    style={{ height: `${height}px` }} 
                />
            ))}
        </div>
    );
}

export default OfferPlaceholder