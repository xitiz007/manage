import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse md:flex-row container items-center mx-auto px-6 mt-10 space-y-0">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="font-bold text-4xl max-w-md text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight transition duration-300 ease-out"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* right item */}
        <div className="relative w-full h-[250px] md:w-1/2 md:h-[400px]">
          <Image 
          src="/images/illustration-intro.svg" 
          layout="fill"
          alt="image"
          objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
