import React from 'react';

const Container2 = ({ imageSrc, altText, children, className = '' }) => {
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
            Além da mecânica e da programação, sempre fui apaixonado por música
            desde pequeno meu primeiro instrumento foi uma bateria que quebrei
            no primeiro dia que estava em minhas mãos(Era de brinquedo) hoje
            toco 7 instrumentos desde instrumentos clássicos até alguns mais
            populares utilzados em gêneros como MPB e samba.
          </p>
        </div>
      </div>
      <div className='content text-center'>{children}</div>
    </div>
  );
};

export default Container2;
