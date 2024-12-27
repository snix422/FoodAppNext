import { render, screen } from "@testing-library/react"
import HeadingTitle from "@/components/Blog/HeadingTitle";


describe("Heading Title Component" , ()=> {
    it("render title correctly", ()=>{
        const title = "Text test title"

        render(<HeadingTitle title={title} />)
        expect(screen.getByText(title)).toBeInTheDocument()
    })

    it("applies additional className if provided", ()=>{
        const title = "Text test title"
        const className = 'custom-class'

        render(<HeadingTitle title={title} className={className} />)
        
        const headingElement = screen.getByRole("heading", {name:title})

        expect(headingElement).toHaveClass(className)
    })
})