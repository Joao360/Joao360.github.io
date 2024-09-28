const Experience = () => {
    return <section id="experience" className="relative min-h-screen py-20 bg-gray-100 flex flex-col justify-center">
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
    </section>;
  }

  export default Experience
  