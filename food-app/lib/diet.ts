export const getDiet = async (userId:number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/getYourDiet?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include' 
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