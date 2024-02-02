import { fetchPostJSON } from "@/utils/api-helpers"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body
    console.log(data)

    try {
      const response = await fetchPostJSON(
        "https://sheetdb.io/api/v1/sfkv1sl7bxe6j",
        data
      )
      console.log(response)
      res.status(200).json({ statusCode: 200, response })
    } catch (error: any) {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
      res.status(500).json({
        statusCode: 500,
        message: "Erro ao enviar o formulário",
        errorCode,
        errorMessage,
      })
    }
  } else {
    // Adicionando tratamento de erro no bloco else
    const errorMessage = "Erro interno do servidor"
    res.status(500).json({ statusCode: 500, message: errorMessage })
  }
}

