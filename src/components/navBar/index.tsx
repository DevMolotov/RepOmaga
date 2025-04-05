'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between bg-red-900 px-6 py-4 text-white shadow-lg'>
      <div className='flex items-center space-x-4'>
        <button
          className='h-10 w-10 rounded-full bg-gray-700 focus:outline-none'
          onClick={() => alert('Você encontrou um easter egg! 🎉')}
        ></button>
        <span className='text-lg font-semibold'>Matheus Pasquevitz</span>
      </div>
      <div className='space-x-6'>
        <Link href='/' className='hover:underline'>
          Início
        </Link>
        <Link href='/Projetos' className='hover:underline'>
          Projetos
        </Link>
        <a
          href='https://wa.me/5511989088391'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
