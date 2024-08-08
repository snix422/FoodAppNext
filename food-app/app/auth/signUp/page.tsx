"use client"

import prisma from "@/prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SignUp(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }
        
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
    
        if (res.ok) {
          router.push('/auth/signIn');
        } else {
          const data = await res.json();
          setError(data.error || 'An error occurred');
        }
      };

    return(
        <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-4xl mb-12">Rejestracja</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-12">
                <input className="w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" />
                <input className="w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                <input className="w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="password" name="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Potwierdź hasło" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Zarejestruj się</button>
            </form>
        </main>
    )

}

