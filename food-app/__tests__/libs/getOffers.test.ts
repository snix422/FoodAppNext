import { getOffers } from "@/libs/api/getOffers"; 


global.fetch = jest.fn();

describe('getOffers', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    it('zwraca oferty, jeśli API zwraca poprawne dane', async () => {
        const mockOffers = [
            { id: '1', title: 'Offer 1', description: 'Description of Offer 1', price: 100 },
            { id: '2', title: 'Offer 2', description: 'Description of Offer 2', price: 200 },
        ];

        
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockOffers),
        });

        const offers = await getOffers();

        expect(offers).toEqual(mockOffers);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/getOffers'); 
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
       
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(getOffers()).rejects.toThrow(
            "Wystąpił problem z pobraniem ofert 500"
        );
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('rzuca błąd, jeśli fetch rzuci wyjątek', async () => {
       
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getOffers()).rejects.toThrow('Wystąpił problem z pobraniem ofert Error: Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
