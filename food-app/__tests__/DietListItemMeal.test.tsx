import DietListItemMeal from "@/components/Diet/DietListItemMeal"
import { render, screen } from "@testing-library/react"


describe("DietListItemMeal Component", ()=>{
    const mealExample = {
        id:1,
        title:"Meal example"
    }
    const titleExample = "Example title";
    it("should render image",()=>{
    
        render(<DietListItemMeal title={titleExample} meal={mealExample} />)

        expect(screen.getByAltText(mealExample.title)).toBeInTheDocument();
    })

    it("should render heading with correctly title",()=>{
        render(<DietListItemMeal title={titleExample} meal={mealExample} />)

        expect(screen.getByText(mealExample.title)).toBeInTheDocument();
    })

    it("should render button", ()=> {
        render(<DietListItemMeal title={titleExample} meal={mealExample} />)

        expect(screen.getByRole("button", {name:"Pokaż więcej"}))
    })
})