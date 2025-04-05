"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <button
          className="w-10 h-10 bg-gray-700 rounded-full focus:outline-none"
          onClick={() => alert("Você encontrou um easter egg! 🎉")}
        ></button>
        <span className="text-lg font-semibold">Matheus Pasquevitz</span>
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/Projetos" className="hover:underline">Projetos</Link>
        <a
          href="https://wa.me/5511989088391"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
