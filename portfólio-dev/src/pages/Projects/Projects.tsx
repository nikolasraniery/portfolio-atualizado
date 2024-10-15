import { CaretDoubleDown } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      className=""
      style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
      id="projects"
    >
      <h2>Seção 1</h2>
      <p>Conteúdo da Seção 1</p>
      <Link to="#home">
        <button className="z-50">
          <CaretDoubleDown className="bg-main-red" size={32} />
        </button>
      </Link>
    </div>
  );
}
