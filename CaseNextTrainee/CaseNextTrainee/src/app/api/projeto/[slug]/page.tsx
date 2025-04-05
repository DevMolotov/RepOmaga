"use client";

import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function DetalhesProjeto({ params }: { params: { slug: string } }) {
  interface Projeto {
    id: number;
    title: string;
    description: string;
    slug: string;
  }

  const [projeto, setProjeto] = useState<Projeto | null>(null);

  useEffect(() => {
    async function fetchProjeto() {
      const res = await fetch("/api/projetos");
      const data = await res.json();
      const projetoEncontrado = data.find((p: Projeto) => p.slug === params.slug);
      setProjeto(projetoEncontrado);
    }

    fetchProjeto();
  }, [params.slug]);

  if (!projeto) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">{projeto.title}</h1>
        <p className="text-lg">{projeto.description}</p>
      </main>
      <Footer />
    </div>
  );
}