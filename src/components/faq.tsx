"use client"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"

export default function Faq() {
  const faq = [
    {
        pergunta: "Quais são os principais benefícios de procurar a minha ajuda psicológica?",
        resposta: "Ao procurar ajuda psicológica poderá contar com uma abordagem personalizada e abrangente para enfrentar as suas questões emocionais e psicológicas. Com mais de 16 anos de experiência e uma sólida formação académica, estou aqui para oferecer o suporte necessário para que alcance o seu potencial máximo."
    },
    {
        pergunta: "Como posso ajudá-lo a entender melhor a raiz dos seus problemas emocionais?",
        resposta: "Estou aqui para ouvir atentamente os seus motivos e a sua história de vida. Desta forma, ao explorarmos pensamentos, emoções e ações, conseguiremos de mãos dadas explorar as origens dos seus problemas emocionais. Com empatia e compreensão, juntos podemos encontrar novas perspectivas e estratégias saudáveis para enfrentar essas questões."
    },
    {
        pergunta: "Quais são as áreas em que tenho mais experiência e especialização?",
        resposta: "Tenho uma vasta experiência em lidar com uma variedade de questões emocionais e psicológicas, desde desafios clínicos até questões relacionadas à escola. Como em cima mencionado, as abordagens principais são a Terapia Cognitiva-Comportamental com a base das neurociências sempre a par. Estou a 100% para fornecer um suporte abrangente e ajudá-lo a superar esses obstáculos."
    },
    {
        pergunta: "Como posso garantir que o meu apoio seja adaptado às suas necessidades específicas?",
        resposta: "A minha abordagem é totalmente personalizada, reconhecendo que cada pessoa é única. Vamos trabalhar juntos para entender as suas necessidades individuais e relacionais e desenvolver estratégias que sejam eficazes para enfrentar os seus desafios emocionais de forma personalizada."
    },
    {
        pergunta: "Por que é importante ter uma base teórica sólida na prática clínica?",
        resposta: "Uma base teórica sólida é fundamental para garantir que estou sempre atualizada com os últimos estudos científicos e técnicas em psicologia. Isso permite-me, sem dúvida, oferecer um atendimento de muita qualidade e eficácia para ajudá-lo da melhor forma possível."
    },
    {
        pergunta: "Como posso marcar uma consulta?",
        resposta: "Para marcar uma consulta, basta entrar em contacto através dos meios disponíveis do meu consultório, como telefone, e-mail ou plataforma online. A forma como se sentir mais à vontade. Não esqueçamos que dar este primeiro passo pode não ser fácil. Tudo será confidencial, portanto, poderá estar tranquilo neste passo. Estou aqui para ouvir e agendar uma consulta que seja conveniente para si."
    },
    {
        pergunta: "Quais são os princípios fundamentais da minha abordagem terapêutica?",
        resposta: "Os princípios fundamentais da minha abordagem terapêutica incluem o compromisso com a maior honestidade, empatia, respeito pela sua singularidade e a crença no seu potencial de crescimento pessoal. Estou aqui para criar um ambiente seguro e de apoio, onde juntos possamos superar os seus desafios emocionais e alcançar uma vida plena e satisfatória."
    }
];

  const index = 1

  return (
    <>
      <Accordion allowMultiple className="w-full">
        {faq.map((item, index) => (
          <div
            className="border border-[#c47b4e] rounded-md px-2 py-2 my-2"
            key={index}
          >
            <AccordionItem border="none">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" width="100%">
                  <h4 className="font-semibold text-18px">{item.pergunta}</h4>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={10} className="text-16px">
                {item.resposta}
              </AccordionPanel>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  )
}
