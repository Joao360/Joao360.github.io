import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-5 space-y-6">
      <header className="flex justify-between items-center text-white w-full">
        <div className="text-2xl">João Graça</div>
        <nav className="flex space-x-4">
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#experience">Experience</a>
        </nav>
        <div>Contact me</div>
      </header>

      <div className="items-center flex-col flex space-y-4">
        <h1 className="text-7xl">João Graça</h1>

        <p className="w-2/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta sollicitudin diam eget vulputate. Aliquam posuere, augue eu facilisis vestibulum, ex nunc molestie ante, at porta nunc neque ut nunc. Ut sodales purus sed semper commodo. Suspendisse potenti. Aliquam aliquam leo nec placerat vulputate. Aliquam erat volutpat. In et enim at nisi gravida faucibus vitae nec ante. Maecenas rhoncus vulputate facilisis. Curabitur ac odio non risus pellentesque volutpat. Fusce tincidunt mauris vel arcu pellentesque feugiat. Donec commodo rhoncus quam eu semper.</p>
      </div>

      <Image
        alt="Profile photo"
        src={"/profile-photo.jpg"}
        width={600}
        height={600}
        className="w-94 h-94 object-cover rounded-3xl"    
      />
    </div>
  );
}
