// foi apenas um teste que não deu certo, vou estudar mais depois da entrega do case.

'use client';

import React from 'react';

/**
 * Tipagem das props do componente Modal.
 * - expandedImage: string | null - URL da imagem a ser exibida (ou null para não exibir nada).
 * - onClose: () => void - Função chamada ao clicar fora da imagem (para fechar o modal).
 */
interface ModalProps {
  expandedImage: string | null;
  onClose: () => void;
}

/**
 * Componente Modal
 * 
 * Exibe uma imagem em destaque em tela cheia quando `expandedImage` não é nulo.
 * Fecha o modal ao clicar fora da imagem.
 */
const Modal: React.FC<ModalProps> = ({ expandedImage, onClose }) => {
  if (!expandedImage) return null; // Não renderiza nada se não houver imagem

  return (
    <div
      className='bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black'
      onClick={onClose} // Fecha o modal ao clicar no fundo preto
    >
      <img
        src={expandedImage}
        alt='Imagem expandida'
        className='animate-zoomIn max-h-full max-w-full rounded-lg' // Animação personalizada (presumida no CSS)
      />
    </div>
  );
};

export default Modal;
