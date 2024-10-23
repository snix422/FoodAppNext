"use client";

import { authenticateUser } from "@/lib/auth";
import { LoginForm } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const loadingToast = toast.loading("Logowanie...");
      try {
        const result = await authenticateUser(data.email, data.password);
        setLoading(false)
      if (result.error) {
        toast.error("Logowanie nie powiodło się ");
        setError(result.error);
      } else {
        toast.success("Logowanie powiodło się")
        reset();
        router.push('/');
      }      
      } catch (error) {
        console.error("Błąd podczas logowania:", error);
        setError("Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.");
        toast.error("Wystąpił błąd podczas logowania.")
      }finally{
        toast.dismiss(loadingToast);
      }
    }

  

    return (
        <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-4xl mb-12">Logowanie</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-12">
                <input
                    type="text"
                    {...register("email", validationRegister.email)}
                    placeholder="Wpisz E-mail..."
                    className="w-1/5 max-xl:w-2/5 max-sm:w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email?.message ? <span>{errors.email.message}</span> : null}
                <input
                    type="password"
                    {...register("password",validationRegister.password)}
                    placeholder="Wpisz hasło..."
                    className="w-1/5 max-xl:w-2/5 max-sm:w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.password?.message ? <span>{errors.password.message}</span> : null}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">{!loading ? "Zaloguj się" : "Logowanie"}</button>
                {error === "CredentialsSignin" ? <p className="text-red-700">Nieprawidłowe dane logowania</p> : <p className="text-red-700">{error}</p>}
            </form>
        </main>
    );
}
