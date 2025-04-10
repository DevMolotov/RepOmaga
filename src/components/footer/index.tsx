'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Importa o Framer Motion para animações
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa ícones das redes sociais

/**
 * Componente Footer
 * 
 * Renderiza um rodapé animado utilizando Framer Motion.
 * Inclui uma mensagem de direitos autorais e ícones com links para redes sociais.
 */
const Footer: React.FC = () => {
  return (
    <motion.footer
      className='bg-red-900 py-6 text-white'
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisível e levemente deslocado para baixo
      animate={{ opacity: 1, y: 0 }}   // Animação para aparecer suavemente na posição original
      transition={{ duration: 0.5 }}   // Duração da animação
    >
      {/* Container responsivo do conteúdo do rodapé */}
      <div className='container mx-auto flex flex-col items-center justify-between px-4 md:flex-row'>
        
        {/* Texto de direitos autorais com animações de interação */}
        <motion.p
          className='text-sm'
          whileHover={{ scale: 1.1 }} // Aumenta levemente ao passar o mouse
          whileTap={{ scale: 0.9 }}   // Diminui levemente ao clicar
        >
          &copy; {new Date().getFullYear()} Molotov™ Todos os direitos
          reservados.
        </motion.p>

        {/* Navegação com ícones das redes sociais e animações */}
        <motion.nav
          className='my-4 flex space-x-4 md:my-0'
          initial={{ opacity: 0 }} // Começa invisível
          animate={{ opacity: 1 }} // Torna visível com animação
          transition={{ duration: 0.5, delay: 0.2 }} // Anima com pequeno atraso
        >
          {/* Instagram */}
          <motion.a
            href='https://www.instagram.com/pasquevitz?igsh=dXZqeWt3a2hyc2tr'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
            whileHover={{ scale: 1.2, rotate: 5 }} // Aumenta e gira ao passar o mouse
            whileTap={{ scale: 0.9 }} // Diminui ao clicar
          >
            <FaInstagram size={24} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href='https://www.linkedin.com/in/matheus-pasquevitz-b37a20278/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href='https://github.com/DevMolotov'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
        </motion.nav>
      </div>
    </motion.footer>
  );
};

export default Footer;
