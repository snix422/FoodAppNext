const PostItem = ({data}:{data:any}) => {
    return(
        <div>
            <h2>Tytuł: {data.title}</h2>
            <p>Opis: {data.content}</p>
            <span>Data wydania: {data.dataPublikacji}</span>
        </div>
    )
}

export default PostItem