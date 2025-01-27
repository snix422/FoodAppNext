import { render, screen, waitFor } from '@testing-library/react';
import OffersContainer from '@/components/Offers/OffersContainer';
import { getOffers } from '@/libs/api/getOffers';


jest.mock('../libs/api/getOffers', () => ({
    getOffers: jest.fn()
}));

jest.mock('../components/HeadingOfferTitle', () => ({ title }: { title: string }) => (
    <h1 data-testid="heading-title">{title}</h1>
));

jest.mock('../components/OffersList', () => ({ offers }: { offers: any[] }) => (
    <div data-testid="offers-list">
        {offers.map((offer) => (
            <div key={offer.id} data-testid="offer-item">
                {offer.name}
            </div>
        ))}
    </div>
));

describe('OffersContainer Component', () => {
    it('renders offers correctly', async () => {
        const mockOffers = [
            { id: 1, name: 'Offer 1', price: 100 },
            { id: 2, name: 'Offer 2', price: 200 },
        ];
        (getOffers as jest.Mock).mockResolvedValue(mockOffers);
        render(<OffersContainer />);
        expect(screen.getByTestId('heading-title')).toHaveTextContent('Nasza oferta');
        await waitFor(() => {
            const offersList = screen.getByTestId('offers-list');
            expect(offersList).toBeInTheDocument();

            const offerItems = screen.getAllByTestId('offer-item');
            expect(offerItems).toHaveLength(mockOffers.length);

        
            expect(offerItems[0]).toHaveTextContent('Offer 1');
            expect(offerItems[1]).toHaveTextContent('Offer 2');
        });
    });

    it('handles empty offers', async () => {
        (getOffers as jest.Mock).mockResolvedValue([]);
        render(<OffersContainer />);
        await waitFor(() => {
            const offersList = screen.getByTestId('offers-list');
            expect(offersList).toBeInTheDocument();

            const offerItems = screen.queryAllByTestId('offer-item');
            expect(offerItems).toHaveLength(0);
        });
    });
});
 