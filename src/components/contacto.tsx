"use client"
import React, { useState } from "react";
import { useForm as hookForm } from "react-hook-form"
import { fetchPostJSON } from "@/utils/api-helpers";
import { v4 as uuidv4 } from "uuid"

export default function ContactoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm()

  
  const Submit = async (dataRegister: any) => {
    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)

    const formData = {
      id: uuidv4(),
      dataEnvio: new Date(),
      email: dataRegister.email,
    }
    console.log(formData)
    const { statusCode } = await fetchPostJSON("api/enviar-formulario", formData)
    if (statusCode === 200) {
      setIsSubmitting(true)
    } else {
      setIsSubmitting(false)
    }
  }

   return (
     <section className="mx-2 lg:mx-0">
       <div
         id="contacto"
         className="max-w-5xl lg:mx-auto mx-2 py-2"
       >
         <main>
           <form onSubmit={handleSubmit(Submit)}>
            <div className="lg:flex items-center">
            <div className="flex flex-col mx-2 my-4">
               <input
                 {...register("email", {
                   required: true,
                   pattern: /^\S+@\S+$/i,
                 })}
                 className="border-2 border-green-200 p-2 rounded w-[300px]"
                 placeholder="Ex.: seunome@email.com"
               />
             </div>
             <div className="flex justify-center my-4">
               <button
                 type="submit"
                 role="link"
                 className={`py-2 px-10 border-2 border-green-200 rounded-md cursor-pointer font-bold text-green-200 ${
                   isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                 }`} // Desativa o botão se estiver enviando
               >
                 ME AVISE
               </button>
             </div>
            </div>
            <div>
              {isSubmitting ? (
                <span className="text-green-400">Você será avisado quando o site for publicado.</span>
              ) : (
                <>
                  {errors.email?.type === "required" && (
                    <span className="text-red-400">Este campo é obrigatório</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-400">Insira um email válido</span>
                  )}
                </>
              )}
            </div>
           </form>
         </main>
       </div>
     </section>
   )
}