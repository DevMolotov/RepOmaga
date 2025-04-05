import { NextResponse } from "next/server";

export async function GET() {
  const projetos = [
    {
      id: 1,
      title: "Projeto 01",
      description: "Criação de um projeto que consistia na montagem de um carrinho utilizando o Arduino.",
      slug: "projeto-01",
      images: [
        "/images/projeto-01-1.jpg",
        "/images/projeto-01-2.jpg",
        "/images/projeto-01-3.jpg",
      ],
    },
    {
      id: 2,
      title: "Projeto 02",
      description: ".",
      slug: "projeto-02",
      images: [
        "/images/projeto-02-1.jpg",
        "/images/projeto-02-2.jpg",
      ],
    },
    {
      id: 3,
      title: "Projeto 03",
      description: "Criação de um braço robótico utilizando motores servo e Arduino.",
      slug: "projeto-03",
      images: [
        "/images/projeto-03-1.jpg",
        "/images/projeto-03-2.jpg",
      ],
    },
    {
      id: 4,
      title: "Projeto 04",
      description: "Criação de um aplicativo de uma feira de estágios utilizando Flutterflow e Firebase.",
      slug: "projeto-04",
      images: [
        "/images/projeto-04-1.jpg",
        "/images/projeto-04-2.jpg",
      ],
    },
    {
      id: 5,
      title: "Projeto 05",
      description: "Criação de um site para uma empresa chamada Powerlini Coqueiros para o gerenciamento de setor utilizando Django.",
      slug: "projeto-05",
      images: [
        "/images/projeto-05-1.jpg",
        "/images/projeto-05-2.jpg",
      ],
    },
    {
      id: 6,
      title: "Projeto 06",
      description: "Criação de um portifólio utilizando Next.js e Tailwind CSS (Que coincidência, esse é o projeto!!).",
      slug: "projeto-06",
      images: [
        "/images/projeto-06-1.jpg",
        "/images/projeto-06-2.jpg",
      ],
    },
  ];

  const response = NextResponse.json(projetos);
  response.headers.set("Cache-Control", "s-maxage=60, stale-while-revalidate=30");
  return response;
}