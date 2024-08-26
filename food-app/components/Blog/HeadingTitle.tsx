interface HeadingTitleProps {
    title:string,
    className?:string
}

const HeadingTitle :React.FC<HeadingTitleProps> = ({title,className}) => {
    return <h1 className={`text-center mb-12 max-sm:text-lg max-lg:text-2xl text-4xl`}>{title}</h1>
}

export default HeadingTitle