"use client"

import prisma from "@/prisma/client";
import { useRouter } from "next/router";
import { useState } from "react"

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState("");

    const router = useRouter();

    const isAdmin = (email:string) => {
        const emailsAdmin = ["admin@gmail.com","wojcik@gmail.com","mariuszwojcik@gmail.com"];
        return emailsAdmin.includes(email);
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const role = isAdmin(email) ? 'admin' : 'user';
            await prisma.user.create({
              data: { email, password, role },
            });
            router.push("/")
            // Przekierowanie lub komunikat sukcesu
          } catch (error) {
            setError('Failed to register. Please try again.');
          }
    }

    return(
        <>
            <h1>Rejestracja</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            </form>
        </>
    )

}

export default SignUp