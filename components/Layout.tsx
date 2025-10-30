import { Children } from "@/types/Types";

const BACKGROUND_GRADIENT_STYLE = {
  background:
    "linear-gradient(150deg, rgba(148, 12, 232, 1) 0%, rgba(9, 39, 121, 1) 48%, rgba(0, 149, 255, 1) 100%)",
};

function Layout({ children }: Children) {
  return (
    <div
      className="min-h-screen w-full p-4 md:p-8"
      style={BACKGROUND_GRADIENT_STYLE}
    >
      <div className="mx-auto w-full max-w-6xl  bg-black/30 backdrop-blur-md rounded-3xl shadow-2xl shadow-black/60p-4 md:p-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;
