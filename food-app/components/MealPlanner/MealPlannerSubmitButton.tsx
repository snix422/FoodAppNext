"use client"

import { saveMeals } from "@/lib/meals";
import { clearSelectedMeals } from "@/redux/slices/mealPlannerSlice";
import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const MealPlannerSubmitButton = () => {
    const selectedItems = useSelector((state: RootState) => state.mealPlanner.selectedMeals);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    

    const userId = session?.user.id;
   
   

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        const loadingToast = toast.loading("Dodawanie diety...")
        if(selectedItems.length !== 4){
            setError("Musisz wybrać posiłek dla każdego typu posiłku");
            setLoading(false);
            toast.error("Wystąpił błąd. Musisz wybrać każdy posiłek")
            return;
        }

        try {
            // Wywołanie funkcji z lib z odpowiednimi parametrami
            await saveMeals({
                userId: String(userId), // Zaktualizuj ID użytkownika odpowiednio
                meals: selectedItems,
            });
            dispatch(clearSelectedMeals())
            toast.success("Pomyślnie dodano diete")
            router.push("/")
            console.log('Meals saved successfully');
        } catch (err:any) {
            setError(err.message);
            toast.error("Nie udało się dodać diety")
            console.error('Error:', err);
        } finally {
            setLoading(false);
            toast.dismiss(loadingToast);
        }
    };

    return (
        <div>
            <button onClick={handleSubmit} disabled={loading} className={`w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ${
        loading ? 'cursor-not-allowed opacity-50' : ''
    }`}>
                {loading ? 'Dodawanie...' : 'Dodaj posiłki'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )

}

export default MealPlannerSubmitButton