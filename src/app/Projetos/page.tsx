import Link from 'next/link';
import { Projeto } from '@/types/projetos';
import projetosData from '@/data/projetos.json';

const projetos = projetosData as Projeto[];
export default function ProjetosPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow'>
        <div className='p-6'>
          <h1 className='mb-4 text-2xl font-bold'>Projetos</h1>
          {projetos.map((projeto) => (
            <Link key={projeto.id} href={`/projetos/${projeto.slug}`}>
              <div className='mb-4 cursor-pointer rounded-lg bg-red-900 p-4 text-white hover:bg-red-800'>
                <h2 className='text-lg font-semibold'>{projeto.title}</h2>
                <p className='text-sm'>{projeto.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
