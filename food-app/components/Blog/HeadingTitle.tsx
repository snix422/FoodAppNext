interface HeadingTitleProps {
    title:string,
    className?:string
}

const HeadingTitle :React.FC<HeadingTitleProps> = ({title,className}) => {
    return <h1 className={`text-center mb-12 ${className}`}>{title}</h1>
}

export default HeadingTitle