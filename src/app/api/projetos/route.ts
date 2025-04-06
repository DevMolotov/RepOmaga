import { NextResponse } from 'next/server';
import projetosData from '@/data/projetos.json';

export async function GET(request: Request) {
  return NextResponse.json(projetosData);
}
