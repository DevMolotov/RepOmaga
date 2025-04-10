import Link from 'next/link';
import { Projeto } from '@/types/projetos';
import projetosData from '@/data/projetos.json';

// Importa o tipo 'Projeto' e os dados dos projetos do arquivo JSON.
const projetos = projetosData as Projeto[];

// Componente funcional para a página de Projetos.
export default function ProjetosPage() {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex min-h-screen flex-col'>
      {/* Elemento principal da página que ocupa o espaço restante na tela. */}
      <main className='flex-grow'>
        <div className='p-6'>
          {/* Título da seção de projetos */}
          <h1 className='mb-4 text-2xl font-bold'>Projetos</h1>
          {/* Mapeamento do array de projetos para renderizar cada projeto como um link */}
          {projetos.map((projeto) => (
            <Link key={projeto.id} href={`/projetos/${projeto.slug}`}>
              {/* Div estilizada para cada projeto, funcionando como um cartão clicável */}
              <div className='mb-4 cursor-pointer rounded-lg bg-red-900 p-4 text-white hover:bg-red-800'>
                {/* Título do projeto */}
                <h2 className='text-lg font-semibold'>{projeto.title}</h2>
                {/* Descrição breve do projeto */}
                <p className='text-sm'>{projeto.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}