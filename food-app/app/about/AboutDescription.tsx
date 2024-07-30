"use client"

const AboutDescription = ({ content }:{content:any}) => {
    return (
        <>
        
        <p className="w-4/5 text-2xl">{content?.lognContent}</p>
        </>
    );
};

export default AboutDescription;