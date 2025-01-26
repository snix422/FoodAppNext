export const getMealById = async (id:number) => {
    try {
        const res = await fetch(`http://localhost:3000/api/getMeal?id=${id}`);
        if(!res.ok){
            throw new Error("Wystąpił problem z pobieraniem posiłków")
        }
        return res.json();
    } catch (error) {
        throw new Error("Wystąpił problem z pobieraniem posiłków")
    }
}