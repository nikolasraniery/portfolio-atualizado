import { CaretDoubleUp } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/Cards/Card.tsx";
import {
  CardDescriptions,
  CardsNames,
} from "@/components/Cards/CardsConstants.ts";

export function Projects() {
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
    <div
      className="bg-base-gray-200 h-lvh w-full p-16 gap-3 flex flex-col items-center"
      id="projects"
    >
      <div className="flex flex-1 flex-col items-center w-full h-full">
        <span className="font-inconsolata text-subtitle text-main-red">
          Meu trabalho
        </span>
        <strong className="font-asap text-title-md text-base-gray-600">
          Veja os projetos em destaque
        </strong>
      </div>
      <div className="w-full h-full grid grid-cols-3">
        <Card
          cardImage="src/assets/Thumbnail_Project-01.png"
          projectName={CardsNames.TRAVELGRAM}
          projectDescription={CardDescriptions.TRAVELGRAM_DESCRIPTION}
        />
        <Card
          cardImage="src/assets/Thumbnail_Project-02.png"
          projectName={CardsNames.TECH_NEWS}
          projectDescription={CardDescriptions.TECH_NEWS_DESCRIPTION}
        />
        <Card
          cardImage="src/assets/Thumbnail_Project-03.png"
          projectName={CardsNames.RECIPES_PAGE}
          projectDescription={CardDescriptions.RECIPES_PAGE_DESCRIPTION}
        />
        <Card
          cardImage="src/assets/Thumbnail_Project-04.png"
          projectName={CardsNames.ZINGEN_PAGE}
          projectDescription={CardDescriptions.ZINGEN_PAGE_DESCRIPTION}
        />
        <Card
          cardImage="src/assets/Thumbnail_Project-05.png"
          projectName={CardsNames.REFUND}
          projectDescription={CardDescriptions.REFUND_DESCRIPTION}
        />
        <Card
          cardImage="src/assets/Thumbnail_Project-06.png"
          projectName={CardsNames.TURISM_PAGE}
          projectDescription={CardDescriptions.TURISM_PAGE_DESCRIPTION}
        />
      </div>
      <Link
        className="h-full w-full absolute flex items-end justify-end"
        to="#home"
      >
        <button className="mr-8 mb-8" title="Retornar ao topo">
          <CaretDoubleUp className="text-base-gray-400" size={32} />
        </button>
      </Link>
    </div>
  );
}
