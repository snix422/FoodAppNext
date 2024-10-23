type DefaultPlaceholderProps = {
    lines:number,
    height:number
}


const DietUserPlaceholder:React.FC<DefaultPlaceholderProps> = ({lines,height}) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 pt-24">
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

export default DietUserPlaceholder