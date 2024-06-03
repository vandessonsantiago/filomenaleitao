"use client";
import Faq from "@/components/faq";
import { CalendarIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import {
  PiBooksThin,
  PiBrainThin,
  PiGraduationCapThin,
  PiInstagramLogo,
} from "react-icons/pi";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleView = () => {
    setIsMenuVisible((prev) => !prev);
  };

  function HandleSubmit() {
    const url = "https://wa.link/26e7gm";
    window.open(url, "_blank");
  }

  function HandleScrollInicio() {
    const divSobre = document.getElementById("inicio");
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" });
    }
  }
  function HandleScrollAtendimento() {
    const divSobre = document.getElementById("atendimento");
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" });
    }
  }
  function HandleScrollSobre() {
    const divSobre = document.getElementById("sobre-mim");
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" });
    }
  }
  function HandleScrollAcolhidos() {
    const divSobre = document.getElementById("acolhidos");
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" });
    }
  }
  function HandleScrollFAQ() {
    const divSobre = document.getElementById("faq");
    if (divSobre) {
      divSobre.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header className="max-w-5xl m-auto">
        <div className="flex h-20 items-center justify-between">
          <div>
            <Image
              width="240"
              height="100"
              alt="Logotipo"
              src="/logo_filomena.png"
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
              <p className="text-sm font-bold text-[#688AB6] hover:text-[#c47b4e]">Início</p>
            </Box>
            <Box
              p="20px"
              onClick={HandleScrollAtendimento}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#688AB6] hover:text-[#c47b4e]">Atendimento</p>
            </Box>
            <Box
              p="20px"
              onClick={HandleScrollSobre}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#688AB6] hover:text-[#c47b4e]">Sobre mim</p>
            </Box>
            <Box
              p="20px"
              onClick={HandleScrollAcolhidos}
              className="cursor-pointer"
            >
              <p className="text-sm font-bold text-[#688AB6] hover:text-[#c47b4e]">Público-Alvo</p>
            </Box>
            <Box p="20px" onClick={HandleScrollFAQ} className="cursor-pointer">
              <p className="text-sm font-bold text-[#688AB6] hover:text-[#c47b4e]">FAQ</p>
            </Box>
            <Button
              leftIcon={<CalendarIcon />}
              variant="solid"
              bg="#c47b4e"
              _hover={{ bg: "#c47b4e" }}
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
                  <GiHamburgerMenu color="#c47b4e" />
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
            borderBottomColor="#c47b4e"
            onClick={HandleScrollInicio}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#c47b4e]">Início</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#c47b4e"
            onClick={HandleScrollAtendimento}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#c47b4e]">Atendimento</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#c47b4e"
            onClick={HandleScrollSobre}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#c47b4e]">Sobre mim</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#c47b4e"
            onClick={HandleScrollAcolhidos}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#c47b4e]">Público-Alvo</p>
          </Box>
          <Box
            p="20px"
            mt="2"
            borderBottom="1px"
            borderBottomColor="#c47b4e"
            onClick={HandleScrollFAQ}
            className="cursor-pointer"
          >
            <p className="font-bold text-[#c47b4e]">FAQ</p>
          </Box>
        </Collapse>
      </header>
      <section className="bg-[#c47b4e]">
        <div id="hero">
          <div id="inicio" className="tablet:max-w-5xl tablet:m-auto">
            <div className="flex items-center gap-1 px-2 pt-4">
              <p className="text-white text-[16px] font-semibold min-w-fit tablet:text-lg tablet:font-bold">
                Psicóloga Filomena Leitão
              </p>
              <div className="w-12 bg-[#c47b] h-[2px]"></div>
            </div>
            <div className="pt-4 flex flex-col tablet:flex-row tablet:justify-center tablet:items-center">
              <div className="flex items-center h-full">
                <div className="mx-2">
                  <p className="text-2xl tablet:text-4xl font-extrabold text-white antialiased">
                    Dar um novo significado à nossa vida e criar uma nova
                    filosofia de vida!
                  </p>
                  <p className="text-lg tablet:text-xl text-white mt-2">
                    Tenho uma missão de vida apaixonante que não pretendo
                    abdicar!
                  </p>
                  <div className="mt-4">
                    <Flex gap={1}>
                        <Button
                          leftIcon={<CalendarIcon />}
                          background="#688AB6"
                          variant="outline"
                          color="#fff"
                          borderColor="#688AB6"
                          onClick={HandleSubmit}
                          _hover={{ background: "#688AB6", color: "#fff" }}
                        >
                        Agendamento
                      </Button>
                      <Button
                        variant="outline"
                        color="#FFF"
                        borderColor="#FFF"
                        _hover={{ background: "#688AB6", color: "#fff" }}
                        onClick={HandleScrollAtendimento}
                      >
                        Saiba mais
                      </Button>
                    </Flex>
                  </div>
                </div>
              </div>
              <div className="h-max flex mobile:justify-center">
                <div className="mobile:block py-4 flex tablet:hidden ">
                  <Image
                    width="350"
                    height="200"
                    alt="Filomena"
                    src="/filomena.svg"
                    className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl"
                  />
                </div>
                <div className="hidden tablet:block mb-[-30px]">
                  <Image
                    width="770"
                    height="200"
                    alt="Filomena"
                    src="/filomena.svg"
                    className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="flex flex-col tablet:max-w-5xl tablet:m-auto">
        <div id="atendimento" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-[16px] font-semibold min-w-fit tablet:text-lg tablet:font-bold">
              Atendimento
            </p>
            <div className="w-12 bg-[#c47b] h-[2px]"></div>
          </div>
          <div className="my-2">
            <p className="font-bold text-lg tablet:my-8 tablet:text-3xl">
              Quem precisa de atendimento Psicológico?
            </p>
            <p className="mobile:text-base table:text-lg mt-1">
              Qualquer pessoa que em algum momento da sua vida esteja com alguma
              dificuldade em encontrar as melhores estratégias para enfrentar os
              desafios do quotidiano, sejam dificuldades pessoais ou quaisquer
              situação que nos deixam confusos e sobrecarregados para estar apto
              a tomar decisões. Isto acontece a qualquer um de nós. É
              perfeitamente normal sentir-se assim!
            </p>

            <p className="mobile:text-base table:text-lg mt-1">
              No entanto, se esses sentimentos persistirem e começarem a afetar
              significativamente nossa qualidade de vida e bem-estar, pode ser a
              hora de procurar ajuda profissional. Esqueçam aquele mito “os
              psicólogos são para os malucos”. Nunca na minha vida conheci um
              “maluco” no meu consultório.
            </p>

            <p className="mobile:text-base table:text-lg mt-1">
              O atendimento psicológico, ou a intervenção psicológica oferece um
              espaço seguro e confidencial para explorar seus pensamentos,
              emoções e comportamentos de uma forma que talvez não seja possível
              com amigos ou familiares. Um psicólogo treinado pode ajudá-lo a
              entender melhor a origem dos seus problemas, oferecer perspetivas
              novas e saudáveis, e fornecer ferramentas e estratégias para
              enfrentar e superar os desafios.
            </p>

            <p className="mobile:text-base table:text-lg mt-1">
              Independentemente do motivo, é importante lembrar que procurar
              ajuda psicológica não é um sinal de fraqueza, mas sim de coragem e
              autocuidado e é o primeiro passo na resolução do problema.
            </p>

            <p className="mobile:text-base table:text-lg mt-1">
              Portanto, se se encontra numa fase mais difícil, mais
              sobrecarregada, mais frustrada e cansada, não hesite em procurar o
              apoio de que precisa. Numa primeira consulta encontra logo o
              primeiro alívio nessa situação porque de organizou em voz alta.
            </p>

            <p className="mobile:text-base table:text-lg mt-1">
              A saúde mental, felizmente, cada vez mais, tem sido vista pelos
              profissionais e sociedade em geral com a uma importância que lhe é
              merecida. Cuide dela para bem da sua saúde geral!
            </p>
          </div>
          <div className="my-4 tablet:flex justify-center tablet:my-12">
            <Flex gap={1}>
              <Button
                leftIcon={<CalendarIcon />}
                variant="outline"
                color="#c47b4e"
                borderColor="#c47b4e"
                onClick={HandleSubmit}
              >
                <p className="tablet:text-xl py-4"> Agendar consulta</p>
              </Button>
            </Flex>
          </div>
          <div className="my-2 tablet:my-8">
            <p className="font-bold text-center my-2 tablet:my-8 tablet:text-3xl">
              Algumas razões pelas quais pode precisar de consulta de
              psicologia:
            </p>
            <div className="flex flex-wrap justify-center">
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Ansiedade Elevada e Persistente
              </p>
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Humor Depressivo
              </p>
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Dificuldades nos Relacionamentos
              </p>
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Trauma ou Perda
              </p>
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Baixa Autoestima
              </p>
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Ataque de Pânico
              </p>
              <p className="font-semibold p-2 m-1 bg-[#c47b4e] rounded-md">
                Ansiedade face aos testes
              </p>
            </div>
          </div>
        </div>
        <div id="sobre-mim" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-[16px] font-semibold min-w-fit tablet:text-lg tablet:font-bold">
              Sobre mim
            </p>
            <div className="w-12 bg-[#c47b] h-[2px]"></div>
          </div>
          <div className="h-fit my-2">
            <p className="text-[16px] tablet:text-base">
              Sou a Filomena Leitão uma profissional com mais de 16 anos de
              experiência e com uma sólida formação académica e prática na área
              da Psicologia Clínica e da Saúde, bem como escolar, desde 2007.
              Certificada pela Ordem dos Psicólogos Portugueses com a cédula
              11040.
            </p>
            <p className="text-[16px] tablet:text-base">
              Tenho uma vontade natural e crescente de estar sempre a
              atualizar-me, de busca constante de conhecimento e
              aperfeiçoamento. Basicamente, sou uma curiosa e muito criativa e
              isso incentiva-me na procura de intervenções personalizadas e não
              aquilo a que comummente se chama “chapa 5”. Cada pessoa tem
              características tão individuais e tão singulares, que a beleza da
              intervenção está em adaptar-me a essa versatilidade e em ser
              criativa.
            </p>
            <p className="text-[16px] tablet:text-base">
              Desta forma, proporciono uma abordagem personalizada e holística
              para lidar com uma variedade de questões emocionais e
              psicológicas.
            </p>
            <p className="text-[16px] tablet:text-base">
              Os motivos das consultas são diversos, nomeadamente clínicos,
              escolares, relacionais… tenho a experiência e a compreensão
              necessárias para lhe ajudar a atingir o seu máximo potencial.
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
                  <p className="text-[16px] font-semibold text-center">
                    Licenciada em Psicologia Clínica - Uminho.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-2">
                <div>
                  <PiGraduationCapThin size={38} />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-center">
                    Mestre em Psicologia Clínica - Uminho.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-2">
                <div>
                  <PiBooksThin size={38} />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-center">
                    Pós-graduação em Psicopatologia da Criança e do Adolescente.
                  </p>
                  <p className="text-[16px] font-semibold text-center">
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
                  <p className="text-[16px] font-semibold text-center">
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
                <p className="text-[16px] font-bold">Filomena Leitão</p>
                <p className="text-[16px]">Psicóloga | OPP 11040</p>
              </div>
            </Center>
            <div className="mt-4">
              <p className="text-[16px] text-center font-semibold">
                ver currículo completo
              </p>
            </div>
          </div>
        </div>
        <div id="acolhidos" className="m-4">
          <div className="flex items-center gap-1">
            <p className="text-[16px] font-semibold min-w-fit tablet:text-lg tablet:font-bold">
              Público-Alvo
            </p>
            <div className="w-12 bg-[#c47b] h-[2px]"></div>
          </div>

          <div className="flex flex-col gap-2 items-center tablet:flex-row tablet:justify-around">
            <Center className="relative mim-w-[340px] min-h-[360px] max-w-[500px] max-h-[360px] w-full h-full my-2 bg-black rounded-md">
              <Image
                width="500"
                height="100"
                className="absolute top-0 rounded-md"
                alt="Logotipo"
                src="/adulto.png"
              />
              <div className="bottom-2 left-2 p-2 absolute text-white">
                <p className="text-[18px] font-bold">Adultos</p>
                <p className="text-[16px]">
                  Orientação e apoio para adultos em diversas fases da vida,
                  fomentando o desenvolvimento pessoal e o bem-estar emocional.
                </p>
              </div>
            </Center>
            <Center className="relative mim-w-[340px] min-h-[360px] max-w-[500px] max-h-[360px] w-full h-full my-2 bg-black rounded-md">
              <Image
                width="500"
                height="100"
                className="absolute top-0 rounded-md"
                alt="Logotipo"
                src="/adolescente.png"
              />
              <div className="bottom-2 left-2 p-2 absolute text-white">
                <p className="text-[18px] font-bold">Adolescentes</p>
                <p className="text-[16px]">
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
            <p className="text-[16px] font-semibold min-w-fit tablet:text-lg tablet:font-bold">
              FAQ
            </p>
            <div className="w-12 bg-[#c47b] h-[2px]"></div>
          </div>
          <div className="my-2">
            <p className="text-[18px] font-semibold">
              Não hesite em contactar-me se tiver alguma dúvida.
            </p>
            <p className="text-[16px] my-2">
              Se tiver questões ou qualquer outra preocupação, envie-me uma
              mensagem através do WhatsApp. Estou disponível para te ajudar a
              dar este passo.
            </p>
          </div>
          <div className="my-4">
            <Flex gap={1}>
              <Button
                leftIcon={<BsWhatsapp />}
                variant="outline"
                color="#c47b4e"
                borderColor="#c47b4e"
                onClick={HandleSubmit}
              >
                Fale comigo
              </Button>
            </Flex>
          </div>
          <Faq />
        </div>
      </main>
      <footer className="bg-[#c47b4e] ">
        <div id="hero" className="py-16">
          <div className="tablet:flex justify-between items-center gap-2 tablet:max-w-5xl tablet:m-auto">
            <div className="flex justify-center items-center">
              <Image
                width="250"
                height="80"
                alt="Logotipo"
                src="/logo_filomena_branco.png"
              />
            </div>
            <div className="flex flex-col justify-center items-center content-center p-2">
              <Flex alignItems="center" gap={1}>
                <MdOutlineEmail color="white"/>
                <p className="text-[16px] text-white">filomenaleitao@gmail.com</p>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <PiInstagramLogo color="white"/>
                <p className="text-[16px] text-white">filomenaleitao.psicologia</p>
              </Flex>
              <p className="text-[16px] text-white">OPP 11040</p>
            </div>
            <div>
              <Center>
                <Button
                  leftIcon={<CalendarIcon  color="white"/>}
                  variant="outline"
                  colorScheme=""
                  border='2px'
                  borderColor='white'
                  onClick={HandleSubmit}
                  textColor="white"
                >
                  Agendamento
                </Button>
              </Center>
            </div>
          </div>
          <div>
            <div className="h-[1px] bg-white mx-2 my-4"></div>
            <div>
              <p className="text-white text-center px-10 text-[16px]">
                ©2024 Filomena Leitão – Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
