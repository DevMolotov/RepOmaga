import { Projeto } from '@/types/projetos';
import projetosData from '@/data/projetos.json';
import { notFound } from 'next/navigation';
import ProjetosContent from './ProjetosContent';

// Importa o tipo 'Projeto' e os dados dos projetos do arquivo JSON.
const projetos = projetosData as Projeto[];

// Componente assíncrono para a página de detalhes de um projeto específico.
// Recebe os parâmetros da rota, incluindo o 'slug' do projeto.
export default async function Page({ params }: { params: { slug: string } }) {
  // Aguarda a resolução da promessa dos parâmetros da rota.
  const param = await params;

  // Procura no array de projetos um projeto cujo 'slug' corresponda ao 'slug' recebido nos parâmetros.
  const projeto = projetos.find((p) => p.slug === param.slug);

  // Se nenhum projeto com o 'slug' correspondente for encontrado, a função 'notFound()' do Next.js é chamada,
  // o que renderiza uma página de erro 404.
  if (!projeto) {
    notFound();
  }

  // Se um projeto for encontrado, o componente 'ProjetosContent' é renderizado,
  // passando o objeto do projeto encontrado como uma prop chamada 'projeto'.
  return <ProjetosContent projeto={projeto} />;
}