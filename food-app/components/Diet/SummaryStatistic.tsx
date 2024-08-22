const SummaryStatistic = ({kcal,carbohydrates,protein,fat}:{kcal:number,carbohydrates:number,protein:number,fat:number}) => {
    return(
        <div className="w-[80%] flex flex-col items-center justify-center gap-4">
            <h4>Podsumowanie</h4>
            <div className="flex gap-12">
                <div className="flex flex-col items-center">
                    <h5>Kcal</h5>
                    <span>{kcal}</span>
                </div>
                <div className="flex flex-col items-center">
                    <h5>Węglowodany</h5>
                    <span>{carbohydrates}</span>
                </div>
                <div className="flex flex-col items-center">
                    <h5>Białko</h5>
                    <span>{protein}</span>
                </div>
                <div className="flex flex-col items-center">
                    <h5>Tłuszcz</h5>
                    <span>{fat}</span>
                </div>
            </div>
        </div>
    )
}

export default SummaryStatistic