import { getOffers } from "@/libs/api/getOffers"; // Zakładam, że masz funkcję getOffers w tym pliku

// Mockowanie globalnej funkcji fetch
global.fetch = jest.fn();

describe('getOffers', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Czyszczenie mocków po każdym teście
    });

    it('zwraca oferty, jeśli API zwraca poprawne dane', async () => {
        const mockOffers = [
            { id: '1', title: 'Offer 1', description: 'Description of Offer 1', price: 100 },
            { id: '2', title: 'Offer 2', description: 'Description of Offer 2', price: 200 },
        ];

        // Mockowanie odpowiedzi fetch
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockOffers),
        });

        const offers = await getOffers();

        expect(offers).toEqual(mockOffers); // Sprawdzamy, czy zwrócone dane to mockowane oferty
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/getOffers'); // Sprawdzamy wywołany URL
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
        // Mockowanie odpowiedzi z błędem (np. 500)
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
        // Mockowanie wyjątku (np. błąd sieci)
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getOffers()).rejects.toThrow('Wystąpił problem z pobraniem ofert Error: Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
