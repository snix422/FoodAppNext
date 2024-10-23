"use client"

import { registerUser } from "@/lib/auth";
import { RegisterForm } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignUp(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {register,handleSubmit, formState:{errors},reset} = useForm<RegisterForm>();

    const validationRegister = {
      email:{
        required: "E-mail jest wymagany",
        minLength:{
          value: 6,
          message: "E-mail musi posiadać min. 6 znaków"
        }
      },
      password:{
        required: "Hasło jest wymagane",
        minLength:{
          value:6,
          message: "Hasło musi posiadać min. 6 znaków"
        }
      },
      confirmPassword:{
        required: "Pole potwierdź hasło jest wymagane",
        minLength:{
          value:6,
          message: "Pole potwierdź hasło musi posiadać min. 6 znaków"
        }
      }
    }

    const onSubmit : SubmitHandler<RegisterForm> = async (data:RegisterForm) => {
      console.log(data);
      if (data.password !== data.confirmPassword) {
        setError("Hasła nie są takie same");
        return;
    }
    setLoading(true);

    const loadingToast = toast.loading("Trwa rejestracja...");

    try{
      const result = await registerUser(data.email, data.password);
   
    setLoading(false);
    if (result.error) {
        toast.error("Rejestracja nie powiodła się ");
        setError(result.error);
    } else {
        toast.success("Rejestracja zakończona sukcesem");
        reset();
        router.push('/auth/signIn');
    }
    }catch(error){
      console.error("Błąd podczas rejestracji:", error);
      setError("Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.");
      toast.error("Wystąpił błąd podczas rejestracji.");
    }finally{
      toast.dismiss(loadingToast)
    }
    }

    return(
        <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-4xl mb-12">Rejestracja</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-12">
                <input {...register("email",validationRegister.email)} className="w-1/5 max-xl:w-2/5 max-sm:w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" />
                {errors.email?.message ? <span>{errors.email.message}</span>:null}
                <input {...register("password",validationRegister.password)} className="w-1/5 max-xl:w-2/5 max-sm:w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                {errors.password?.message ? <span>{errors.password.message}</span> : null}
                <input {...register("confirmPassword",validationRegister.confirmPassword)} className="w-1/5 max-xl:w-2/5 max-sm:w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="password" name="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Potwierdź hasło" />
                {errors.confirmPassword?.message ? <span>{errors.confirmPassword.message}</span>:null}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">{!loading ? "Zarejestruj się" : "Rejestrowanie ..."}</button>
                {error ===  "User already exists" ? <p className="text-red-600">Ten e-mail jest już używany</p> : <p className="text-red-600">{error}</p>}
            </form>
        </main>
    )

}

