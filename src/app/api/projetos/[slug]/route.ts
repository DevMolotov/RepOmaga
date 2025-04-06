import { NextResponse } from 'next/server';

// Dados dos projetos armazenados em memória
const projetos = [
  {
    slug: 'projeto-1',
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    client: 'Cliente A',
    date: '2025-04-01',
    status: 'Concluído',
    images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
  },
  {
    slug: 'projeto-2',
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    client: 'Cliente B',
    date: '2025-03-15',
    status: 'Em andamento',
    images: ['/image4.jpg', '/image5.jpg', '/image6.jpg'],
  },
  // Adicione mais projetos conforme necessário
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Busca o projeto pelo slug
  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) {
    return NextResponse.json(
      { error: 'Projeto não encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(projeto);
}
