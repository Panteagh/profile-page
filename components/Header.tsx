import Image from "next/image";

function Header() {
  const bioText =
    "I build beautiful, high-performance, and user-centric web applications using modern JavaScript architectures.";

  return (
    <header 
      className="flex w-full max-w-6xl mx-auto px-4 md:px-0 justify-between items-center
       max-md:flex-col-reverse max-md:text-center gap-12 md:gap-28 text-white"
    >
      <div className="flex flex-col max-md:items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Pantea Ghaffari
        </h1>

        <h3 className="text-xl md:text-2xl mt-4 font-semibold text-gray-200">
          <span className="text-cyan-400">Next.js & React Developer</span> |
          Focused on Scalable UIs
        </h3>

        <p className="text-lg mt-8 max-w-lg text-gray-300 leading-relaxed">
          {bioText}
        </p>
      </div>

      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <Image
          className="rounded-full object-cover border-4 border-cyan-400/70 max-md:mt-3
           transition-all duration-500 hover:scale-[1.03] shadow-2xl 
           shadow-purple-500/80"
          src="/profile.jpg"
          alt="Pantea Ghaffari's Avatar"
          fill
          priority
          sizes="(max-width: 768px) 256px, 320px"
        />
      </div>
    </header>
  );
}

export default Header;
