import { saveMeals } from "@/lib/meals";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const MealPlannerSubmitButton = () => {
    const selectedItems = useSelector((state: RootState) => state.mealPlanner.selectedMeals);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            // Wywołanie funkcji z lib z odpowiednimi parametrami
            await saveMeals({
                userId: '123', // Zaktualizuj ID użytkownika odpowiednio
                meals: selectedItems,
            });

            console.log('Meals saved successfully');
        } catch (err:any) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Saving...' : 'Dodaj posiłki'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )

}

export default MealPlannerSubmitButton