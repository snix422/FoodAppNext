import SummaryStatistic from "@/components/Diet/SummaryStatistic"
import { render, screen } from "@testing-library/react"

describe("SummaryStatistic Component", ()=>{
    const kcalMock = 222
    const carbohydratesMock = 333
    const proteinMock = 444
    const fatMock = 555

    it("should render field with kcal", ()=>{
        render(<SummaryStatistic kcal={kcalMock} carbohydrates={carbohydratesMock} protein={proteinMock} fat={fatMock} />)
    
        expect(screen.getByText(kcalMock)).toBeInTheDocument();
    })

    it("should render field with carbohydrates", ()=>{
        render(<SummaryStatistic kcal={kcalMock} carbohydrates={carbohydratesMock} protein={proteinMock} fat={fatMock}/>)
        expect(screen.getByText(carbohydratesMock)).toBeInTheDocument();
    })

    it("should render field with protein", ()=>{
        render(<SummaryStatistic kcal={kcalMock} carbohydrates={carbohydratesMock} protein={proteinMock} fat={fatMock} />)
        expect(screen.getByText(proteinMock)).toBeInTheDocument();
    })

    it("should render field with fat", ()=>{
        render(<SummaryStatistic kcal={kcalMock} carbohydrates={carbohydratesMock} protein={proteinMock} fat={fatMock} />)
        expect(screen.getByText(fatMock)).toBeInTheDocument()
    })
})