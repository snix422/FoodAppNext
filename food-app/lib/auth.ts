import { signIn, signOut } from "next-auth/react";

export interface SignInResult {
    error?: string;
  }
  
  export const authenticateUser = async (email: string, password: string): Promise<SignInResult> => {
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return { error: "Nieprawidłowy adres email" };
    }
  
    if (!password || password.length < 6) {
      return { error: "Hasło musi mieć co najmniej 6 znaków" };
    }
  
    try {
      
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
  
      if (result?.error) {
        return { error: result.error };
      } else {
        return {};
      }
    } catch (error) {
      return { error: "Wystąpił błąd podczas logowania" };
    }
  };

  export const registerUser = async (email: string, password: string) => {
    try {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            return { success: true };
        } else {
            const resData = await res.json();
            return { error: resData.error || 'Wystąpił błąd podczas rejestracji' };
        }
    } catch (err) {
        return { error: 'Wystąpił błąd podczas rejestracji' };
    }
};

export const handleLogout = async () => {
  await signOut({ 
    redirect: true,
    callbackUrl: '/' 
  })}