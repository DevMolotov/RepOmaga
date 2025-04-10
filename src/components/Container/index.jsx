import React from 'react';

/**
 * Componente Container
 * 
 * Um componente de layout reutilizável que exibe uma imagem de perfil,
 * uma caixa de texto de apresentação e um espaço para conteúdo adicional.
 * 
 * Props:
 * - imageSrc: string - URL da imagem a ser exibida.
 * - altText: string - Texto alternativo para a imagem.
 * - children: ReactNode - Conteúdo adicional que será renderizado dentro do container.
 * - className: string (opcional) - Classes CSS adicionais para customizar o container.
 */
const Container = ({ imageSrc, altText, children, className = '' }) => {
  return (
    <div
      className={`ml-8 max-w-4xl rounded-lg bg-red-900 px-6 py-8 text-white ${className}`}
    >
      {/* Cabeçalho com imagem e texto de apresentação */}
      <div className='mb-4 flex items-center space-x-4'>
        {/* Imagem de perfil dentro de um contêiner circular */}
        <div className='image-circle'>
          <img
            src={imageSrc}
            alt={altText}
            className='h-20 w-auto rounded-full'
          />
        </div>

        {/* Caixa de texto com uma breve descrição */}
        <div className='textbox max-w-lg rounded-lg bg-red-800 p-4 text-white'>
          <p className='break-words whitespace-pre-wrap'>
            Olá meu nome é Matheus Pasquevitz Souza tenho 18 anos e faço parte
            do programa de Trainee da EJEM, este é meu portifólio onde poderá
            encontrar alguns projetos que já fiz ou participei e outras
            curiosidades sobre minha pessoa.
          </p>
        </div>
      </div>

      {/* Conteúdo adicional renderizado via children */}
      <div className='content text-center'>{children}</div>
    </div>
  );
};

export default Container;
