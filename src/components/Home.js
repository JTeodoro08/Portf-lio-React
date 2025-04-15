import React from 'react';
import './Home.css';
import colagem from '../assets/colagem.png';

const Home = () => (
  <main id="home" className="home-container">
    <section className="home-content">
      <div className="home-left">
        {/* Texto principal com destaque */}
        <h1 className="home-title">
          <span className="highlight">Soluções Web &</span>
          <br />
          Desenvolvimento Front-end
        </h1>
        {/* Descrição com destaque regional */}
        <p className="home-description">
          José Teodoro, Paulista-PE, Desenvolvedor Front-end.
        </p>
      </div>

      {/* Imagem com descrição acessível */}
      <div className="home-image-section">
        <img
          className="home-image"
          src={colagem}
          alt="Representação criativa de soluções e inovação no desenvolvimento front-end"
        />
        <div className="home-image-caption">
          <span className="caption-highlight">"A inovação nos conecta ao futuro"</span>
        </div>
      </div>
    </section>
  </main>
);

export default Home;