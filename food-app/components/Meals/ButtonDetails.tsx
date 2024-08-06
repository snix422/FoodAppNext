import Link from "next/link"

const ButtonDetails = ({title}:{title:string}) => {
    return <Link href={`/meals/${title}`}><button>Zobacz więcej</button></Link>
}

export default ButtonDetails