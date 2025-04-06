import { NextResponse } from 'next/server';
import { Projeto } from '@/types/projetos';
import projetosData from '@/data/projetos.json';

const projetos = projetosData as Projeto[];
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const param = await params;

  const projeto = projetos.find((p) => p.slug === param.slug);

  if (!projeto) {
    return NextResponse.json(
      { error: 'Projeto não encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(projeto);
}
