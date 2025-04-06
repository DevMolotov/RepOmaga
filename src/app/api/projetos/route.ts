import { NextResponse } from 'next/server';

const projetos = [
  {
    id: 1,
    title: 'Projeto 01',
    description:
      'Criação de um projeto que consistia na montagem de um carro controlado via bluetooth utilizando o Arduino.',
    detailedDescription:
      'Este projeto foi desenvolvido para explorar o uso de Arduino em aplicações práticas. O carro controlado via Bluetooth foi projetado para ser controlado remotamente, utilizando um aplicativo móvel. O projeto envolveu a integração de sensores, motores e um módulo Bluetooth para comunicação.',
    slug: 'projetos-01',
    images: [
      '/images/projeto-01-1.jpg',
      '/images/projeto-01-2.jpg',
      '/images/projeto-01-3.jpg',
    ],
  },
  {
    id: 2,
    title: 'Projeto 02',
    description:
      'Desenvolvimento de um projeto de um carro autônomo utilizando o Arduino.',
    detailedDescription:
      'Este projeto focou na criação de um carro autônomo capaz de navegar por um ambiente sem intervenção humana. Utilizamos sensores ultrassônicos para detectar obstáculos e algoritmos de controle para ajustar a direção e velocidade do carro.',
    slug: 'projetos-02',
    images: ['/images/projeto-02-1.jpg', '/images/projeto-02-2.jpg'],
  },
  {
    id: 3,
    title: 'Projeto 03',
    description:
      'Criação de um braço robótico utilizando motores servo e Arduino.',
    detailedDescription:
      'O braço robótico foi projetado para realizar movimentos precisos utilizando motores servo controlados por um Arduino. Este projeto foi uma introdução à robótica e automação, com foco em controle de movimento e programação.',
    slug: 'projetos-03',
    images: ['/images/projeto-03-1.jpg', '/images/projeto-03-2.jpg'],
  },
  {
    id: 4,
    title: 'Projeto 04',
    description:
      'Criação de um aplicativo de uma feira de estágios utilizando Flutterflow e Firebase.',
    detailedDescription:
      'Este aplicativo foi desenvolvido para facilitar a interação entre empresas e estudantes em uma feira de estágios. Utilizamos Flutterflow para o design e Firebase para o backend, incluindo autenticação e armazenamento de dados.',
    slug: 'projetos-04',
    images: ['/images/projeto-04-1.jpg', '/images/projeto-04-2.jpg'],
  },
  {
    id: 5,
    title: 'Projeto 05',
    description:
      'Criação de um site para uma empresa chamada Powerlini Coqueiros para o gerenciamento de setor utilizando Django.',
    detailedDescription:
      'O site foi desenvolvido para gerenciar as operações internas da empresa Powerlini Coqueiros. Utilizamos Django para criar um sistema robusto e escalável, com funcionalidades como gerenciamento de usuários, relatórios e controle de estoque.',
    slug: 'projetos-05',
    images: ['/images/projeto-05-1.jpg', '/images/projeto-05-2.jpg'],
  },
  {
    id: 6,
    title: 'Projeto 06',
    description:
      'Criação de um portifólio utilizando Next.js e Tailwind CSS (Que coincidência, esse é o projeto!!).',
    detailedDescription:
      'Este portfólio foi desenvolvido para exibir projetos e habilidades utilizando Next.js e Tailwind CSS. O foco foi criar uma interface moderna e responsiva, com animações e navegação intuitiva.',
    slug: 'projetos-06',
    images: ['/images/projeto-06-1.jpg', '/images/projeto-06-2.jpg'],
  },
];

export async function GET(request: Request) {
  return NextResponse.json(projetos);
}
