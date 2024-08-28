"use client"

import { handleLogout } from "@/lib/auth";
import {useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image";
import burgerMenu from "@/public/icons/menu.png"
import { useDispatch } from "react-redux";
import { toogleMenu } from "@/redux/slices/burgerMenuSlice";
import BurgerMenu from "./BurgerMenu";

const Header = () => {

    const { data: session, status } = useSession();
    const dispatch = useDispatch();

    // Zmienna statusowa dla lepszej kontroli
    const isLoading = status === "loading";
    const isAuthenticated = status === "authenticated";
    console.log(session);
    console.log(status);
    const userEmail = session?.user?.email;
    const userRole = session?.user?.role;


    console.log(userEmail);
    console.log(userRole,'role');

    const openMenu = () => {
        dispatch(toogleMenu())
    }
   
    return(
        <>
        
        <header className="flex max-w-[100vw] bg-purple-300 justify-around items-center py-3 relative">
            <span className="text-4xl"><Link href={"/"}>YourFood</Link></span>
            <nav className="w-3/5 h-full">
                <ul className="w-100 h-100 flex justify-around max-lg:hidden">
                    <li><Link className="text-xl" href={"/offer"}>Oferta</Link></li>
                    <li><Link className="text-xl" href={"/meals"}>Przepisy</Link></li>
                    {userRole === "user" ? <>
                        <li><Link className="text-xl" href={"/meal-planner"}>Stwórz dietę dla siebie</Link></li>
                        <li><Link className="text-xl" href={"/add-recipe"}>Dodaj przepis</Link></li>
                        <li><Link className="text-xl" href={"/your-individual-diet"}>Twoje diety</Link></li>
                    </> : null }
                    {userRole === "admin" ? 
                    <li><Link className="text-xl" href={"/create-post"}>Dodaj post</Link></li>    
                    : null}
                    <li><Link className="text-xl" href={"/blog"}>Blog</Link></li>
                    <li><Link className="text-xl" href={"/contact"}>Kontakt</Link></li>
                    <li><Link className="text-xl" href={"/about"}>O nas</Link></li>
                    {!isAuthenticated ? <>
                        <li><Link className="text-xl" href={"/auth/signIn"}>Logowanie</Link></li>
                        <li><Link className="text-xl" href={"/auth/signUp"}>Rejestracja</Link></li>
                    </> : <li><button onClick={handleLogout}>Wyloguj się</button></li>}
                </ul>
                <div className="absolute right-2 top-4 hidden max-lg:block">
                    <Image onClick={openMenu} src={burgerMenu} alt="burger menu" />
                </div>
            </nav>
            <BurgerMenu />
        </header>
        </>
    )
}

export default Header