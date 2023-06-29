import React from "react";
import './swots.css'
const Swot = () => {
  return (
    <div>
      <main className="main-swot main">
      <section className="section-swot">
                <div className="grid-swot1">
                  <p className="p-swot pswot1">Strengths</p>
                  <ul>
                    <li>Comunicativo</li>
                    <li>Gosto de aprender</li>
                    <li>Conhecimentos técnicos</li>
                  </ul>
                </div>
                <div className="grid-swot2">
                  <p className="p-swot pswot2">Weakness</p>
                  <ul>
                    <li>Organização própria específica</li>
                    <li>Cobrar dos outros</li>
                  </ul>
                </div>
                <div className="grid-swot3">
                    <p className="p-swot pswot3">Opportunities</p>
                    <ul>
                      <li>Inglês fluente, capaz de trabalhar fora</li>
                      <li>Network crescente</li>
                      <li>Aluno do IOS</li>
                    </ul>
                </div>
                <div className="grid-swot4">
                  <p className="p-swot pswot4">Threats</p>
                  <ul>
                    <li>Dificuldade em ingressar no mercado</li>
                  </ul>
                </div>
            </section>

      </main>
    </div>
  );
};

export default Swot;
