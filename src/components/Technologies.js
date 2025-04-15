import React from 'react';
import './Technologies.css';

const technologiesData = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'C#', icon: 'devicon-csharp-plain colored' }
];

const Technologies = () => (
  <section id="technologies" className="technologies">
    <div className="technologies-container">
      <div className="technologies__text">
        <h2 className="technologies-title">Conhecimento nas principais tecnologias do mercado</h2>
        <p className="technologies-description">
          Domínio de tecnologias essenciais para desenvolvimento web moderno e criação de projetos inovadores.
        </p>
      </div>
      <div className="technologies__icons">
        {technologiesData.map((tech, index) => (
          <div key={index} className="technologies__item">
            <i
              className={`technologies__icon ${tech.icon}`}
              aria-label={`Tecnologia: ${tech.name}`}
            ></i>
            <span className="technologies__name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;