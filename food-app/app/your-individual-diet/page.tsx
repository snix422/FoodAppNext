"use client"

import DietsListUser from "@/components/Diet/DietsListUser";
import DietUserPlaceholder from "@/components/Placeholders/DietUserPlaceholder";
import { getDiet } from "@/lib/diet";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const yourIndividualDiet =  () => {
    const { data: session, status } = useSession();
    const [diets,setDiets] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
      if(!session?.user.id)return;
      setLoading(true)
      setError(null)
        const fetchDiets = async () => {
          try {
            const result = await getDiet(Number(session?.user.id));
            setDiets(result);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching diets:', error);
            setError('Wystąpił problem z pobraniem twoich diet');
            setLoading(false);
          }
          finally{
            setLoading(false);
          }
        };
    
        fetchDiets(); // Wywołanie funkcji asynchronicznej
      }, [session?.user.id])
   
    //const diets = await getDiet();
    console.log(diets);
    console.log(session?.user.id)

    if(error){
      <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-red-500">Wystąpił błąd!</h1>
      <p className="text-lg mt-4">{error}</p>
    </main>
    }
    
    return(
        <main className="w-[100vw] min-h-[100vh] bg-red-100 py-12">
          {loading ? <DietUserPlaceholder lines={1} height={500}/> : <DietsListUser diets={diets}/>}
        </main>
    )
}

export default yourIndividualDiet