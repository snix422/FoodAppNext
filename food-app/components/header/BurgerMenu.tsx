import { handleLogout } from "@/lib/auth";
import { RootState } from "@/redux/store"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux"
import closeIcon from "@/public/icons/cross.png"
import { toogleMenu } from "@/redux/slices/burgerMenuSlice";
import Image from "next/image";

const BurgerMenu = () => {
    const isOpen = useSelector((state:RootState)=> state.burgerMenu.isOpen);
    const { data: session, status } = useSession();
    const dispatch = useDispatch();

    const isLoading = status === "loading";
    const isAuthenticated = status === "authenticated";
    const userEmail = session?.user?.email;
    const userRole = session?.user?.role;

    const closeMenu = () => {
        dispatch(toogleMenu());
    }
    return(
        <aside className={`fixed z-10 top-0 right-0 h-full bg-gray-800 text-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-[30vw] max-sm:w-[100vw] pt-12`}>
                <nav className="w-full h-full">
                <ul className="w-100 h-100 flex flex-col items-center gap-4">
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
                <div className="absolute right-2 top-4">
                    <Image onClick={closeMenu} src={closeIcon} className="bg-white" alt="burger menu" />
                </div>
            </nav>
        </aside>
    )
}

export default BurgerMenu