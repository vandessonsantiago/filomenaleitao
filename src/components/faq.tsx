"use client";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function Faq() {
  const faq = [
    {
      pergunta:
        "Quais são os principais benefícios de procurar a minha ajuda psicológica?",
      resposta:
        "Ao procurar ajuda psicológica poderá contar com uma abordagem personalizada e abrangente para enfrentar as suas questões emocionais e psicológicas. Com mais de 16 anos de experiência e uma sólida formação académica, estou aqui para oferecer o suporte necessário para que alcance o seu potencial máximo.",
    },
    {
      pergunta:
        "Como posso ajudá-lo/a a entender melhor a raiz dos seus problemas emocionais?",
      resposta:
        "Estou aqui para ouvir atentamente a sua história de vida e o motivo pelo qual procurou acompanhamento psicológico. O suporte profissional na exploração de pensamentos, emoções e ações permitir-lhe-á compreender as suas dificuldades, num contexto de empatia e compreensão, e identificar novos recursos e estratégias saudáveis para enfrentar os desafios.",
    },
    {
      pergunta:
        "Quais são as áreas em que tenho mais experiência e especialização?",
      resposta:
        "Tenho uma vasta experiência em lidar com uma variedade de questões emocionais e psicológicas, em diferentes etapas do desenvolvimento (adolescentes e adultos) e diferentes contextos (escolar, familiar, relacional). A minha intervenção decorre ancorada na Terapia Cognitiva-Comportamental e baseada em evidência científica atual, incluindo a integração do conhecimento científico no domínio das neurociências.",
    },
    {
      pergunta:
        "Como posso garantir que o meu apoio seja adaptado às suas necessidades específicas?",
      resposta:
        "A minha abordagem é totalmente personalizada, reconhecendo que cada pessoa é única e apresenta necessidades específicas. A partir das suas necessidades individuais e relacionais, será desenvolvido um plano de avaliação e intervenção psicológica que permitirá potenciar o seu bem-estar e reduzir o sofrimento psicológico.",
    },
    {
      pergunta:
        "Por que é importante ter uma base teórica sólida na prática clínica?",
      resposta:
        "Uma base teórica sólida é fundamental para garantir que estou sempre atualizada com os últimos estudos científicos e técnicas em psicologia. Isso permite-me, sem dúvida, oferecer um atendimento de muita qualidade e eficácia para ajudá-lo da melhor forma possível.",
    },
    {
      pergunta: "Como posso marcar uma consulta?",
      resposta:
        "Para marcar uma consulta, basta entrar em contacto através dos meios disponíveis do meu consultório, como telefone, e-mail ou plataforma online. Dar este primeiro passo pode não ser fácil, pelo que recorra à estratégia com a qual se sinta mais à vontade, estando garantido o respeito pela sua privacidade e confidencialidade.",
    },
    {
      pergunta:
        "Quais são os princípios fundamentais da minha abordagem terapêutica?",
      resposta:
        "Os princípios fundamentais da minha abordagem terapêutica incluem o compromisso com a maior honestidade, empatia, respeito pela sua singularidade e a crença no seu potencial de crescimento pessoal. Estou aqui para criar um ambiente seguro e de apoio, onde possa superar os seus desafios emocionais e alcançar uma vida plena e satisfatória.",
    },
  ];

  const index = 1;

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
  );
}
