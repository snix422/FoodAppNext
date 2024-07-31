"use client"

import {useSession } from "next-auth/react"
import Link from "next/link"

const Header = () => {

    const { data: session, status } = useSession();

    // Zmienna statusowa dla lepszej kontroli
    const isLoading = status === "loading";
    const isAuthenticated = status === "authenticated";
    console.log(session);
    console.log(status);
    const userEmail = session?.user?.email;
    const userRole = session?.user?.role;

    console.log(userEmail);
    console.log(userRole);
   
    return(
        <>
        
        <header className="flex bg-purple-300 justify-around items-center py-3">
            <span className="text-4xl"><Link href={"/"}>YourFood</Link></span>
            <span>
                {isLoading
                    ? "Ładowanie..."
                    : isAuthenticated
                        ? <span>{userEmail}</span>
                        : "Niezalogowany"}
            </span>
            
            <nav className="w-1/5 h-full">
                <ul className="w-100 h-100 flex justify-around">
                    <li><Link className="text-xl" href={"/offer"}>Oferta</Link></li>
                    <li><Link className="text-xl" href={"/add-recipe"}>Dodaj przepis</Link></li>
                    <li><Link className="text-xl" href={"/blog"}>Blog</Link></li>
                    <li><Link className="text-xl" href={"/contact"}>Kontakt</Link></li>
                    <li><Link className="text-xl" href={"/about"}>O nas</Link></li>
                    <li><Link className="text-xl" href={"/auth/signUp"}>Rejestracja</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header