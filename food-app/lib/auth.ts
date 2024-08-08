import { signIn } from "next-auth/react";

export interface SignInResult {
    error?: string;
  }
  
  export const authenticateUser = async (email: string, password: string): Promise<SignInResult> => {
    // Prosta walidacja adresu email i hasła
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return { error: "Nieprawidłowy adres email" };
    }
  
    if (!password || password.length < 6) {
      return { error: "Hasło musi mieć co najmniej 6 znaków" };
    }
  
    try {
      // Próba zalogowania przy użyciu next-auth
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