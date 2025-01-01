import MealPlannerItem from "@/components/MealPlanner/MealPlannerItem"
import { MealType } from "@prisma/client"
import { render, screen } from "@testing-library/react"


describe("MealPlannerItem Component", ()=>{
    const mockData = {
        id:1,
        title:"Example title",
        description:"Example desc",
        kcal:222,
        carbohydrates:333,
        protein:444,
        fat:555,
        preparation:"Example preparation",
        ingredients:['example1','example2','example3'],
        type: MealType.BREAKFAST,
        imageUrl:"https://exampleimg.com"

    }
    it("should render image", ()=>{
        render(<MealPlannerItem data={mockData} />)

        expect(screen.getByAltText("Meal Image")).toBeInTheDocument();
    })

    it("should render heading with title", ()=>{
        render(<MealPlannerItem data={mockData} />)

        expect(screen.getByText(mockData.title)).toBeInTheDocument();
    })

    it("should render input checkbox", ()=>{
        render(<MealPlannerItem data={mockData}/>)

        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })

    it("should render buttons", ()=>{
        render(<MealPlannerItem data={mockData}/>)

        expect(screen.getByRole("button",{name:"Pokaż szczegóły"}))
        expect(screen.getByRole("button", {name:/Dodaj posiłek/i}))
    })
})