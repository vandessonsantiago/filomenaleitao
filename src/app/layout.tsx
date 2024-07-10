import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/hooks/providers";

const manrope = Manrope({ subsets: ["latin"] });

import image from "./opengraph-image.png";

export const metadata: Metadata = {
  title: "Gabinete de Pisicologia - Filomena Leitão",
  description:
    "Gabinete de Psicologia Filomena Leitão, um espaço dedicado a você! Aqui, você se sentirá seguro e apoiado. Explore a oportunidade de (re)construir sua vida, aprendendo a dar significado a cada momento e enfrentando seus desafios com apoio especializado.",

  openGraph: {
    title: "Gabinete de Pisicologia - Filomena Leitão",
    description:
      "Gabinete de Psicologia Filomena Leitão, um espaço dedicado a você! Aqui, você se sentirá seguro e apoiado.",
    images: [
      {
        url: image.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={manrope.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
