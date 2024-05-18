"use client"
import { fetchPostJSON } from "@/utils/api-helpers"
import { Center } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { MdOutlineEmail, MdOutlineSmartphone, MdPhone } from "react-icons/md"
import { TbWorldWww } from "react-icons/tb"
import { v4 as uuidv4 } from "uuid"
import { useForm as hookForm } from "react-hook-form"

export default function Form() {
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
    const { statusCode } = await fetchPostJSON(
      "api/enviar-formulario",
      formData
    )
    if (statusCode === 200) {
      setIsSubmitting(true)
    } else {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-[#9ECBA1]">
      <form onSubmit={handleSubmit(Submit)}>
        <section className="max-w-5xl m-auto">
          <div className="flex flex-col items-center gap-3 ">
            <div className="bg-white w-[640px] min-h-[420px] mt-8 rounded-xl border-t-8 border-[1px] border-gray-400 px-8 py-4">
              <Center className="pb-4">
                <h1 className="font-extrabold text-2xl text-center">
                  Ficha de Inscrição
                </h1>
              </Center>
              <div className="flex flex-col items-center gap-3">
                <p className="text-[0.9rem]">
                  Ser psicóloga foi, talvez, a missão mais difícil de iniciar
                  profissionalmente. Como pensar e lidar com alguém me iria
                  pagar por algo que eu própria no inicio não sabia fazer? Quem
                  de nós psicólogos, psiquiatras ou outros profissionais que
                  lidam com a saúde humana, se sente preparado? Quem de nós
                  sabia conciliar toda a aprendizagem e colocá-la na prática
                  assim de um momento para o outro?
                </p>
                <p className="text-[0.9rem]">
                  Eu não me envergonho de dizer que demorei 5 anos até me sentir
                  mais capaz e de me sentir mais segura. Antes, era uma grande
                  caloira nesta aprendizagem, com receio do que aquilo que
                  estava a fazer era certo ou não. Essa humildade levou-me a
                  querer aprender mais e mais. Frequentei pós-graduações,
                  formações, workshops mas nunca tive ninguém que me explicasse
                  como intervir de forma mais prática. Era tudo teórico e
                  abstrato.
                </p>
                <p className="text-[0.9rem]">
                  Frequentei pós-graduações, formações, workshops mas nunca tive
                  ninguém que me explicasse como intervir de forma mais prática.
                  Era tudo teórico e abstrato.
                </p>
                <p className="text-[0.9rem]">
                  Hoje com 17 anos de prática já estou num outro momento de
                  estabilidade. Toda a aprendizagem, sempre atualizada, me faz
                  sentido. Sinto-me muito mais segura naquilo que faço,
                  obviamente.
                </p>
                <p className="text-[0.9rem]">
                  Trabalhar qualquer psicopatologia, nomeadamente na depressão,
                  escolhendo uma abordagem eclética, mas com a base muito
                  centrada na Psicologia Cognitiva-Comportamental não é nada
                  fácil. A avaliação por si só já é difícil, mas intervir, de
                  certeza, que mais difícil será e um grande desafio diário. Não
                  nos podemos basear apenas nos livros e fazer como se costuma
                  dizer “Chapa 5”. É preciso muito mais do que isso.
                </p>
                <p className="text-[0.9rem]">
                  E é neste sentido que me proponho explicar e expor este
                  assunto numa comunicação mais clara do que faço na minha
                  prática para de alguma forma vos criar uma luz de esperança na
                  vossa prática clínica. Pelo menos assim espero!
                </p>
                <p className="text-[0.9rem]">
                  Desta forma, a partir de junho iniciarei uma formação
                  intitulada “Depressão…como avaliar e intervir na prática? com
                  duração de 16 horas. Será a minha primeira Edição e espero
                  poder reproduzi-la muitas outras vezes.
                </p>
                <p className="text-[0.9rem]">
                  <span className="font-semibold">NOTA:</span> Os encontros são
                  realizados online através de Zoom. Vais receber no email o
                  link e os dados para participar em cada encontro. Os encontros
                  não são aulas, são espaços de partilha entre as participantes
                  e, por isso, as sessões não são gravadas.
                </p>
              </div>
            </div>
            <div className="bg-white w-[640px] rounded-2xl px-8 py-4 border-[1px] border-gray-400">
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
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="border-2 border-green-200 p-2 rounded"
                  placeholder="Sua resposta, ex: Miguel Pereira Albuquerque"
                />
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
                  className="border-2 border-green-200 p-2 rounded"
                  placeholder="Sua resposta, ex: miguelpereira@mail.pt."
                />
              </div>
              <div className="flex flex-col my-4">
                <p className="pb-2 text-xs font-semibold">
                  Indica o seu contacto.
                </p>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="border-2 border-green-200 p-2 rounded"
                  placeholder="Sua resposta, ex: +351 999 999 999"
                />
              </div>
            </div>
            <div className="bg-white w-[640px] rounded-2xl px-8 py-4 border-[1px] border-gray-400">
              <p className="text-[0.9rem]">
                A tua inscrição fica confirmada após realização de pagamento por
                transferência bancária (IBAN PT50 ) ou
                Mbway (916 445 826) e envio do comprovativo para
                contacto@filomenaleitao.pt.
              </p>
              <p className="text-[0.9rem] pt-2">
                Devoluções parciais ou totais do valor pago serão realizadas
                mediante solicitação até 48h antes da realização da formação.
              </p>
              <p className="text-[0.9rem] pt-2">
                Após este período só serão realizadas devoluções em caso da não
                realização dos encontros. Pondera conscientemente a tua vontade
                para investir em ti e estar presente. Conto com o teu
                compromisso.
              </p>
              <div className="flex flex-col my-4">
                <p className="pb-2 text-xs font-semibold">
                  Se desejas receber recibo, deixa abaixo o teu número de
                  contribuinte.
                </p>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="border-2 border-green-200 p-2 rounded"
                  placeholder="Sua resposta"
                />
              </div>
            </div>
            <div className="bg-white w-[640px] mb-8 rounded-2xl px-4 py-4 border-[1px] border-gray-400">
              <div className="flex justify-center bg-[rgba(244,244,244,0.60)] rounded-md">
                <div className="flex items-end">
                  <div className="bg-[#9ecba17e] w-[200px] h-[260px] rounded-t-full flex justify-center">
                    <div className="bg-[#323232] rounded-full w-[180px] h-[180px] mt-3 flex justify-center items-center">
                      <div className="rounded-full w-[170px] h-[170px]">
                        <Image
                          src="/avatar.png"
                          alt="avatar"
                          width={500}
                          height={500}
                        />
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
          <div className="flex justify-center pt-8 pb-24">
            <button
              type="submit"
              role="link"
              className={`py-2 px-10 bg-yellow-500 border-2 border-yellow-600 rounded-md cursor-pointer font-extrabold text-black ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`} // Desativa o botão se estiver enviando
            >
              ENVIAR A MINHA INSCRIÇÃO
            </button>
          </div>
        </section>
      </form>
    </main>
  )
}
