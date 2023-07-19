import { useState, useRef } from "react";
import "./App.css";
import Swot from "./components/swot/Swot";
import Who from "./components/who/Who";
import Skills from "./components/skills/Skills";
import Obj from "./components/objective/objective";
import Projects from "./components/my_projects/projects";
import svg_flag from "./assets/flags";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTrans from "./en.json";
import ptTrans from "./pt.json";
import Footer from "./components/footer/Footer";

i18n.use(initReactI18next).init({
  lng: "pt", // Defina o idioma padrão aqui
  resources: {
    en: {
      translation: enTrans,
    },
    pt: {
      translation: ptTrans,
    },
  },
});
function App() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState("pt");

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
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
          <h1 className="h1-header" onClick={goWho}>
            CésarMBat
          </h1>
        </section>
        <section className="section-right">
          <ul className="ul-header">
            <li className="li-header" onClick={goWho}>
              <a href="#who" className="a-nav">
                {t("quem")}
              </a>
            </li>
            <li className="li-header">
              <a href="#obj" onClick={goObj} className="a-nav">
                {t("obj")}
              </a>
            </li>
            <li className="li-header" onClick={goSwot}>
              <a href="#swot" className="a-nav">
                {t("swot")}
              </a>
            </li>
            <li className="li-header" onClick={goSkills}>
              <a href="#skills" className="a-nav">
                {t("hab")}
              </a>
            </li>

            <li className="li-header">
              <a href="#proje" onClick={goProje} className="a-nav">
                {t("proj")}
              </a>
            </li>
          </ul>
        </section>
        <div className="div-lang">
          <img src={svg_flag.br} className="img-Flag" onClick={() => handleChangeLanguage("pt")} />
          <img src={svg_flag.uk} className="img-Flag" onClick={() => handleChangeLanguage("en")} />
        </div>
      </header>
      <div ref={ref_Who} id="who">
        <Who i18n={i18n} />
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
      <div style={{height: '20rem'}}></div>
        <Footer />
    </>
  );
}

export default App;
