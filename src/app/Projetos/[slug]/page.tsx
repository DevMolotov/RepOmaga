import { Projeto } from '@/types/projetos';
import projetosData from '@/data/projetos.json';
import { notFound } from 'next/navigation';
import ProjetosContent from './ProjetosContent';

const projetos = projetosData as Projeto[];

export default async function Page({ params }: { params: { slug: string } }) {
  const param = await params;

  const projeto = projetos.find((p) => p.slug === param.slug);

  if (!projeto) {
    notFound();
  }

  return <ProjetosContent projeto={projeto} />;
}
