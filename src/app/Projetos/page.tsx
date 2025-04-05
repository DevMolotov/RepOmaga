"use client";

import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projetos() {
  interface Projeto {
    id: number;
    title: string;
    description: string;
    slug: string;
  }

  const [projetos, setProjetos] = useState<Projeto[]>([]);

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
      }
    }

    fetchProjetos();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  );
}