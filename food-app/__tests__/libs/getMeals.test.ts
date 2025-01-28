import { getMeals } from "@/libs/api/getMeals"; 
import { NextApiRequest, NextApiResponse } from "next";

global.fetch = jest.fn();

describe('getMeals', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    it('zwraca posiłki, jeśli API zwraca poprawne dane', async () => {
        const mockMeals = [
            { id: '1', name: 'Meal 1', description: 'Delicious meal 1', price: 10.5 },
            { id: '2', name: 'Meal 2', description: 'Tasty meal 2', price: 15.0 },
        ];

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockMeals),
        });

        const meals = await getMeals();

        expect(meals).toEqual(mockMeals); 
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${process.env.BASE_URL}/api/getMeals`); 
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
       
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
       
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getMeals()).rejects.toThrow('Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('zwraca pustą tablicę, jeśli API zwraca brak posiłków', async () => {
        
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce([]), 
        });

        const meals = await getMeals();

        expect(meals).toEqual([]); 
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
