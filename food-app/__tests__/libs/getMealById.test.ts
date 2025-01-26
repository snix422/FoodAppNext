import { getMealById } from "@/libs/api/getMealById"; // Zakładam, że masz funkcję getMealById w tym pliku

// Mockowanie globalnej funkcji fetch
global.fetch = jest.fn();

describe('getMealById', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Czyszczenie mocków po każdym teście
    });

    it('zwraca posiłek, jeśli API zwraca poprawne dane', async () => {
        const mockMeal = { id: 1, name: 'Meal 1', description: 'Delicious meal', price: 20 };

        // Mockowanie odpowiedzi fetch
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockMeal),
        });

        const meal = await getMealById(1);

        expect(meal).toEqual(mockMeal); // Sprawdzamy, czy zwrócone dane to mockowany posiłek
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/getMeal?id=1'); // Sprawdzamy wywołany URL
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
        // Mockowanie odpowiedzi z błędem (np. 500)
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(getMealById(1)).rejects.toThrow(
            "Wystąpił problem z pobieraniem posiłków"
        );
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('rzuca błąd, jeśli fetch rzuci wyjątek', async () => {
        // Mockowanie wyjątku (np. błąd sieci)
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getMealById(1)).rejects.toThrow('Wystąpił problem z pobieraniem posiłków');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
