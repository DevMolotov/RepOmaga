import { NextResponse } from 'next/server';
import projetosData from '@/data/projetos.json';

// Função assíncrona para lidar com requisições HTTP GET nesta rota da API.
export async function GET(request: Request) {
  // Retorna uma resposta JSON contendo os dados dos projetos importados do arquivo 'projetos.json'.
  // 'NextResponse.json()' é uma função do Next.js para criar uma resposta HTTP com o corpo formatado como JSON.
  return NextResponse.json(projetosData);
}