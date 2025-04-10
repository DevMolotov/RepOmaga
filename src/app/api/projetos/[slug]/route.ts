import { NextResponse } from 'next/server';
import { Projeto } from '@/types/projetos';
import projetoData from '@/data/projetos.json';

const projetos = projetoData as Projeto[];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

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
