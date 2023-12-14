"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Container from "./Container";

const Hero = () => {
  const pathname = usePathname();

  // Si no estás en la página de inicio, no renderizar el componente Hero
  if (pathname !== "/") {
    return null;
  }

  return (
    <Container>
      <div className="relative bg-cover h-full py-20">
        <div className="absolute top-0 right-0 w-full h-full transition-opacity z-0">
          <Image alt="hero" src="/images/bg-hero1.webp" fill />
        </div>
        <div className="z-10 relative w-full max-w-screen-md mx-auto flex flex-col items-center justify-center h-auto gap-5 ">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug text-center md:text-left">
            Encuentra los&nbsp;
            <i>servicios</i>
            <br />
            perfectos para vos y tus necesidades.
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
