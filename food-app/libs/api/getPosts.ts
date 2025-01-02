export const getPosts = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
        if (!res.ok) {
            throw new Error(`Nie udało się pobrać postów: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Błąd podczas pobierania postów:", error);
        throw error;
    }
};