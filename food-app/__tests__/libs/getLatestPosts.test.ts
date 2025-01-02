import { getLatestPosts } from "@/libs/api/getLatestPosts";


global.fetch = jest.fn(); // Mockowanie globalnej funkcji fetch

describe('getLatestPosts', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Czyszczenie mocków po każdym teście
    });

    it('zwraca posty, jeśli API zwraca poprawne dane', async () => {
        const mockPosts = [
            { id: '1', title: 'Post 1', content: 'Content 1', createdAt: '2025-01-01' },
            { id: '2', title: 'Post 2', content: 'Content 2', createdAt: '2025-01-02' },
        ];

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockPosts),
        });

        const posts = await getLatestPosts();

        expect(posts).toEqual(mockPosts);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${process.env.BASE_URL}/api/getLatestPost`);
    });

    it('rzuca błąd, jeśli odpowiedź API jest niepoprawna', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(getLatestPosts()).rejects.toThrow(
            "Wystąpił problem z pobraniem ostatnich postów"
        );
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('rzuca błąd, jeśli fetch rzuci wyjątek', async () => {
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        await expect(getLatestPosts()).rejects.toThrow('Network error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});