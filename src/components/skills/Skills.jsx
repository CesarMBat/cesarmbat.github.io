import './skills.css'
import img_skills from "../../assets/skills";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Skills = () => {
  return (
    <div>
      <main className="main-skills">
        <section className="section-left">
            <section className="section-explain">
              <h1>Habilidades</h1>
              <p>Citarei algumas habilidades que possuo</p>
            </section>
            <section className="section-skills">
              <ul>
                <li>Fluente em Inglês</li>
                <li>Trabalho em equipe</li>
                <li>Habilidades em comunicação</li>
                <li>Conhecimentos em HTML</li>
                <li>Conhecimentos em CSS</li>
                <li>Conhecimentos em JavaScript</li>
                <li>Conhecimentos em React</li>
              </ul>
            </section>
        </section>
        <section className="section-right">
            <Carousel controls={false} indicators={false}>
                <Carousel.Item interval={1500}>
                    <img src={img_skills.a} className="d-block"/>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img_skills.b} className="d-block"/>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img_skills.c} className="d-block"/>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img_skills.d} className="d-block"/>
                </Carousel.Item>
            </Carousel>
        </section>
      </main>
    </div>
  );
};

export default Skills;
