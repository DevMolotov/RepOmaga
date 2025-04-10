import React from 'react';

/**
 * Componente Container2
 * 
 * Estrutura de layout semelhante ao Container original, com foco em uma
 * apresentação pessoal voltada para o gosto musical do autor.
 * 
 * Props:
 * - imageSrc: string - URL da imagem a ser exibida.
 * - altText: string - Texto alternativo para a imagem.
 * - children: ReactNode - Conteúdo adicional que será renderizado dentro do container.
 * - className: string (opcional) - Classes CSS adicionais para customizar o container.
 */
const Container2 = ({ imageSrc, altText, children, className = '' }) => {
  return (
    <div
      className={`ml-8 max-w-4xl rounded-lg bg-red-900 px-6 py-8 text-white ${className}`}
    >
      {/* Cabeçalho com imagem e texto de apresentação musical */}
      <div className='mb-4 flex items-center space-x-4'>
        {/* Imagem de perfil dentro de um contêiner circular */}
        <div className='image-circle'>
          <img
            src={imageSrc}
            alt={altText}
            className='h-20 w-auto rounded-full'
          />
        </div>

        {/* Caixa de texto com uma descrição sobre gosto musical e instrumentos */}
        <div className='textbox max-w-lg rounded-lg bg-red-800 p-4 text-white'>
          <p className='break-words whitespace-pre-wrap'>
            Além da mecânica e da programação, sempre fui apaixonado por música
            desde pequeno meu primeiro instrumento foi uma bateria que quebrei
            no primeiro dia que estava em minhas mãos(Era de brinquedo) hoje
            toco 7 instrumentos desde instrumentos clássicos até alguns mais
            populares utilzados em gêneros como MPB e samba.
          </p>
        </div>
      </div>

      {/* Conteúdo adicional renderizado via children */}
      <div className='content text-center'>{children}</div>
    </div>
  );
};

export default Container2;
