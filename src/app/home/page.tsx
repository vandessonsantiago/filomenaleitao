"use client"
import Faq from "@/components/faq"
import { CalendarIcon, CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  IconButton,
} from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { BsWhatsapp } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineEmail } from "react-icons/md"
import {
  PiBooksThin,
  PiBrainThin,
  PiGraduationCapThin,
  PiInstagramLogo,
} from "react-icons/pi"

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleView = () => {
    setIsMenuVisible((prev) => !prev)
  }

  function HandleSubmit() {
    const url = "https://wa.link/26e7gm"
    window.open(url, "_blank")
  }

  function HandleScrollInicio() {
    const divSobre = document.getElementById("inicio")
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" })
    }
  }
  function HandleScrollAtendimento() {
    const divSobre = document.getElementById("atendimento")
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" })
    }
  }
  function HandleScrollSobre() {
    const divSobre = document.getElementById("sobre-mim")
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" })
    }
  }
  function HandleScrollAcolhidos() {
    const divSobre = document.getElementById("acolhidos")
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" })
    }
  }
  function HandleScrollFAQ() {
    const divSobre = document.getElementById("faq")
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="max-w-5xl m-auto">
        <div className="flex h-20 items-center justify-between">
          <div>
            <Image
              width="140"
              height="100"
              alt="Logotipo"
              src="/logo_filomena_leitao_img.png"
            />
          </div>
          <div
            id="menu-horizontal"
            className="hidden tablet:flex items-center gap-1"
          >
            <Box
              p="20px"
              onClick={HandleScrollInicio}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#9ECBA1]">Início</p>
            </Box>
            <Box
              p="20px"
              onClick={HandleScrollAtendimento}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#9ECBA1]">Atendimento</p>
            </Box>
            <Box
              p="20px"
              onClick={HandleScrollSobre}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#9ECBA1]">Sobre mim</p>
            </Box>
            <Box
              p="20px"
              onClick={HandleScrollAcolhidos}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#9ECBA1]">Acolhidos</p>
            </Box>
            <Box p="20px" onClick={HandleScrollFAQ} className="cursor-pointer">
              <p className="text-sm font-bold text-[#9ECBA1]">FAQ</p>
            </Box>
            <Button
              leftIcon={<CalendarIcon />}
              variant="solid"
              bg="#9ECBA1"
              _hover={{ bg: "#9ECBA1" }}
              color="white"
              onClick={HandleSubmit}
            >
              Agendamento
            </Button>
          </div>
          <div id="menu-hamburger" className="tablet:hidden">
            <IconButton
              onClick={toggleView}
              className="mr-2"
              variant="ghost"
              aria-label="Call Segun"
              size="lg"
              icon={
                isMenuVisible ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <GiHamburgerMenu color="#9ECBA1" />
                )
              }
            />
          </div>
        </div>
        <Collapse in={isMenuVisible} animateOpacity>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#9ECBA1"
            onClick={HandleScrollInicio}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#9ECBA1]">Início</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#9ECBA1"
            onClick={HandleScrollAtendimento}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#9ECBA1]">Atendimento</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#9ECBA1"
            onClick={HandleScrollSobre}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#9ECBA1]">Sobre mim</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#9ECBA1"
            onClick={HandleScrollAcolhidos}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#9ECBA1]">Acolhidos</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#9ECBA1"
            onClick={HandleScrollFAQ}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#9ECBA1]">FAQ</p>
          </Box>
        </Collapse>
      </header>
      <section className="bg-gradient-to-r from-neutral-950 to-neutral-700">
        <div id="inicio" className="tablet:max-w-5xl tablet:m-auto">
          <div className="flex items-center gap-1 px-2 pt-4">
            <p className="text-xs text-white font-semibold min-w-fit">
              Psicóloga Filomena Leitão
            </p>
            <div className="w-12 bg-[#9ECBA1] h-[2px]"></div>
          </div>
          <div className="pt-4 flex flex-col tablet:flex-row tablet:justify-center tablet:items-center">
            <div className="flex items-center h-full">
              <div className="mx-2">
                <p className="text-2xl tablet:text-4xl font-extrabold text-white antialiased">
                  Dê um novo significado a sua vida e crie uma nova forma de
                  vida.
                </p>
                <p className="text-lg tablet:text-xl text-white mt-2">
                  Suporte abrangente e eficaz para ajudar os indivíduos a
                  enfrentar seus desafios emocionais e alcançar seu pleno
                  potencial.
                </p>
                <div className="mt-4">
                  <Flex gap={1}>
                    <Button
                      leftIcon={<CalendarIcon />}
                      variant="outline"
                      color="#9ECBA1"
                      borderColor="#9ECBA1"
                      onClick={HandleSubmit}
                    >
                      Agendamento
                    </Button>
                    <Button
                      variant="outline"
                      color="#FFF"
                      borderColor="#FFF"
                      onClick={HandleScrollAtendimento}
                    >
                      Saiba mais
                    </Button>
                  </Flex>
                </div>
              </div>
            </div>
            <div className="h-max flex items-end mobile:justify-center">
              <div className="mobile:block tablet:hidden flex justify-center">
                <Image
                  width="450"
                  height="200"
                  alt="Logotipo"
                  src="/Filo_real.png"
                />
              </div>
              <div className="hidden tablet:block">
                <Image
                  width="770"
                  height="200"
                  alt="Logotipo"
                  src="/Filo_real.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="flex flex-col tablet:max-w-5xl tablet:m-auto">
        <div id="atendimento" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-xs font-semibold min-w-fit">Atendimento</p>
            <div className="w-12 bg-[#9ECBA1] h-[2px]"></div>
          </div>
          <div className="my-2">
            <p className="font-bold text-lg">
              Por que Você Precisa de Atendimento Psicológico?
            </p>
            <p className="text-xs mt-1">
              Em algum momento da vida, todos nós enfrentamos desafios
              emocionais, dificuldades pessoais ou situações que nos deixam
              confusos e sobrecarregados. É perfeitamente normal sentir-se
              assim, mas quando esses sentimentos persistem e começam a afetar
              significativamente nossa qualidade de vida e bem-estar, pode ser
              hora de buscar ajuda profissional.
            </p>
            <p className="text-xs mt-1">
              O atendimento psicológico oferece um espaço seguro e confidencial
              para explorar seus pensamentos, sentimentos e comportamentos de
              uma forma que talvez não seja possível com amigos ou familiares.
              Um psicólogo treinado pode ajudá-lo a entender melhor a raiz de
              seus problemas, oferecer perspectivas novas e saudáveis, e
              fornecer ferramentas e estratégias para enfrentar e superar os
              desafios que você enfrenta.
            </p>
            <p className="text-xs mt-1">
              Independentemente do motivo, é importante lembrar que buscar
              atendimento psicológico não é um sinal de fraqueza, mas sim de
              coragem e autocuidado. Todos nós enfrentamos momentos difíceis na
              vida, e pedir ajuda é um passo importante em direção à cura e ao
              crescimento pessoal.
            </p>
            <p className="text-xs mt-1">
              Se você está lutando com questões emocionais ou psicológicas, não
              hesite em procurar o apoio de que precisa. Sua saúde mental é
              importante e você merece cuidar dela.
            </p>
          </div>
          <div className="my-4">
            <Flex gap={1}>
              <Button
                leftIcon={<CalendarIcon />}
                variant="outline"
                color="#9ECBA1"
                borderColor="#9ECBA1"
                onClick={HandleSubmit}
              >
                Agendar consulta
              </Button>
            </Flex>
          </div>
          <div className="my-2">
            <p className="font-bold text-center my-2">
              Aqui estão algumas razões pelas quais você pode precisar de
              atendimento psicológico:
            </p>
            <div className="flex-grow">
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Sentimentos de Ansiedade
              </p>
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Depressão
              </p>
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Dificuldades nos Relacionamentos
              </p>
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Trauma ou Perda
              </p>
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Dificuldades de Autoestima
              </p>
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Problemas de Saúde Mental
              </p>
              <p className="font-semibold p-2 m-1 bg-[#9ECBA1] rounded-md">
                Dificuldades de Adaptação
              </p>
            </div>
          </div>
        </div>
        <div id="sobre-mim" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-xs font-semibold min-w-fit">Sobre mim</p>
            <div className="w-12 bg-[#9ECBA1] h-[2px]"></div>
          </div>
          <div className="my-2">
            <p className="text-lg font-semibold">
              Por que realizar uma consulta comigo?
            </p>
          </div>
          <div className="h-fit my-2">
            <p className="text-xs">
              Sou a Filomena Leitão uma profissional com mais de 16 anos de
              experiência e com uma sólida formação académica.
            </p>
            <p className="text-xs">
              Estou em constante busca por conhecimento e aperfeiçoamento,
              comprometida com a excelência.
            </p>
            <p className="text-xs mt-1">
              Proporciono uma abordagem personalizada e holística para lidar com
              uma variedade de questões emocionais e psicológicas.
            </p>
            <p className="text-xs mt-1">
              Seja a enfrentar desafios clínicos ou questões escolares, tenho a
              experiência e a compreensão necessárias para lhe ajudar a atingir
              o seu máximo potencial.
            </p>
          </div>
        </div>
        <div className="my-2">
          <div className="h-[1px] bg-gray-800 mx-4"></div>
        </div>
        <div className="flex flex-col tablet:flex-row tablet:justify-around tablet:py-12 tablet:px-4">
          <div>
            <Center p={4} className="flex-col">
              <div className="flex items-center justify-center gap-2 my-2">
                <div>
                  <Image
                    width="30"
                    height="30"
                    alt="Logotipo"
                    src="/psicologia.png"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-center">
                    Licenciada em Psicologia Clínica - Uminho.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-2">
                <div>
                  <PiGraduationCapThin size={38} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-center">
                    Mestre em Psicologia Clínica - Uminho.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-2">
                <div>
                  <PiBooksThin size={38} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-center">
                    Pós-graduação em Psicopatologia da Criança e do Adolescente.
                  </p>
                  <p className="text-xs font-semibold text-center">
                    Pós-graduação em Neuroeducação nas Dificuldades de
                    Aprendizagem.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-2">
                <div>
                  <PiBrainThin size={38} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-center">
                    Várias formações em Educação e Saúde mental.
                  </p>
                </div>
              </div>
            </Center>
          </div>
          <div className="">
            <Center className="relative">
              <Image
                width="240"
                height="100"
                className="rounded-md"
                alt="Logotipo"
                src="/filomena_foto.png"
              />
              <div className="bottom-2 left-20 absolute text-white">
                <p className="text-xs font-bold">Filomena Leitão</p>
                <p className="text-xs">Psicóloga | OPP 11040</p>
              </div>
            </Center>
            <div className="mt-4">
              <p className="text-xs text-center font-semibold">
                ver currículo completo
              </p>
            </div>
          </div>
        </div>
        <div id="acolhidos" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-xs font-semibold min-w-fit">Acolhidos</p>
            <div className="w-12 bg-[#9ECBA1] h-[2px]"></div>
          </div>
          <div className="my-2">
            <p className="text-lg font-semibold">
              Meu atendimento é direcionado para:
            </p>
          </div>
          <div className="flex-col flex gap-2 tablet:flex-row tablet:justify-around">
            <Center className="relative w-[340px] h-[360px] my-2 bg-black rounded-md">
              <Image
                width="340"
                height="100"
                className="absolute top-0 rounded-md"
                alt="Logotipo"
                src="/adulto.png"
              />
              <div className="bottom-2 left-2 p-2 absolute text-white">
                <p className="text-lg font-bold">Adultos</p>
                <p className="text-xs">
                  Orientação e apoio para adultos em diversas fases da vida,
                  fomentando o desenvolvimento pessoal e o bem-estar emocional.
                  A minha abordagem é concebida para ajudar os adultos a
                  ultrapassar os desafios do quotidiano.
                </p>
              </div>
            </Center>
            <Center className="relative w-[340px] h-[360px] my-2 bg-black rounded-md">
              <Image
                width="340"
                height="100"
                className="absolute top-0 rounded-md"
                alt="Logotipo"
                src="/adolescente.png"
              />
              <div className="bottom-2 left-2 p-2 absolute text-white">
                <p className="text-lg font-bold">Adolescentes</p>
                <p className="text-xs">
                  Proporciono um acompanhamento personalizado a jovens que
                  procuram crescimento, autoconhecimento e superação de
                  obstáculos. Reconheço as complexidades únicas da adolescência.
                </p>
              </div>
            </Center>
          </div>
        </div>
        <div id="faq" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-xs font-semibold min-w-fit">FAQ</p>
            <div className="w-12 bg-[#9ECBA1] h-[2px]"></div>
          </div>
          <div className="my-2">
            <p className="text-lg font-semibold">
              Não hesites em contactar-me se tiveres alguma dúvida.
            </p>
            <p className="text-xs my-2">
              Se tiveres questões ou qualquer outra preocupação, envia-me uma
              mensagem através do WhatsApp. Estou disponível para te ajudar a
              dar este passo.
            </p>
          </div>
          <div className="my-4">
            <Flex gap={1}>
              <Button
                leftIcon={<BsWhatsapp />}
                variant="outline"
                color="#9ECBA1"
                borderColor="#9ECBA1"
                onClick={HandleSubmit}
              >
                Fale comigo
              </Button>
            </Flex>
          </div>
          <Faq />
        </div>
      </main>
      <footer className="bg-[#edf2f6] p-2 tablet:py-16">
        <div className="tablet:flex justify-between items-center gap-2 tablet:max-w-5xl tablet:m-auto">
          <div className="flex justify-center items-center">
            <Image
              width="200"
              height="80"
              alt="Logotipo"
              src="/logo_filomena_leitao_img.png"
            />
          </div>
          <div className="flex flex-col justify-center items-center content-center p-2">
            <Flex alignItems="center" gap={1}>
              <MdOutlineEmail />
              <p className="text-xs">filomenaleitao@gmail.com</p>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <PiInstagramLogo />
              <p className="text-xs">filomenaleitao.psicologia</p>
            </Flex>
            <p className="text-xs">OPP 11040</p>
          </div>
          <div>
            <Center>
              <Button
                leftIcon={<CalendarIcon />}
                variant="outline"
                colorScheme=""
                onClick={HandleSubmit}
              >
                Agendamento
              </Button>
            </Center>
          </div>
        </div>
        <div>
          <div className="h-[1px] bg-black mx-2 my-4"></div>
          <div>
            <p className="text-center px-10 text-xs">
              ©2024 Filomena Leitão – Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
