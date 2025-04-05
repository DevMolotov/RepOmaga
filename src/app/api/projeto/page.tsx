import { NextResponse } from 'next/server';

export async function GET() {
  const projetos = [
    {
      id: 1,
      title: 'Projeto 01',
      description:
        'Criação de um projeto que consistia na montagem de um carrinho utilizando o Arduino.',
      slug: 'projeto-01',
    },
    {
      id: 2,
      title: 'Projeto 02',
      description:
        'Desenvolvimento de um site responsivo utilizando HTML, CSS e JavaScript.',
      slug: 'projeto-02',
    },
  ];

  return NextResponse.json(projetos);
}
