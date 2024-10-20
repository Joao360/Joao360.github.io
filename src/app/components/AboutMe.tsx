import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col sm:flex-row sm:min-h-screen">
      {/* Left Section (Profile Card) */}
      <div className="w-full sm:w-1/3 bg-amber-100 p-12 flex flex-col items-center sm:items-end justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
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
            <h2 className="text-xl font-bold mb-2 text-black">{"João Graça"}</h2>
            <p className="text-gray-500 mb-4">{"Android Engineer"}</p>
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
      <div className="w-full sm:w-2/3 p-12 flex flex-col justify-center bg-white">
        <h1 className="text-6xl font-bold mb-4 text-black">{"Hey!"}</h1>
        <p className="text-xl font-light mb-8 text-black">{"My profile and my projects"}</p>
        <div className="flex space-x-4 mb-8">
          <a href="#curriculo" className="px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue">{"Experience"}</a>
          <a href="#projetos" className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-100">{"Projects"}</a>
        </div>
        <p className="text-gray-600 max-w-md">
          {"Passionate about mobile app development, I've honed my skills in Android app development and led a small mobile team on a React Native project. With a solid foundation in native frameworks, I've successfully delivered top-notch mobile applications."}
        </p>
      </div>
    </section>
  )
}

export default AboutMe