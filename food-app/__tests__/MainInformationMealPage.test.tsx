import MainInformationMealPage from "@/components/Meals/MainInfomationMealPage"
import { render, screen } from "@testing-library/react"

describe("MainInformationMealPage",()=>{
    const mockData = {
        id:1,
        title:"Example data",
        description:"Example desc",
        kcal:2321,
        carbohydrates:213123,
        protein:23521,
        fat:532
    }

    it("should render image",()=>{
        render(<MainInformationMealPage data={mockData}/>)
        expect(screen.getByAltText(mockData.title)).toBeInTheDocument();
    })

    it("should render heading with title", ()=>{
        render(<MainInformationMealPage data={mockData} />)
        expect(screen.getByText(mockData.title)).toBeInTheDocument()
    })

    it("should render heading with desc", ()=>{
        render(<MainInformationMealPage data={mockData} />)
        expect(screen.getByText(mockData.description)).toBeInTheDocument();
    })

    it("should render heading with nutritional values", ()=>{
        render(<MainInformationMealPage data={mockData}/>)

        expect(screen.getByText(mockData.kcal)).toBeInTheDocument()
        expect(screen.getByText(mockData.carbohydrates)).toBeInTheDocument()
        expect(screen.getByText(mockData.protein)).toBeInTheDocument()
        expect(screen.getByText(mockData.fat)).toBeInTheDocument();
    })
})