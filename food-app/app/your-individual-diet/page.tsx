"use client"

import DietsListUser from "@/components/Diet/DietsListUser";
import { getDiet } from "@/lib/diet";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const yourIndividualDiet =  () => {
    const { data: session, status } = useSession();
    const [diets,setDiets] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDiets = async () => {
          try {
            const result = await getDiet(Number(session?.user.id));
            setDiets(result);
          } catch (error) {
            console.error('Error fetching diets:', error);
            setError('Failed to load diets');
          }
        };
    
        fetchDiets(); // Wywołanie funkcji asynchronicznej
      }, [session?.user.id])
   
    //const diets = await getDiet();
    console.log(diets);
    console.log(session?.user.id)
    
    return(
        <main>
            <DietsListUser diets={diets}/>
        </main>
    )
}

export default yourIndividualDiet