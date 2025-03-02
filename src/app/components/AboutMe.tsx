import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const AboutMe = () => {
  return (
    <section id="about" className="sm:min-h-screen flex items-center justify-center bg-white">
      <div className='flex flex-col gap-6 justify-center items-center p-5'>
        <div className="rounded-full overflow-hidden w-32 h-32 sm:w-52 sm:h-52">
          <Image
            alt="Profile photo"
            src="/profile-photo.jpg"
            width={208}
            height={208}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black text-center">{"Hi! I'm João Graça"}</h1>

        <p className="text-gray-500 max-w-3xl text-center text-lg">
          {"Mobile Engineer with "}
          <strong>{"7+ years of experience"}</strong>
          {" across "}
          <strong>{"iOS, Android, and React Native"}</strong>
          {". I find joy building impactful, scalable apps. Leveraging "}
          <strong>{"AI-tools"}</strong>
          {" to boost efficiency and innovation."}
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Joao360"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/joaograca360"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:joao.graca360@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe