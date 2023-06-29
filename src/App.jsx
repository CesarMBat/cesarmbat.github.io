import { useRef } from "react";
import "./App.css";
import Swot from "./components/swot/Swot";
import Who from "./components/who/Who";
import Skills from "./components/skills/Skills";
import Obj from "./components/objective/objective";
import Projects from "./components/my_projects/projects";
function App() {
  const ref_Who = useRef(null);
  const ref_Swot = useRef(null);
  const ref_Skills = useRef(null);
  const ref_Obj = useRef(null);
  const ref_Proje = useRef(null);

  const goWho = () => {
    ref_Who.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goSwot = () => {
    ref_Swot.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goSkills = () => {
    ref_Skills.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goObj = () => {
    ref_Obj.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goProje = () => {
    ref_Proje.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header className="header">
        <section className="section-left">
          <h1 className="h1-header" onClick={goWho}>CésarMBat</h1>
        </section>
        <section className="section-right">
          <ul className="ul-header">
            <li className="li-header" onClick={goWho}>
              <a href="#who" className="a-nav">
                Quem Sou Eu?
              </a>
            </li>
            <li className="li-header">
              <a href="#obj" onClick={goObj} className="a-nav">
                Objetivo
              </a>
            </li>
            <li className="li-header" onClick={goSwot}>
              <a href="#swot" className="a-nav">
                SWOT
              </a>
            </li>
            <li className="li-header" onClick={goSkills}>
              <a href="#skills" className="a-nav">
                Habilidades
              </a>
            </li>

            <li className="li-header">
              <a href="#proje" onClick={goProje} className="a-nav">
                Projetos
              </a>
            </li>
          </ul>
        </section>
      </header>
      <div ref={ref_Who} id="who">
        <Who />
      </div>
      <div ref={ref_Obj} id="obj">
        <Obj />
      </div>
      <div ref={ref_Swot} id="swot">
        <Swot />
      </div>
      <div ref={ref_Skills} id="skills">
        <Skills />
      </div>
      <div ref={ref_Proje} id="proje">
        <Projects />
      </div>
    </>
  );
}

export default App;
