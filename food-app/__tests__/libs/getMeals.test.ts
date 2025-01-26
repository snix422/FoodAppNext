import { getMeals } from "@/libs/api/getMeals"; // Zakładam, że masz funkcję getMeals w tym pliku
import { NextApiRequest, NextApiResponse } from "next";

// Mockowanie globalnej funkcji fetch
global.fetch = jest.fn();

describe('getMeals', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Czyszczenie mocków po każdym teście
    });

    it('zwraca posiłki, jeśli API zwraca poprawne dane', async () => {
        const mockMeals = [
            { id: '1', name: 'Meal 1', description: 'Delicious meal 1', price: 10.5 },
            { id: '2', name: 'Meal 2', description: 'Tasty meal 2', price: 15.0 },
        ];

        // Mockowanie odpowiedzi fetch
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockMeals),
        });

        const meals = await getMeals();

        expect(meals).toEqual(mockMeals); // Sprawdzamy, czy zwrócone dane to mockowane posiłki
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${process.env.BASE_URL}/api/getMeals`); // Sprawdzamy wywołany URL
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
        // Mockowanie odpowiedzi z błędem (np. 500)
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(getMeals()).rejects.toThrow(
            "Wystąpił problem z pobraniem posiłków"
        );
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('rzuca błąd, jeśli fetch rzuci wyjątek', async () => {
        // Mockowanie wyjątku (np. błąd sieci)
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getMeals()).rejects.toThrow('Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('zwraca pustą tablicę, jeśli API zwraca brak posiłków', async () => {
        // Mockowanie odpowiedzi z pustą tablicą
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce([]), // Pusta tablica
        });

        const meals = await getMeals();

        expect(meals).toEqual([]); // Sprawdzamy, czy zwrócone dane to pusta tablica
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
