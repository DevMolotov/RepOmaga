import { NextResponse } from 'next/server';
import { Projeto } from '@/types/projetos';
import projetoData from '@/data/projetos.json';

// Importa o tipo 'Projeto' e os dados dos projetos do arquivo JSON.
const projetos = projetoData as Projeto[];

// Função assíncrona para lidar com requisições HTTP GET nesta rota da API dinâmica,
// que recebe um parâmetro 'slug' na URL para identificar um projeto específico.
export async function GET(
  request: Request, // Objeto representando a requisição HTTP recebida.
  { params }: { params: { slug: string } } // Objeto contendo os parâmetros da rota, neste caso, o 'slug'.
) {
  // Aguarda a resolução da promessa dos parâmetros da rota.
  const param = await params;

  // Procura no array de projetos um projeto cujo 'slug' corresponda ao 'slug' recebido nos parâmetros.
  const projeto = projetos.find((p) => p.slug === param.slug);

  // Se nenhum projeto com o 'slug' correspondente for encontrado,
  // retorna uma resposta JSON com uma mensagem de erro e o status HTTP 404 (Não Encontrado).
  if (!projeto) {
    return NextResponse.json(
      { error: 'Projeto não encontrado' },
      { status: 404 }
    );
  }

  // Se um projeto for encontrado, retorna uma resposta JSON contendo os dados desse projeto.
  return NextResponse.json(projeto);
}
