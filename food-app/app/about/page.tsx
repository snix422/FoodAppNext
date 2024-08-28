const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/getAboutUs');
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return { lognContent: 'No content available' };
    }
}

const About = async () => {
    const data = await getData();
    return(
        <>
        <h1>O nas</h1>
        <p>{data?.lognContent}</p>
        </>
    )
}

export default About