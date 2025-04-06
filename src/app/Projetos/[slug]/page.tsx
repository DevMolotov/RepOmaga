import { Projeto } from '@/types/projetos';
import projetosData from '@/data/projetos.json';
import { notFound } from 'next/navigation';

const projetos = projetosData as Projeto[];

export default async function Page({ params }: { params: { slug: string } }) {
  const param = await params;

  const projeto = projetos.find((p) => p.slug === param.slug);

  if (!projeto) {
    notFound();
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow p-6'>
        <h1 className='mb-4 text-2xl font-bold'>{projeto.title}</h1>
        <p className='text-lg'>{projeto.description}</p>
      </main>
    </div>
  );
}
