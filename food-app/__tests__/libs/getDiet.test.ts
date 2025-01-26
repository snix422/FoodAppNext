import { getDiet } from "@/lib/diet"; // Zakładam, że masz funkcję getDiet w tym pliku

// Mockowanie globalnej funkcji fetch
global.fetch = jest.fn();

describe('getDiet', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Czyszczenie mocków po każdym teście
    });

    it('zwraca dane diety, jeśli odpowiedź API jest poprawna', async () => {
        const mockDiet = { userId: 1, meals: [{ id: 1, name: 'Meal 1' }, { id: 2, name: 'Meal 2' }] };

        // Mockowanie odpowiedzi fetch
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockDiet),
        });

        const diet = await getDiet(1);

        expect(diet).toEqual(mockDiet); // Sprawdzamy, czy zwrócone dane to mockowana dieta
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/api/getYourDiet?userId=1', // Sprawdzamy wywołany URL
            expect.objectContaining({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            })
        );
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
        // Mockowanie odpowiedzi z błędem (np. 500)
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: jest.fn().mockResolvedValueOnce({ message: 'Internal Server Error' }),
        });

        await expect(getDiet(1)).rejects.toThrow('Failed to fetch diet data: Error: Internal Server Error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('rzuca błąd, jeśli fetch rzuci wyjątek', async () => {
        // Mockowanie wyjątku (np. błąd sieci)
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getDiet(1)).rejects.toThrow('Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
