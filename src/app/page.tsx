import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <div className="text-2xl font-bold">João Graça</div>
        <nav className="flex space-x-8">
          <a href="#about" className="text-lg hover:underline">About</a>
          <a href="#experience" className="text-lg hover:underline">Experience</a>
        </nav>
        <a href="#contact" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Contact me</a>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-12 space-y-8">
        {/* Name and Photo */}
        <h1 className="text-6xl font-bold">JOÃO GRAÇA</h1>
        {/* Name and Photo */}
        <h2 className="text-4xl font-bold">ANDROID ENGINEER</h2>

        {/* Profile Picture */}
        <div className="rounded-full overflow-hidden w-48 h-48">
          <Image
            alt="Profile photo"
            src="/profile-photo.jpg"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-center max-w-2xl text-lg">
          Hi! I’m João, an Android Engineer with a passion for building intuitive and impactful mobile applications. 
          With experience in multiple industries, I thrive on transforming ideas into reality through technology.
        </p>
      </main>

      {/* Company Logos */}
      <section id="experience" className="py-12 bg-gray-800">
        <h2 className="text-3xl text-center font-semibold mb-8">Where I've Worked</h2>
        <div className="flex justify-center space-x-8">
          <Image
            src="/company1-logo.png"
            alt="Company 1 Logo"
            width={100}
            height={100}
          />
          <Image
            src="/company2-logo.png"
            alt="Company 2 Logo"
            width={100}
            height={100}
          />
          <Image
            src="/company3-logo.png"
            alt="Company 3 Logo"
            width={100}
            height={100}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-gray-700">
        <h2 className="text-3xl text-center font-semibold mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Project One</h3>
            <p className="text-gray-400">A brief description of the first project goes here. It explains the tech stack and the impact it had.</p>
          </div>
          
          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Project Two</h3>
            <p className="text-gray-400">A brief description of the second project goes here. This could highlight a specific challenge solved.</p>
          </div>

          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 py-6 text-center">
        <p className="text-gray-500">&copy; 2024 João Graça. All rights reserved.</p>
      </footer>
    </div>
  );
};
