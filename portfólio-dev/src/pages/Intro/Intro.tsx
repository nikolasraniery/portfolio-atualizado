import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProfilePicture } from "@/components/ProfilePicture.tsx";
import { CaretDoubleDown } from "@phosphor-icons/react";
import { Tag } from "@/components/Tags/Tag.tsx";
import { TagConstants } from "@/components/Tags/TagConstants.ts";

export function Intro() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="h-lvh w-full" id="home">
      <img
        className="-z-50 fixed w-full h-lvh"
        src="src/assets/Background_Intro.png"
        alt="Background"
      />
      <div className="z-10 h-lvh w-full flex flex-col items-center justify-center">
        <div className="h-full w-full flex items-center justify-center flex-col gap-24">
          <ProfilePicture />
          <div className="flex flex-col items-center">
            <span className="font-inconsolata text-subtitle text-base-gray-500">
              Hello World! Meu nome é{" "}
              <span className="text-main-red">Nikolas Santos</span> e sou
            </span>
            <strong className="font-asap text-title-lg text-base-gray-600">
              Desenvolvedor Frontend
            </strong>
            <p className="text-text-sm font-mavenpro text-base-gray-400 text-center max-w-[680px]">
              Transformo necessidades em aplicações reais, envolventes e
              funcionais. Desenvolvo sistemas atráves da minha paixão pela
              tecnologia, contribuindo com soluções inovadoras e eficazes para
              desafios complexos.
            </p>
          </div>
          <div className="flex gap-4">
            <Tag tagName={TagConstants.GITHUB}>
              <img
                alt="tag-image"
                className="h-6 w-6"
                src="src/assets/GitHub.svg"
              />
            </Tag>
            <Tag tagName={TagConstants.HTML}>
              <img
                alt="tag-image"
                className="h-6 w-6"
                src="src/assets/HTML.svg"
              />
            </Tag>
            <Tag tagName={TagConstants.CSS}>
              <img
                alt="tag-image"
                className="h-6 w-6"
                src="src/assets/CSS.svg"
              />
            </Tag>
            <Tag tagName={TagConstants.JAVASCRIPT}>
              <img
                alt="tag-image"
                className="h-6 w-6"
                src="src/assets/JavaScript.svg"
              />
            </Tag>
            <Tag tagName={TagConstants.REACT}>
              <img
                alt="tag-image"
                className="h-6 w-6"
                src="src/assets/React.svg"
              />
            </Tag>
          </div>

          <Link to="#projects">
            <button>
              <CaretDoubleDown
                className="text-gray-400 animate-bounce-up-down"
                size={32}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
