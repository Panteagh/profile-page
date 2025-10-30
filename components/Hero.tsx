import DivMotionWrapper from "./MotionWrapper";
import Header from "./Header";

function Hero() {
  return (
    <section className=" my-10 w-full">
      <div className="top-26 max-md:top-10 text-center">
        <DivMotionWrapper>
          <Header />
        </DivMotionWrapper>
      </div>
    </section>
  );
}

export default Hero;
