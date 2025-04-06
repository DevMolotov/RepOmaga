'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/navBar';

interface Projeto {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  images?: string[];
}

export default function ProjetoDetalhes() {
  const params = useParams();
  const slug = params?.slug;
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError('Slug não encontrado.');
      return;
    }

    async function fetchProjeto() {
      try {
        const res = await fetch(`/api/projetos/${slug}`);
        if (!res.ok) {
          throw new Error(
            `Erro ao buscar os detalhes do projeto: ${res.status}`
          );
        }
        const data = await res.json();

        setProjeto(data);
      } catch (error) {
        console.error('Erro ao buscar projeto:', error);
        setError('Não foi possível carregar os detalhes do projeto.');
      }
    }

    fetchProjeto();
  }, [slug]);

  if (error) {
    return (
      <div className='flex min-h-screen flex-col'>
        <Navbar />
        <main className='flex-grow p-6'>
          <p className='text-red-500'>{error}</p>
        </main>
      </div>
    );
  }

  if (!projeto) {
    return (
      <div className='flex min-h-screen flex-col'>
        <Navbar />
        <main className='flex-grow p-6'>
          <p>Carregando...</p>
        </main>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow p-6'>
        <h1 className='mb-4 text-2xl font-bold'>{projeto.title}</h1>
        <p className='mb-4'>{projeto.description}</p>
        <div className='rounded-lg bg-red-900 p-4 text-white'>
          <h2 className='mb-2 text-lg font-semibold'>Descrição Detalhada</h2>
          <p>{projeto.detailedDescription}</p>
        </div>
        {projeto.images && projeto.images.length > 0 && (
          <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {projeto.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagem ${index + 1}`}
                className='mb-4 rounded-lg'
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
