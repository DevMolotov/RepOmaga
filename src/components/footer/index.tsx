'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Importa o Framer Motion

const Footer: React.FC = () => {
  return (
    <motion.footer
      className='bg-red-900 py-6 text-white'
      initial={{ opacity: 0, y: 20 }} // Estado inicial (invisível e deslocado para baixo)
      animate={{ opacity: 1, y: 0 }} // Estado final (visível e na posição original)
      transition={{ duration: 0.5 }} // Duração da animação
    >
      <div className='container mx-auto flex flex-col items-center justify-between px-4 md:flex-row'>
        <motion.p
          className='text-sm'
          whileHover={{ scale: 1.1 }} // Animação ao passar o mouse
          whileTap={{ scale: 0.9 }} // Animação ao clicar
        >
          &copy; {new Date().getFullYear()} Molotov™ Todos os direitos
          reservados.
        </motion.p>
        <motion.nav
          className='my-4 flex space-x-4 md:my-0'
          initial={{ opacity: 0 }} // Estado inicial (invisível)
          animate={{ opacity: 1 }} // Estado final (visível)
          transition={{ duration: 0.5, delay: 0.2 }} // Duração e atraso da animação
        >
          <motion.a
            href='/sobre'
            className='hover:underline'
            whileHover={{ scale: 1.1, rotate: 3 }} // Aumenta e gira ao passar o mouse
            whileTap={{ scale: 0.9 }} // Reduz o tamanho ao clicar
          >
            Sobre
          </motion.a>
          <motion.a
            href='/contato'
            className='hover:underline'
            whileHover={{ scale: 1.1, rotate: 3 }} // Aumenta e gira ao passar o mouse
            whileTap={{ scale: 0.9 }} // Reduz o tamanho ao clicar
          >
            Contato
          </motion.a>
          <motion.a
            href='/privacidade'
            className='hover:underline'
            whileHover={{ scale: 1.1, rotate: 3 }} // Aumenta e gira ao passar o mouse
            whileTap={{ scale: 0.9 }} // Reduz o tamanho ao clicar
          >
            Privacidade
          </motion.a>
        </motion.nav>
      </div>
    </motion.footer>
  );
};

export default Footer;
