import Link from "next/link"

const ButtonSeeMore = ({title,id}:{title:string,id:number}) => {
    return <Link href={`/blog/${id}`}><button>{title}</button></Link>
}

export default ButtonSeeMore