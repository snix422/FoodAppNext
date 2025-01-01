import OfferItem from "@/components/Offers/OfferItem"
import { render, screen } from "@testing-library/react"

describe("OfferItem component", ()=>{
    const mockOffer = {
        id:1,
        title:"Example offer",
        description:"Example description offer",
        price:500
    }

    it("should render image", ()=>{
        render(<OfferItem data={mockOffer}  />)
        expect(screen.getByAltText(mockOffer.title)).toBeInTheDocument();
    })

    it("should render heading with title", ()=>{
        render(<OfferItem data={mockOffer} />)
        expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
    })

    it("should render heading with price", ()=>{
        render(<OfferItem data={mockOffer} />)
        expect(screen.getByText(/mockOffer.price/i)).toBeInTheDocument();
    })
})