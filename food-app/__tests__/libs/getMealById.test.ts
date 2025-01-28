import { getMealById } from "@/libs/api/getMealById"; 

global.fetch = jest.fn();

describe('getMealById', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    it('zwraca posiłek, jeśli API zwraca poprawne dane', async () => {
        const mockMeal = { id: 1, name: 'Meal 1', description: 'Delicious meal', price: 20 };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockMeal),
        });

        const meal = await getMealById(1);

        expect(meal).toEqual(mockMeal); 
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/getMeal?id=1'); 
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
    
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
      
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getMealById(1)).rejects.toThrow('Wystąpił problem z pobieraniem posiłków');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
