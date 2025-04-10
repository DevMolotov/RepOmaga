import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';

// Configuração da fonte Geist Sans para ser usada na aplicação
const geistSans = Geist({
  variable: '--font-geist-sans', // Define uma variável CSS para a fonte
  subsets: ['latin'], // Especifica que apenas o subset latino dos caracteres será incluído
});

// Configuração da fonte Geist Mono para ser usada na aplicação
const geistMono = Geist_Mono({
  variable: '--font-geist-mono', // Define uma variável CSS para a fonte monoespaçada
  subsets: ['latin'], // Especifica que apenas o subset latino dos caracteres será incluído
});

// Definição dos metadados da página, como título e descrição
export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de Matheus Pasquevitz',
};

// Componente funcional RootLayout, que envolve toda a estrutura da página
export default function RootLayout({
  children, // Propriedade que representa o conteúdo das páginas filhas
}: {
  children: React.ReactNode; // Define o tipo da propriedade children como um nó React
}) {
  return (
    <html lang='pt-BR'> {/* Define o idioma da página como Português do Brasil */}
      <body className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white ${geistSans.variable} ${geistMono.variable}`}>
        {/* Componente da barra de navegação */}
        <Navbar />
        {/* Elemento principal da página, que ocupa o espaço restante */}
        <main className='flex-grow'>{children}</main>
        {/* Componente do rodapé */}
        <Footer />
      </body>
    </html>
  );
}