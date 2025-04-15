import React from 'react';
import './About.css';
import foto2 from '../assets/foto2.jpg'; // Importação da imagem

const About = () => (
  <section id="sobre" className="about">
    <div className="about__container">
      {/* Foto */}
      <div className="about__photo-container">
        <img
          className="about__photo"
          src={foto2}
          alt="Foto de perfil de José Teodoro"
          aria-label="Foto de perfil"
        />
      </div>

      {/* Descrição */}
      <div className="about__description">
        <h2 className="about__title">Sobre mim</h2>
        <p className="about__text">
          Sou um profissional em transição de carreira, que decidiu mergulhar no mundo da tecnologia
          pelas suas infinitas possibilidades. Em 2023, dei o primeiro passo nessa jornada ao
          escrever meu primeiro "Hello World" e desde então venho desenvolvendo minhas habilidades
          e ampliando meu conhecimento na área.
          Atualmente, estou cursando Tecnólogo em Sistemas para Internet pelo Senac EAD,
          onde estudo conceitos fundamentais para o desenvolvimento de soluções digitais.
          Essa formação tem sido essencial para construir uma base sólida e explorar os desafios
          e oportunidades que a tecnologia oferece.

        </p>
        <div className="about__icons">
          <i className="bi bi-translate" aria-label="Idiomas falados: Inglês Básico e Espanhol Básico"></i>
          <span>Inglês: Básico | Espanhol: Básico</span>
        </div>
        <div className="description__buttons">
          <a
            href="https://www.linkedin.com/in/jteodoro08/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn de José Teodoro"
          >
            <button className="btn btn--primary">
              <span>Conecte-se Comigo</span>
              <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </button>
          </a>
          <a
            href="/curriculo.pdf" /* Exemplo de link para o currículo */
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar currículo de José Teodoro"
          >
            <button className="btn">
              <span>Currículo</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;