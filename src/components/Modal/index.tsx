'use client';

import React from 'react';

interface ModalProps {
  expandedImage: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ expandedImage, onClose }) => {
  if (!expandedImage) return null;

  return (
    <div
      className='bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black'
      onClick={onClose}
    >
      <img
        src={expandedImage}
        alt='Imagem expandida'
        className='animate-zoomIn max-h-full max-w-full rounded-lg'
      />
    </div>
  );
};

export default Modal;