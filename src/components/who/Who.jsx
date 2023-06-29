import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./who.css";
import eu_imgs from "../../assets/mini-eu";

const Who = () => {
  return (
    <div>
      <main className="main-who main">
        <div className="div-sections">
          <section className="section-left">
            <h1>Quem sou eu?</h1>
            <p className="p-section">
              Eu sou César Morsoleto Batista, tenho 20 anos, e sou apaixonado
              por programação. Tenho muitos hobbies, tais como: sair com os
              amigos, jogar videogame, assistir anime, ouvir música, codar,
              brincar com os meus doguinhos, jogar RPG e etc. Em 2018, entrei na Escola
              Técnica Estadual de São Paulo (ETESP), onde fiz o curso de
              Informática, começando a aprender sobre programação lá. Estou
              cursando Bacharelado em Tecnologia da Informação na UNIVESP.
            </p>
          </section>
          <section className="section-right">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item interval={1500}>
                <img src={eu_imgs.a} alt="" height={'600vh'} className="d-block"/>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src={eu_imgs.b} alt="" height={'600vh'} className="d-block"/>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src={eu_imgs.c} alt="" height={'600vh'} className="d-block"/>
              </Carousel.Item>
            </Carousel>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Who;
