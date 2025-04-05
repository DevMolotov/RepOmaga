"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Projeto {
  id: number;
  title: string;
  description: string;
  slug: string;
}

export default function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const res = await fetch("/api/projetos");
        if (!res.ok) {
          throw new Error("Erro ao buscar os projetos");
        }
        const data = await res.json();
        setProjetos(data);
      } catch (error) {
        console.error(error);
        setError("Não foi possível carregar os projetos.");
      }
    }

    fetchProjetos();
  }, []);

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Projetos</h1>
          {projetos.map((projeto) => (
            <Link key={projeto.id} href={`/projeto/${projeto.slug}`}>
              <div className="bg-red-900 text-white p-4 rounded-lg hover:bg-red-800 cursor-pointer mb-4">
                <h2 className="text-lg font-semibold">{projeto.title}</h2>
                <p className="text-sm">{projeto.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}