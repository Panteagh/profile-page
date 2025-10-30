import DivMotionWrapper from "./MotionWrapper";
import Image from "next/image";

function AboutMe() {
  const Bio =
    "I'm Pantea, a Next.js & React Developer specializing in building highly performant and accessible web experiences. My focus is on leveraging Server-Side Rendering (SSR) and modern best practices to deliver clean, scalable code that directly translates to business value. I thrive in challenging environments and am passionate about problem-solving.";

  const expertiseSummary = [
    { title: "Name:", value: "Pantea Ghaffari" },
    { title: "Age:", value: "22" },
    { title: "Experience:", value: "2 Years" },
    { title: "Phone Number:", value: "09195083831" },
    { title: "Email:", value: "panteagh.03@gmail.com" },
    { title: "Adrdess:", value: "Tahran, Parand" },
  ];

  return (
    <DivMotionWrapper>
      <h2 className="text-4xl font-extrabold mt-28 mb-2.5 text-white text-center">
        About Me
      </h2>
      <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-20 mb-16  items-center md:items-start text-white">
        <div className=" w-64 h-64 max-md:w-full md:h-80 relative">
          <Image
            className="rounded-3xl object-cover shadow-2xl shadow-purple-500/80 transition-all duration-500 hover:scale-[1.02]"
            src="/aboutImg.jpg"
            alt="About Me"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            priority
          />
        </div>

        <div className="w-full md:w-3/5 text-gray-200 flex flex-col gap-6">
          <p className="text-lg max-md:mx-8 leading-relaxed font-sans">{Bio}</p>

          <div
            className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-4 p-5 rounded-xl max-md:mx-8
             border border-cyan-400/50 bg-black/30 backdrop-blur-sm  shadow-lg shadow-cyan-400/20"
          >
            {expertiseSummary.map((item) => (
              <h5 key={item.title} className="text-base font-sans">
                <span className="font-bold text-cyan-400">{item.title}</span>{" "}
                {item.value}
              </h5>
            ))}
          </div>
        </div>
      </div>
    </DivMotionWrapper>
  );
}

export default AboutMe;
