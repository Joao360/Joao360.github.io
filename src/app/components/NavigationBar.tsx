const NavigationBar = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-10">
            <div className="text-xl font-bold text-black">{"João Graça"}</div>
            <nav className="flex space-x-6 text-gray-700">
                <a href="#about" className="hover:text-gray-900">{"About me"}</a>
                <a href="#experience" className="hover:text-gray-900">{"Experience"}</a>
                <a href="#projects" className="hover:text-gray-900">{"Projects"}</a>
            </nav>
            <a href="#contact" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue">
                {"Contact"}
            </a>
        </header>
    )
}

export default NavigationBar