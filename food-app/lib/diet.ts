export const getDiet = async (userId:number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/getYourDiet?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Brak potrzeby dodawania ciasteczek ręcznie, jeśli są prawidłowo ustawione w aplikacji
          },
          credentials: 'include' // Upewnij się, że ciasteczka są wysyłane z żądaniem
        });
    
        if (!response.ok) {
          console.log(response)
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Failed to fetch diet data:', error);
        throw error;
      }
}