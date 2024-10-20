const NavigationBar = () => {
    return (
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
    )
}

export default NavigationBar