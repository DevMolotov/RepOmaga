'use client';

import { Projeto } from '@/types/projetos';

// Componente funcional para exibir o conteúdo detalhado de um projeto.
export default function ProjectContent({ projeto }: { projeto: Projeto }) {
  // Variável local para armazenar a URL da imagem expandida. Inicialmente é nula.
  let expandedImage: string | null = null;

  // Função chamada quando uma imagem do projeto é clicada para expandir.
  const handleImageClick = (image: string) => {
    expandedImage = image; // Define a URL da imagem clicada na variável local.
    const modal = document.getElementById('modal'); // Obtém a referência ao elemento modal pelo ID.
    const modalImage = document.getElementById(
      'modal-image'
    ) as HTMLImageElement; // Obtém a referência ao elemento de imagem dentro do modal e força o tipo para HTMLImageElement.

    // Verifica se o modal e a imagem do modal foram encontrados no DOM.
    if (modal && modalImage) {
      modalImage.src = expandedImage; // Define a URL da imagem expandida na fonte da imagem do modal.
      modal.classList.remove('hidden'); // Remove a classe 'hidden' para tornar o modal visível.
      modal.classList.add('flex', 'animate-fadeIn'); // Adiciona as classes 'flex' para usar flexbox e 'animate-fadeIn' para aplicar uma animação de fade-in.
    }
  };

  // Função para fechar o modal de imagem expandida.
  const closeModal = () => {
    const modal = document.getElementById('modal'); // Obtém a referência ao elemento modal pelo ID.
    if (modal) {
      modal.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o modal.
      modal.classList.remove('flex', 'animate-fadeIn'); // Remove as classes 'flex' e 'animate-fadeIn'.
    }
    expandedImage = null; // Reseta a variável da imagem expandida para nulo.
  };

  return (
    <div className='flex min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      {/* Container grande na lateral esquerda para exibir detalhes do projeto */}
      <aside className='animate-slideInLeft w-1/4 bg-gray-800 p-6 text-white'>
        <h2 className='mb-4 text-xl font-bold'>Detalhes do Projeto</h2>
        <p className='mb-2'>Cliente: {projeto.client}</p>
        <p className='mb-2'>Data: {projeto.date}</p>
        <p className='mb-2'>Status: {projeto.status}</p>
      </aside>

      {/* Conteúdo principal do projeto no centro */}
      <main className='animate-fadeIn flex-grow p-6'>
        <h1 className='mb-4 text-2xl font-bold'>{projeto.title}</h1>
        <p className='text-left text-lg'>{projeto.description}</p>
        <p className='text-left text-lg'>{projeto.detailedDescription}</p>
      </main>

      {/* Barra lateral direita com a pilha de imagens do projeto */}
      <aside className='animate-slideInRight h-auto w-1/4 p-6'>
        <div className='space-y-4'>
          {/* Mapeamento do array de imagens do projeto para exibir cada uma */}
          {projeto.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className='h-40 w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 hover:scale-105'
              // Evento de clique para expandir a imagem
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </aside>

      {/* Modal para exibir a imagem em tamanho expandido */}
      <div
        id='modal'
        className='bg-opacity-75 fixed inset-0 z-50 hidden items-center justify-center bg-black'
        // Evento de clique no fundo do modal para fechar
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