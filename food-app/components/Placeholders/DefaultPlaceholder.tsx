type DefaultPlaceholderProps = {
    lines:number,
    height:number
}

const DefaultPlaceholder:React.FC<DefaultPlaceholderProps> = ({lines,height}) => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className="animate-pulse bg-gray-300 rounded-lg mb-2 w-[20vw] max-xl:w-[45vw] max-sm:w-[90vw]"
                    style={{ height: `${height}px` }}
                />
            ))}
        </div>
    );
}

export default DefaultPlaceholder