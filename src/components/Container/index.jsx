import React from 'react';

const Container = ({ imageSrc, altText, children, className = '' }) => {
  return (
    <div
      className={`ml-8 max-w-4xl rounded-lg bg-red-900 px-6 py-8 text-white ${className}`}
    >
      <div className='mb-4 flex items-center space-x-4'>
        <div className='image-circle'>
          <img
            src={imageSrc}
            alt={altText}
            className='h-20 w-auto rounded-full'
          />
        </div>
        <div className='textbox max-w-lg rounded-lg bg-red-800 p-4 text-white'>
          <p className='break-words whitespace-pre-wrap'>
            Olá meu nome é Matheus Pasquevitz Souza tenho 18 anos e faço parte
            do programa de Trainee da EJEM, este é meu portifólio onde poderá
            encontrar alguns projetos que já fiz ou participei e outras
            curiosidades sobre minha pessoa.
          </p>
        </div>
      </div>
      <div className='content text-center'>{children}</div>
    </div>
  );
};

export default Container;
