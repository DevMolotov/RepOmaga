'use client';

import React from 'react';
import Link from 'next/link';
import { GiMolotov } from 'react-icons/gi';
import { motion } from 'framer-motion'; // Importa o Framer Motion para animações

// Configuração de animação para um efeito de onda (não utilizado no código atual)
const waveAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

/**
 * Componente Navbar
 * 
 * Barra de navegação animada com links e um botão com easter egg.
 * Utiliza Framer Motion para animações interativas e ícones do react-icons.
 */
const Navbar: React.FC = () => {
  return (
    <motion.nav
      className='flex items-center justify-between bg-red-900 px-6 py-4 text-white shadow-lg'
      initial={{ opacity: 0, y: -20 }} // Início invisível e acima da posição
      animate={{ opacity: 1, y: 0 }}    // Animação de entrada para visibilidade
      transition={{ duration: 0.5 }}    // Duração da animação de entrada
    >
      {/* Lado esquerdo: ícone/molotov + nome */}
      <div className='flex items-center space-x-4'>
        {/* Botão com ícone que aciona um alert com uma mensagem codificada (easter egg) */}
        <motion.button
          className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 focus:outline-none'
          onClick={() =>
            alert(
              'Você encontrou um easter egg! T2xhLCBub8OjbyBzZXUgYm9tIGNvbSB0ZXh0aW5ob3MgbWFzIHZhbW9zIGzDoSwgcHJpbWVpcmFtZW50ZSBnb3N0YXJpYSBkZSBkaXplciBwb3IgbWltIGUgY3JlaW8gcXVlIHBvIHRvZG9zIG9zIHRyYWluZWVzIGRlIHRlYywgbXVpdG8gb2JyaWdhZG8gcG9yIHR1ZG8gcXVlIG5vcyBwcm9wb3JjaW9uYXJhbSBhdMOpIGFncmEgZGVzdGUgcHJvY2Vzc28gZGUgVHJhaW5lZSwgdG9kb3Mgb3MgZW5zaW5hbWVudG9zIHF1ZSBub3MgZm9yYW0gcGFzc2Fkb3MgZGFyw6NvIG5vIGZ1dHVybywgZnJ1dG9zIHRhbnRvIHBhcmEgYSBFWkVNIHRhbnRvIHBhcmEgbm/Ds3MgbWVzbW9zLCB2b8OjbXMgZmF6ZW0gcGFydGUgZGVzdGEgbm9zc2Egam9ybmFkYSBkZSBhcHJlbmRpemFkby4gKERlc2N1bHBhIGZhemVyIGVtIGJhc2U2NCBhY2hvIGZvaSBvIHF1ZSB2ZWlvIG5hIG1pbmhhIG1lbnRlIGtrS2traykuCnBzOiBnb3N0YXJpYSBkZSBkaXplciBxdWUgZXN0b3UgZGUgbHV0byBwZWxvIGZpbmFkbyBUaG9tw6FzIG91IHBhcmEgb3MgbWFpcyDDrW50aW1vcywgVHJpY28uClByb3YgNDo1IFByb2N1cmUgb2J0ZXIgc2FiZWRvcmlhIGUgZW50ZW5kaW1lbnRvOyBuw6NvIHNlIGVzcXVlc2NhIGRhcyBtaW5oYXMgcGFsYXZyYXMgbmVtIGRlbGFzIHNlIGFmYXN0ZS4= (Se não conseguir entender chama a Heloísa).'
            )
            //Se quiser ajuda para traduzir ou decodificar a mensagem do easter egg depois da entrega, é só chamar! 😄
          }
          whileHover={{ scale: 1.2 }} // Animação ao passar o mouse
          whileTap={{ scale: 0.9 }}   // Animação ao clicar
        >
          <GiMolotov className='text-white' size={20} />
        </motion.button>

        {/* Nome do autor com animação de entrada */}
        <motion.span
          className='text-lg font-semibold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Matheus Pasquevitz
        </motion.span>
      </div>

      {/* Lado direito: Links de navegação */}
      <motion.div
        className='flex space-x-6'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Link para a página inicial */}
        <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }}>
          <Link href='/' className='hover:underline'>
            Início
          </Link>
        </motion.div>

        {/* Link para a seção de projetos */}
        <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }}>
          <Link href='/projetos' className='hover:underline'>
            Projetos
          </Link>
        </motion.div>

        {/* Link externo para contato via WhatsApp */}
        <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }}>
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
