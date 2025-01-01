import MealItem from "@/components/Meals/MealItem"
import { MealType } from "@prisma/client"
import { render, screen } from "@testing-library/react"

describe("MealItem Component", ()=>{
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

    it("should render image",()=>{
        render(<MealItem data={mockData} />)

        expect(screen.getByAltText(mockData.title)).toBeInTheDocument();
    })

    it("should render heading with title", ()=>{
        render(<MealItem data={mockData} />)
        expect(screen.getByText(mockData.title)).toBeInTheDocument();
    })

    it("should render button",()=>{
        render(<MealItem data={mockData} />)
        expect(screen.getByRole("button",{name:"Zobacz więcej"}))
    })
})