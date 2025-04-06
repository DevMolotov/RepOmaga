'use client';

import { Projeto } from '@/types/projetos';

export default function ProjectContent({ projeto }: { projeto: Projeto }) {
  let expandedImage: string | null = null;

  const handleImageClick = (image: string) => {
    expandedImage = image;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById(
      'modal-image'
    ) as HTMLImageElement;

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
    <div className='flex min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      {/* Container Grande Lateral Esquerda */}
      <aside className='animate-slideInLeft w-1/4 bg-gray-800 p-6 text-white'>
        <h2 className='mb-4 text-xl font-bold'>Detalhes do Projeto</h2>
        <p className='mb-2'>Cliente: {projeto.client}</p>
        <p className='mb-2'>Data: {projeto.date}</p>
        <p className='mb-2'>Status: {projeto.status}</p>
      </aside>

      {/* Conteúdo Central */}
      <main className='animate-fadeIn flex-grow p-6'>
        <h1 className='mb-4 text-2xl font-bold'>{projeto.title}</h1>
        <p className='text-left text-lg'>{projeto.description}</p>
        <p className='text-left text-lg'>{projeto.detailedDescription}</p>
      </main>

      {/* Pilha de Imagens na Direita */}
      <aside className='animate-slideInRight h-auto w-1/4 p-6'>
        <div className='space-y-4'>
          {projeto.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className='h-40 w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 hover:scale-105'
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </aside>

      {/* Modal para exibir imagem expandida */}
      <div
        id='modal'
        className='bg-opacity-75 fixed inset-0 z-50 hidden items-center justify-center bg-black'
        onClick={closeModal}
      >
        <img
          id='modal-image'
          alt='Imagem expandida'
          className='animate-zoomIn max-h-full max-w-full rounded-lg'
        />
      </div>
    </div>
  );
}
