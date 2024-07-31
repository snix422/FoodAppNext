"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
    
        if (result?.error) {
          setError(result.error);
        } else {
          router.push('/');
        }
      };

    return (
        <>
            <h1>Logowanie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Wpisz E-mail..."
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Wpisz hasło..."
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Zaloguj się</button>
            </form>
        </>
    );
}
