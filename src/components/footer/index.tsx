import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-red-900 py-6 text-white'>
      <div className='container mx-auto flex flex-col items-center justify-between px-4 md:flex-row'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Molotov™ Todos os direitos
          reservados.
        </p>
        <nav className='my-4 flex space-x-4 md:my-0'>
          <a href='/sobre' className='hover:underline'>
            Sobre
          </a>
          <a href='/contato' className='hover:underline'>
            Contato
          </a>
          <a href='/privacidade' className='hover:underline'>
            Privacidade
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
