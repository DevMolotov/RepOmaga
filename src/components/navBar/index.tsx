'use client';

import React from 'react';
import Link from 'next/link';
import { GiMolotov } from 'react-icons/gi';
import { motion } from 'framer-motion'; // Importa o Framer Motion

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className='flex items-center justify-between bg-red-900 px-6 py-4 text-white shadow-lg'
      initial={{ opacity: 0, y: -20 }} // Estado inicial (invisível e deslocado para cima)
      animate={{ opacity: 1, y: 0 }} // Estado final (visível e na posição original)
      transition={{ duration: 0.5 }} // Duração da animação
    >
      <div className='flex items-center space-x-4'>
        <motion.button
          className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 focus:outline-none'
          onClick={() =>
            alert(
              'Você encontrou um easter egg! T2xhLCBub8OjbyBzZXUgYm9tIGNvbSB0ZXh0aW5ob3MgbWFzIHZhbW9zIGzDoSwgcHJpbWVpcmFtZW50ZSBnb3N0YXJpYSBkZSBkaXplciBwb3IgbWltIGUgY3JlaW8gcXVlIHBvIHRvZG9zIG9zIHRyYWluZWVzIGRlIHRlYywgbXVpdG8gb2JyaWdhZG8gcG9yIHR1ZG8gcXVlIG5vcyBwcm9wb3JjaW9uYXJhbSBhdMOpIGFncmEgZGVzdGUgcHJvY2Vzc28gZGUgVHJhaW5lZSwgdG9kb3Mgb3MgZW5zaW5hbWVudG9zIHF1ZSBub3MgZm9yYW0gcGFzc2Fkb3MgZGFyw6NvIG5vIGZ1dHVybywgZnJ1dG9zIHRhbnRvIHBhcmEgYSBFWkVNIHRhbnRvIHBhcmEgbm/Ds3MgbWVzbW9zLCB2b8OjbXMgZmF6ZW0gcGFydGUgZGVzdGEgbm9zc2Egam9ybmFkYSBkZSBhcHJlbmRpemFkby4gKERlc2N1bHBhIGZhemVyIGVtIGJhc2U2NCBhY2hvIGZvaSBvIHF1ZSB2ZWlvIG5hIG1pbmhhIG1lbnRlIGtrS2traykuCnBzOiBnb3N0YXJpYSBkZSBkaXplciBxdWUgZXN0b3UgZGUgbHV0byBwZWxvIGZpbmFkbyBUaG9tw6FzIG91IHBhcmEgb3MgbWFpcyDDrW50aW1vcywgVHJpY28uClByb3YgNDo1IFByb2N1cmUgb2J0ZXIgc2FiZWRvcmlhIGUgZW50ZW5kaW1lbnRvOyBuw6NvIHNlIGVzcXVlc2NhIGRhcyBtaW5oYXMgcGFsYXZyYXMgbmVtIGRlbGFzIHNlIGFmYXN0ZS4='
            )
          }
          whileHover={{ scale: 1.2 }} // Animação ao passar o mouse
          whileTap={{ scale: 0.9 }} // Animação ao clicar
        >
          <GiMolotov className='text-white' size={20} />
        </motion.button>
        <motion.span
          className='text-lg font-semibold'
          initial={{ opacity: 0 }} // Estado inicial (invisível)
          animate={{ opacity: 1 }} // Estado final (visível)
          transition={{ duration: 0.5, delay: 0.2 }} // Duração e atraso da animação
        >
          Matheus Pasquevitz
        </motion.span>
      </div>
      <motion.div
        className='flex space-x-6'
        initial={{ opacity: 0, y: -20 }} // Estado inicial (invisível e deslocado para cima)
        animate={{ opacity: 1, y: 0 }} // Estado final (visível e na posição original)
        transition={{ duration: 0.5, delay: 0.3 }} // Duração e atraso da animação
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }} // Animação ao passar o mouse
          whileTap={{ scale: 0.9 }} // Animação ao clicar
        >
          <Link href='/' className='hover:underline'>
            Início
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='/projetos' className='hover:underline'>
            Projetos
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.a
            href='https://wa.me/5511989088391'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            Contato
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
