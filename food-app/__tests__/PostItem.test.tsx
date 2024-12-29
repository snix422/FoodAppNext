import PostItem from "@/components/Blog/PostItem"
import { render, screen } from "@testing-library/react"

const mockData = {
    id:1,
    title:"Example data",
    content:"Example content",
    dataPublikacji:new Date(),
    authorId:1,
    imageUrl:"https://example-image.pl"
}

describe("PostItem title Component", ()=>{
    it("render correctly heading",()=>{
        render(<PostItem data={mockData} />)

        const headingElement = screen.getByRole("heading",{name:"Example data"})
        expect(headingElement).toBeInTheDocument();
    })

    it("render correctly image", ()=>{
        render(<PostItem data={mockData}/>)

        const imgElement = screen.getByAltText(mockData.title);

        expect(imgElement).toBeInTheDocument()
    })

    it("render correctly button",()=>{
        render(<PostItem data={mockData} />)

        const btnElement = screen.getAllByText("Zobacz więcej")

        expect(btnElement).toBeInTheDocument();
    })


})