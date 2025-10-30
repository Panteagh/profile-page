import SocialBottonGroups from "./SocialBottonGroups";
import DivMotionWrapper from "./MotionWrapper";

function Footer() {
  return (
    <DivMotionWrapper>
      <footer
        className="w-full mt-24 py-10 flex flex-col items-center justify-center 
      border-t border-cyan-400/30 text-white shadow-[0_-5px_15px_rgba(0,255,255,0.1)]"
      >
        <h3 className="text-xl font-bold text-cyan-400">Connect With Me</h3>

        <SocialBottonGroups />

        <p className="mt-8 text-sm text-gray-400 font-mono max-md:my-3.5">
          © {new Date().getFullYear()} Pantea Ghaffari. Built with Next.js &
          Tailwind CSS.
        </p>
      </footer>
    </DivMotionWrapper>
  );
}

export default Footer;
