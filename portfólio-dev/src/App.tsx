import { BrowserRouter as Router } from "react-router-dom";
import { Intro } from "@/pages/Intro/Intro.tsx";
import { Projects } from "@/pages/Projects/Projects.tsx";
export function App() {
  return (
    <div className="w-full h-lvh">
      <Router>
        <Intro />
        <Projects />
      </Router>
    </div>
  );
}
