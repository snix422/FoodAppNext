export const getMeals = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/getMeals");
        if (!res.ok) {
            throw new Error(`Nie udało się pobrać posiłków: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Błąd podczas pobierania posiłków:", error);
        throw error;
    }
};