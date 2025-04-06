import { NextResponse } from 'next/server';

const projetos = [
  {
    id: 1,
    title: 'Projeto 01',
    description:
      'Criação de um projeto que consistia na montagem de um carro controlado via bluetooth utilizando o Arduino.',
    detailedDescription:
      'Este projeto foi desenvolvido para explorar o uso de Arduino em aplicações práticas. O carro controlado via Bluetooth foi projetado para ser controlado remotamente, utilizando um aplicativo móvel. O projeto envolveu a integração de sensores, motores e um módulo Bluetooth para comunicação.',
    slug: 'projeto-01',
    images: [
      '/images/projeto-01-1.jpg',
      '/images/projeto-01-2.jpg',
      '/images/projeto-01-3.jpg',
    ],
  },
  // ... outros projetos
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) {
    return NextResponse.json(
      { error: 'Projeto não encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(projeto);
}
