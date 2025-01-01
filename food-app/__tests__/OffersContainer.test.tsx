import { render, screen, waitFor } from '@testing-library/react';
import OffersContainer from '@/components/Offers/OffersContainer';

// Mockowanie funkcji `getOffers`
jest.mock('../services/api', () => ({
    getOffers: jest.fn()
}));

// Mockowanie komponentów zależnych
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
        // Przykładowe dane do mockowania
        const mockOffers = [
            { id: 1, name: 'Offer 1', price: 100 },
            { id: 2, name: 'Offer 2', price: 200 },
        ];

        // Ustawienie zwracanej wartości funkcji `getOffers`
        (getOffers as jest.Mock).mockResolvedValue(mockOffers);

        // Renderowanie komponentu
        render(<OffersContainer />);

        // Sprawdzanie, czy tytuł jest wyrenderowany
        expect(screen.getByTestId('heading-title')).toHaveTextContent('Nasza oferta');

        // Oczekiwanie na wyrenderowanie ofert
        await waitFor(() => {
            const offersList = screen.getByTestId('offers-list');
            expect(offersList).toBeInTheDocument();

            const offerItems = screen.getAllByTestId('offer-item');
            expect(offerItems).toHaveLength(mockOffers.length);

            // Sprawdzanie zawartości ofert
            expect(offerItems[0]).toHaveTextContent('Offer 1');
            expect(offerItems[1]).toHaveTextContent('Offer 2');
        });
    });

    it('handles empty offers', async () => {
        // Mockowanie pustej odpowiedzi
        (getOffers as jest.Mock).mockResolvedValue([]);

        render(<OffersContainer />);

        // Oczekiwanie na wyrenderowanie pustej listy
        await waitFor(() => {
            const offersList = screen.getByTestId('offers-list');
            expect(offersList).toBeInTheDocument();

            const offerItems = screen.queryAllByTestId('offer-item');
            expect(offerItems).toHaveLength(0);
        });
    });
});
 