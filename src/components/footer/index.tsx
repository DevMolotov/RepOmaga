import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Molotov™ Todos os direitos reservados.</p>
        <nav className="flex space-x-4 my-4 md:my-0">
          <a href="/sobre" className="hover:underline">Sobre</a>
          <a href="/contato" className="hover:underline">Contato</a>
          <a href="/privacidade" className="hover:underline">Privacidade</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
