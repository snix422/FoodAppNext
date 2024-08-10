"use client";

import { authenticateUser } from "@/lib/auth";
import { LoginForm } from "@/types/types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const {register,handleSubmit, formState:{errors},reset} = useForm<FormData>();

    const validationRegister = {
      email:{
        required: "E-mail jest wymagany",
        minLength:{
          value:5,
          message: "E-mail musi posiadać min. 5 znaków"
        }
      },
      password:{
        required: "Hasło jest wymagane",
        minLength:{
          value:6,
          message: "Hasło musi posiadać min. 6 znaków"
        }
      }
    }

    const onSubmit:SubmitHandler<FormData> = async (data:LoginForm) => {
      console.log(data)
      const result = await authenticateUser(data.email, data.password);
      if (result.error) {
        setError(result.error);
      } else {
        reset();
        router.push('/');
      }      
    }

    /*const loginUser = async (e: React.FormEvent) => {
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
      };*/

    return (
        <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-4xl mb-12">Logowanie</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-12">
                <input
                    type="text"
                    {...register("email", validationRegister.email)}
                    placeholder="Wpisz E-mail..."
                    className="w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email?.message ? <span>{errors.email.message}</span> : null}
                <input
                    type="password"
                    {...register("password",validationRegister.password)}
                    placeholder="Wpisz hasło..."
                    className="w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.password?.message ? <span>{errors.password.message}</span> : null}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Zaloguj się</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </main>
    );
}
