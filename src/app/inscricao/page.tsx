"use client";
import { fetchPostJSON } from "@/utils/api-helpers";
import { Center, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineEmail, MdOutlineSmartphone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import { useForm as hookForm } from "react-hook-form";
import Calendar from "@/components/calendar";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm();

  const Submit = async (dataRegister: any) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    const formData = {
      id: uuidv4(),
      dataEnvio: new Date(),
      nomeCompleto: dataRegister.nomeCompleto,
      email: dataRegister.email,
      telemovel: dataRegister.telemovel,
      nif: dataRegister.nif,
    };
    console.log(formData);
    const { statusCode } = await fetchPostJSON(
      "api/enviar-formulario",
      formData,
    );
    if (statusCode === 200) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#688AB6]">
      <form onSubmit={handleSubmit(Submit)}>
        <section className="max-w-5xl mx-2 tablet:m-auto">
          <div className="flex flex-col items-center gap-3 ">
            <div className="bg-white w-full max-w-[640px] min-h-[420px] mt-8 rounded-xl border-t-8 border-[1px] border-gray-400 px-8 py-4">
              <Center className="pb-4">
                <h1 className="font-extrabold text-2xl text-center">
                  Ficha de Inscrição
                </h1>
              </Center>
              <Center>
                <h3 className="font-bold">
                  Prencha com seus dados para confirmar a inscrição:
                </h3>
              </Center>
              <div className="flex flex-col my-4">
                <p className="pb-2 text-xs font-semibold">
                  Indica o seu nome completo.
                </p>
                <input
                  {...register("nomeCompleto", {
                    required: true,
                    pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/,
                  })}
                  className="border-2 border-[#c47b4e] p-2 rounded"
                  placeholder="Sua resposta, ex: Miguel Pereira Albuquerque"
                />
                {errors.nomeCompleto?.type === "required" && (
                  <span className="text-red-400">Este campo é obrigatório</span>
                )}
                {errors.nomeCompleto?.type === "pattern" && (
                  <span className="text-red-400">
                    Introduza um nome válido - verifique espaços em branco após
                    introduza nome e apelido. Ex: Miguel Pereira - ✅,
                    MiguelPereira - ❌, &quot;Miguel Pereira &quot; - ❌.
                  </span>
                )}

                {errors.nomeCompleto?.type === "minLength" && (
                  <span className="text-red-400">
                    Introduza um nome válido - verifique espaços em branco após
                    introduzir nome e apelido. Ex: Miguel Pereira - ✅,
                    MiguelPereira - ❌, &quot;Miguel Pereira &quot; - ❌.
                  </span>
                )}

                {errors.nomeCompleto?.type === "maxLength" && (
                  <span className="text-red-400">
                    O nome deve ter no máximo 100 caracteres
                  </span>
                )}
              </div>
              <div className="flex flex-col my-4">
                <p className="pb-2 text-xs font-semibold">
                  Indica o seu e-mail.
                </p>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="border-2 border-[#c47b4e] p-2 rounded"
                  placeholder="Sua resposta, ex: miguelpereira@mail.pt."
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-400">Este campo é obrigatório</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-400">
                    Introduza um email válido - verifique espaços em branco após
                    introduzir o email. Ex: miguelpereira@mail.pt - ✅,
                    &quot;miguelpereira@mail.pt &quot; - ❌.
                  </span>
                )}
              </div>
              <div className="flex flex-col my-4">
                <p className="pb-2 text-xs font-semibold">
                  Indica o seu contacto - telemóvel.
                </p>
                <input
                  {...register("telemovel", {
                    required: true,
                  })}
                  className="border-2 border-[#c47b4e] p-2 rounded"
                  placeholder="Sua resposta, ex: +351 999 999 999"
                />
                {errors.telemovel?.type === "required" && (
                  <span className="text-red-400">Este campo é obrigatório</span>
                )}
              </div>
            </div>
            <div className="bg-white w-full max-w-[640px] rounded-2xl px-8 py-4 border-[1px] border-gray-400">
              <p className="text-[0.9rem]">
                A sua inscrição fica confirmada após realização de pagamento por
                transferência bancária (IBAN PT50 001802330020004509134 ) ou
                Mbway (916 445 826) e envio do comprovativo para
                filomenaleitao@gmail.com.
              </p>
              <p className="text-[0.9rem] pt-2">
                Devoluções parciais ou totais do valor pago serão realizadas
                mediante a sua solicitação em até 72h antes da realização do
                webinário.
              </p>
              <p className="text-[0.9rem] pt-2">
                Após este período só serão realizadas devoluções em caso da não
                realização do webinário. Pondera conscientemente a tua vontade
                para investir em si e estar presente. Conto com o teu
                compromisso.
              </p>
              <div className="flex flex-col my-4">
                <p className="pb-2 text-xs font-semibold">
                  Se desejas receber recibo, deixa abaixo o teu número de
                  contribuinte.
                </p>
                <input
                  {...register("nif", {
                    required: false,
                    pattern: /^\d{9}$/,
                  })}
                  className="border-2 border-[#c47b4e] p-2 rounded"
                  placeholder="Sua resposta - campo opcional"
                />
                {errors.nif?.type === "pattern" && (
                  <span className="text-red-400">Insira um NIF válido</span>
                )}
              </div>
            </div>
            <div className="bg-white w-full max-w-[640px] mb-8 rounded-2xl px-4 py-4 border-[1px] border-gray-400">
              <div className="flex flex-col tablet:flex-row justify-center bg-[rgba(244,244,244,0.60)] rounded-md">
                <div className="flex justify-center">
                  <div className="w-[200px] h-[260px] rounded-t-full flex justify-center">
                    <div className=" rounded-full mt-3 flex justify-center items-center">
                      <div className="flex flex-col justify-center rounded-full w-[180px] h-[180px] mb-300px">
                        <Image
                          src="/avatar_filomena.png"
                          alt="avatar"
                          width={500}
                          height={500}
                        />
                        <p className="text-[14px] font-bold text-center">
                          OPP 11040
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-[350px] h-[300px] flex justify-center items-end">
                    <div className="ml-4">
                      <h2 className="text-lg font-bold">Filomena Leitão</h2>
                      <p className="text-xs">
                        Licenciada em Psicologia Clínica e Mestre em Psicologia
                        Clínica - Uminho, Pós-graduação em Psicopatologia da
                        Criança e do Adolescente. Pós-graduação em Neuroeducação
                        nas Dificuldades de Aprendizagem. Com várias formações
                        em Educação e saúde mental.
                      </p>
                      <h4 className="py-4 text-[0.9rem] font-semibold">
                        Psicóloga clínica & Formadora
                      </h4>
                      <div className="flex gap-2 items-center">
                        <MdOutlineSmartphone />
                        <p className="text-xs">+351 916 445 826</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MdOutlineEmail />
                        <p className="text-xs">contacto@filomenaleitao.pt</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <TbWorldWww />
                        <p className="text-xs">www.filomenaleitao.pt</p>
                      </div>
                      <p className="text-xs font-semibold pt-4 pb-2">
                        Dê um novo significado a sua vida e crie uma nova forma
                        de vida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center content-center justify-center pt-8 pb-24">
            <Button
              type="submit"
              role="link"
              background="#c47b4e"
              variant="outline"
              color="#fff"
              borderColor="#c47"
              _hover={{ background: "#688AB6", color: "#fff" }}
              className={`py-2 px-10 border-2 border-[#B0A889] rounded-md cursor-pointer font-bold text-[#B0A889] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`} // Desativa o botão se estiver enviando
            >
              ENVIAR A MINHA INSCRIÇÃO
            </Button>
            {isSubmitting ? (
              <span className="text-green-400 font-bold py-4 max-w-4xl text-center">
                Obrigado pela sua inscrição que foi enviada com sucesso. <br />{" "}
                Aguarde o contacto.
              </span>
            ) : null}
          </div>
        </section>
      </form>
    </main>
  );
}
