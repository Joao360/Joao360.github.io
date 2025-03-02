const NavigationBar = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md w-full">
            <div className="text-xl font-bold text-black">{"João Graça"}</div>
            <nav className="flex space-x-6 text-gray-700">
                <a href="#about" className="hover:text-gray-900">{"About me"}</a>
                <a href="#experience" className="hover:text-gray-900">{"Experience"}</a>
            </nav>
            
        </header>
    )
}

export default NavigationBar