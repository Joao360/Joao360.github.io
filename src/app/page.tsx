// pages/index.js

import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center p-6 bg-background shadow-md fixed w-full z-10">
        <div className="text-xl font-bold">João Graça</div>
        <nav className="flex space-x-6 text-gray-700">
          <a href="#about" className="hover:text-gray-900">Sobre Mim</a>
          <a href="#experience" className="hover:text-gray-900">Currículo</a>
          <a href="#projects" className="hover:text-gray-900">Projetos</a>
        </nav>
        <a href="#contact" className="px-4 py-2 bg-blue text-white rounded hover:bg-blue">
          Contato
        </a>
      </header>

      {/* First Section - Profile */}
      <section id="about" className="flex min-h-screen">
        {/* Left Section (Profile Card) */}
        <div className="w-1/3 bg-beige p-12 flex flex-col items-end justify-center">
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-36 h-36 mb-6">
                <Image
                  alt="Profile photo"
                  src="/profile-photo.jpg"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">João Graça</h2>
              <p className="text-gray-500 mb-4">Android Engineer</p>
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Main Content) */}
        <div className="w-2/3 p-12 flex flex-col justify-center bg-background">
          <h1 className="text-6xl font-bold mb-4">Olá</h1>
          <p className="text-xl font-light mb-8">Meu perfil e meus projetos</p>
          <div className="flex space-x-4 mb-8">
            <a href="#curriculo" className="px-6 py-3 bg-blue text-white rounded hover:bg-blue">Currículo</a>
            <a href="#projetos" className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-100">Projetos</a>
          </div>
          <p className="text-gray-600 max-w-md">
            Sou um Android Engineer apaixonado por desenvolver aplicações móveis que transformam ideias em realidade.
            Sempre buscando simplicidade e impacto nos meus projetos.
          </p>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="relative min-h-screen py-20 bg-gray-100 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-center mb-12">Experiência</h2>
        
        <div className="container mx-auto relative">
          {/* Timeline */}
          <div className="relative border-l-4 border-green-500 pl-12">
            {/* Experience 1 */}
            <div className="mb-12">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-green-500 -ml-2"></div>
              <h3 className="text-xl font-semibold text-green-600">2023 - Presente</h3>
              <p className="text-lg font-bold">HOP! - Diretor de Artes</p>
              <p className="text-gray-600">Responsável por criar soluções visuais criativas...</p>
            </div>
            
            {/* Experience 2 */}
            <div className="mb-12">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-green-500 -ml-2"></div>
              <h3 className="text-xl font-semibold text-green-600">2018 - 2023</h3>
              <p className="text-lg font-bold">Digital Centro - Diretor de Artes</p>
              <p className="text-gray-600">Criação e gestão de projetos de design...</p>
            </div>

            {/* Experience 3 */}
            <div className="mb-12">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-green-500 -ml-2"></div>
              <h3 className="text-xl font-semibold text-green-600">2015 - 2018</h3>
              <p className="text-lg font-bold">WISBOOM - Assistente de Arte</p>
              <p className="text-gray-600">Apoio às atividades criativas e gráficas...</p>
            </div>

            {/* Experience 4 */}
            <div className="mb-12">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-green-500 -ml-2"></div>
              <h3 className="text-xl font-semibold text-green-600">2013 - 2015</h3>
              <p className="text-lg font-bold">GDV - UI/UX Designer</p>
              <p className="text-gray-600">Desenvolvimento de interfaces de usuário e design de experiências...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer or Contact Section */}
      <footer id="contact" className="py-10 flex items-center justify-center bg-gray-200">
        <div>
          <p>&copy; 2024 João Graça. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
