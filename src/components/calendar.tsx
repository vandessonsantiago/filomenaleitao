"use client";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function Calendar() {
  const faq = [
    {
      pergunta: "Calendarização",
      resposta: `
        <table style="width: 100%; border-collapse: collapse; font-size: 12px">
          <thead>
            <tr>
              <th style="border: 1px solid #000; padding: 8px; text-align: center;">Nº sessão</th>
              <th style="border: 1px solid #000; padding: 8px; text-align: center;">Dia</th>
              <th style="border: 1px solid #000; padding: 8px; text-align: center;">Hora</th>
              <th style="border: 1px solid #000; padding: 8px; text-align: center;">Carga horária</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">1ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">20 de junho 2024 (5ª feira)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">20.30h às 22.30h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">2h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">2ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">25 junho 2024 (3ª feira)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">20.30h às 22.30h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">2h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">3ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">29 junho 2024 (sábado)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">10.00h às 13.00h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">3h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">4ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">1 julho 2024 (2ª feira)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">20.30h às 22.30h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">2h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">5ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">4 julho 2024 (5ª feira)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">20.30h às 22.30h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">2h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">6ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">6 julho 2024 (sábado)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">10.00h às 13.00h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">3h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">7ª sessão</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">8 julho 2024 (4ª feira)</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">20.30h às 22.30h</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">2h</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">Total</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;"></td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;"></td>
              <td style="border: 1px solid #000; padding: 8px; text-align: center;">16h</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      pergunta: "Programa",
      resposta: `
        <div style="font-size: 14px; line-height: 1.6;">
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo I:</h3>
          <ul>
            <li>Apresentação dos formandos</li>
            <li>Apresentação dos objetivos da formação</li>
            <li>Compreensão da Depressão</li>
            <li>Tipos de Depressão - DSM V</li>
          </ul>
          </br>
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo II:</h3>
          <ul>
            <li>A neurociência da Depressão</li>
            <li>As emoções Básicas: reações fisiológicas, funções e comportamentos das emoções</li>
            <li>Cormobilidades na depressão</li>
            <li>Depressão endógena vs exógena</li>
            <li>Prevalência da depressão</li>
          </ul>
          </br>
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo III:</h3>
          <ul>
            <li>Teorias base na intervenção e sua explicação (com exemplos de aplicação)</li>
            <ul>
              <li>Abordagem eclética</li>
            </ul>
          </ul>
          </br>
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo IV:</h3>
          <ul>
            <li>Avaliação e diagnóstico</li>
            <ul>
              <li>1ª sessão da intervenção</li>
            </ul>
            <li>Intervenção comportamental</li>
            <ul>
              <li>2ª sessão da intervenção</li>
              <li>3º sessão da intervenção</li>
            </ul>
          </ul>
           </br>
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo V:</h3>
          <ul>
            <li>Restruturação cognitiva com exemplos práticos de como fazer e explicar ao cliente</li>
          </ul>
          </br>
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo VI:</h3>
          <ul>
            <li>Terapia narrativa e outras abordagens</li>
            <ul>
              <li>Através dos TPCs dos clientes nas Intrassessões</li>
            </ul>
          </ul>
          </br>
          <h3 style="font-size: 14px; line-height: 1.6; font-weight: bold">Módulo VII:</h3>
          <ul>
            <li>Prática – apresentação de casos dos próprios formandos</li>
            <ul>
              <li>Enviados com antecedência para análise</li>
            </ul>
          </ul>
          </br>
          <p> Esta formação não terá avaliação, mas sim estudos de casos que os formandos queiram
apresentar, com a devida antecedência.
Após o término da formação poderá ter acesso ao Certificado da Formação elaborado pelo
Consultório de Psicologia Filomena Leitão.</p>
          </br>
          <p>Esta formação foi submetida à Ordem dos Psicólogos Portugueses (OPP) para análise de acreditação, pelo que a 1º edição ainda não
está acreditada por esta entidade.</p>
        </div> 
      `,
    },
  ];

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
                <div dangerouslySetInnerHTML={{ __html: item.resposta }} />
              </AccordionPanel>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  );
}
