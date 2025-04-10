'use client';

import '../styles/animations.css';
import { useState } from 'react';
import Container from '../components/Container';
import Container2 from '../components/Container2';

export default function Home() {
  // Estado para armazenar a URL da imagem selecionada para exibição no modal. Inicialmente é nulo.
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Função que é chamada quando uma imagem do carrossel é clicada. Define a URL da imagem no estado `selectedImage`.
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  // Função para fechar o modal de imagem ampliada. Define o estado `selectedImage` de volta para nulo.
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='flex min-h-screen flex-col space-y-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-10'>
      {/* Container superior alinhado à esquerda */}
      <div className='animate-fadeIn flex w-full justify-start'>
        <Container imageSrc='/Fotoperfil.jpeg' altText='Foto de perfil'>
          <p className='text-left break-words'>
            "Não acredite nas mentiras dele" -Cellbit 2018.
          </p>
        </Container>
      </div>

      {/* Container que engloba o carrossel de imagens e o container central */}
      <div className='flex w-full'>
        {/* Carrossel de imagens com rolagem horizontal */}
        <div className='animate-fadeIn mr-112 ml-8 flex h-60 w-1/2 justify-start'>
          <div className='flex w-full space-x-4 overflow-x-auto rounded-lg bg-gray-800 p-4'>
            {/* Mapeamento do array de URLs de imagens para renderizar cada imagem */}
            {[
              '/cam.jpeg',
              '/Trainees.jpeg',
              '/Foto  perfil.jpeg',
              '/namorada.jpeg',
              '/py.jpeg',
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Foto ${index + 1}`}
                className='h-40 w-40 cursor-pointer rounded-lg object-cover transition-transform duration-300 hover:scale-105'
                // Evento de clique para exibir a imagem em tamanho maior
                onClick={() => handleImageClick(src)}
              />
            ))}
          </div>
        </div>

        {/* Container central alinhado à direita, exibindo informações dos colegas */}
        <div className='animate-fadeIn flex w-1/4 justify-end'>
          <div className='mr-8 ml-20 h-auto rounded-lg bg-red-900 p-6 text-white'>
            {/* Título da seção de colegas do Case 01 */}
            <div className='col-span-2 mb-4 flex items-center justify-center rounded-lg bg-red-800 p-4 text-white'>
              <p className='text-center font-semibold'>
                Colegas de projeto Case 01
              </p>
            </div>
            {/* Grid para organizar as informações dos colegas */}
            <div className='grid grid-cols-2 items-center gap-4'>
              {/* Container para exibir informações de Thomas Barbosa */}
              <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
                <img
                  src='/thomas.jpeg'
                  alt='Imagem 1'
                  className='mb-2 h-20 w-20 rounded-full object-cover'
                />
                <p className='text-center font-semibold'>Thomas Barbosa</p>
              </div>
              {/* Container para exibir informações de Vinícius Santana */}
              <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
                <img
                  src='/vinicius.jpeg'
                  alt='Imagem 2'
                  className='mb-2 h-20 w-20 rounded-full object-cover'
                />
                <p className='text-center font-semibold'>Vinícius Santana</p>
              </div>
              {/* Título da seção de colegas do Case 02 */}
              <div className='col-span-2 flex items-center justify-center rounded-lg bg-red-800 p-4 text-white'>
                <p className='text-center font-semibold'>
                  Colegas de projeto Case 02
                </p>
              </div>
              {/* Container para exibir informações de Ana Julia Palmisciano */}
              <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
                <img
                  src='/ana.jpeg'
                  alt='Imagem 3'
                  className='mb-2 h-20 w-20 rounded-full object-cover'
                />
                <p className='text-center font-semibold'>
                  Ana Julia Palmisciano
                </p>
              </div>
              {/* Container para exibir informações de Vitor Hashimoto */}
              <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
                <img
                  src='/hashimoto.jpeg'
                  alt='Imagem 4'
                  className='mb-2 h-20 w-20 rounded-full object-cover'
                />
                <p className='text-center font-semibold'>Vitor Hashimoto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal condicionalmente renderizado para exibir a imagem em tamanho maior */}
      {selectedImage && (
        <div
          className='bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black'
          // Evento de clique no fundo do modal para fechar o modal
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt='Imagem expandida'
            className='max-h-full max-w-full rounded-lg'
          />
        </div>
      )}

      {/* Container inferior alinhado à esquerda */}
      <div className='animate-fadeIn mb-8 flex w-full justify-start'>
        <Container2 imageSrc='/Curiosidade.jpeg' altText='Imagem inferior'>
          <p className='text-left break-words'>"Os que dançavam foram julgados loucos pelos que não podiam ouvir a música" -Friedrich Nietzsche.</p>
        </Container2>
      </div>
    </div>
  );
}