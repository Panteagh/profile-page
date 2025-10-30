import { SocialMediaType } from "@/types/Types";

function SocialMediaButton({ href, icon: Icon, title }: SocialMediaType) {
  return (
    <section className="flex justify-center items-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group flex justify-center p-3 rounded-xl 
          bg-white/10 text-white text-2xl 
          border border-cyan-400/50 
          hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
          hover:bg-cyan-400 hover:text-gray-900 
          hover:scale-110 transition-all duration-500 relative
          overflow-hidden
        `}
        aria-label={title}
      >
        {Icon}
        <span
          className="absolute text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-9 transition-all duration-500 z-0"
        >
          {title}
        </span>
      </a>
    </section>
  );
}

export default SocialMediaButton;
