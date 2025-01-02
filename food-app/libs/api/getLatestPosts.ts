export const getLatestPosts = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/getLatestPost`);
        if (!res.ok) {
            throw new Error("Wystąpił problem z pobraniem ostatnich postów");
        }
        return await res.json();
    } catch (error) {
        console.error("Błąd podczas pobierania ostatnich postów:", error);
        throw error;
    }
};