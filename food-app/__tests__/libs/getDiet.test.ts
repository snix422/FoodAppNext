import { getDiet } from "@/lib/diet"; 


global.fetch = jest.fn();

describe('getDiet', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    it('zwraca dane diety, jeśli odpowiedź API jest poprawna', async () => {
        const mockDiet = { userId: 1, meals: [{ id: 1, name: 'Meal 1' }, { id: 2, name: 'Meal 2' }] };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockDiet),
        });

        const diet = await getDiet(1);

        expect(diet).toEqual(mockDiet); 
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/api/getYourDiet?userId=1', 
            expect.objectContaining({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            })
        );
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: jest.fn().mockResolvedValueOnce({ message: 'Internal Server Error' }),
        });

        await expect(getDiet(1)).rejects.toThrow('Failed to fetch diet data: Error: Internal Server Error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('rzuca błąd, jeśli fetch rzuci wyjątek', async () => {
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getDiet(1)).rejects.toThrow('Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
