"use client";
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

  let expandedImage: string | null = null;

  const handleImageClick = (image: string) => {
    expandedImage = image;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image') as HTMLImageElement;

    if (modal && modalImage) {
      modalImage.src = expandedImage;
      modal.classList.remove('hidden');
      modal.classList.add('flex', 'animate-fadeIn');
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex', 'animate-fadeIn');
    }
    expandedImage = null;
  };

  return (
    <div className='flex min-h-screen'>
      {/* Container Grande Lateral Esquerda */}
      <aside className='w-1/4 bg-gray-800 p-6 text-white animate-slideInLeft'>
        <h2 className='mb-4 text-xl font-bold'>Detalhes do Projeto</h2>
        <p className='mb-2'>Cliente: {projeto.client}</p>
        <p className='mb-2'>Data: {projeto.date}</p>
        <p className='mb-2'>Status: {projeto.status}</p>
      </aside>

      {/* Conteúdo Central */}
      <main className='flex-grow p-6 animate-fadeIn'>
        <h1 className='mb-4 text-2xl font-bold'>{projeto.title}</h1>
        <p className='text-lg text-left'>{projeto.description}</p>
        <p className='text-lg text-left'>{projeto.detailedDescription}</p>
      </main>

      {/* Pilha de Imagens na Direita */}
      <aside className='w-1/4 h-auto p-6 animate-slideInRight'>
        <div className='space-y-4'>
          {projeto.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className='h-40 w-full rounded-lg object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </aside>

      {/* Modal para exibir imagem expandida */}
      <div
        id='modal'
        className='fixed inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-75'
        onClick={closeModal}
      >
        <img
          id='modal-image'
          alt='Imagem expandida'
          className='max-h-full max-w-full rounded-lg animate-zoomIn'
        />
      </div>
    </div>
  );
}
