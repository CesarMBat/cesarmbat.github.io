import React from "react";
import "./project.css";
import git from "../../assets/github.svg";

const Projects = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Projetos</h1>
      <main className="main-proj">
          <div className="div-project">
            <h2>Recicl'Arte</h2>
            <div className="div-2">
              <p>
                Projeto feito para o TCC do IOS, em parceria com um grupo de
                Gestão Empresarial
              </p>
              <a
                href="https://github.com/CesarMBat/reciclarte-project"
                className="a-nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="" />
              </a>
            </div>
          </div>
          <div className="div-project">
            <h2>PetMedVida</h2>
            <div className="div-2">
              <p>Projeto feito para o Projeto Integrador da UNIVESP.</p>
              <a
                href="https://github.com/CesarMBat/PI_S2G7"
                className="a-nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="" />
              </a>
            </div>
          </div>
          <div className="div-project">
            <h2>Furia Lojinha</h2>
            <div className="div-2">
              <p>Pequeno projeto sobre alguns produtos da loja da Furia</p>
              <a
                href="https://github.com/CesarMBat/furia-exercise"
                className="a-nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="" />
              </a>
            </div>
          </div>
          <div className="div-project">
            <h2>My Website</h2>
            <div className="div-2">
              <p>Predecessor desse projeto, feito em HTML e CSS basicamente.</p>
              <a
                href="https://github.com/CesarMBat/my-website"
                className="a-nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="" />
              </a>
            </div>
          </div>
      </main>
    </div>
  );
};

export default Projects;
