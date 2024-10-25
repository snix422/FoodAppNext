import Link from "next/link"

const ButtonDetails = ({id}:{id:number}) => {
    return <Link href={`/meals/${id}`}><button>Zobacz więcej</button></Link>
}

export default ButtonDetails