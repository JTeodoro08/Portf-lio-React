import React, { useState } from 'react';
import './Courses.css';

const coursesData = [
  {
    title: 'Ri Happy - Front-end do Zero',
    duration: 'Digital Innovation One. Out 2024. 75h.',
    description: `Construindo 10 projetos Front-end com HTML, CSS e JavaScript! 
      Aprendendo a criar páginas web responsivas e interativas com temas populares como 
      Stranger Things, Spider-Man e Yu-Gi-Oh.`,
  },
  {
    title: 'Decola Tech 2024',
    duration: 'Digital Innovation One. Jan 2024. 73h.',
    description: `BootCamp focado em .NET, abordando desde conceitos básicos até 
      projetos avançados. Uma trilha completa com 73 horas de duração e certificação.`,
  },
  {
    title: 'Potência Tech iFood - Programação do Zero',
    duration: 'Digital Innovation One. Out 2023. 68h.',
    description: `Curso sobre lógica de programação, abordando algoritmos, estruturas 
      condicionais e repetição, além de operadores lógicos e de comparação.`,
  },
];

const Courses = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="cursos" className="courses">
      <div className="courses__content">
        {/* Cursos */}
        <div className="accordion">
          <h3 className="courses-title">Cursos</h3>
          {coursesData.map((course, index) => (
            <div key={index} className={`accordion__item ${activeIndex === index ? 'active' : ''}`}>
              <button
                className="accordion__header"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{course.title}</span>
                <i className={`bi ${activeIndex === index ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
              </button>
              {activeIndex === index && (
                <div className="accordion__body">
                  <p className="course-duration">{course.duration}</p>
                  <p className="course-description">{course.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Formação e Experiência */}
        <div className="about__content2">
          <div className="col1">
            {/* Formação */}
            <div className="row1">
              <h1>Formação</h1>
              <h4>Tecnologia em Sistemas para Internet</h4>
              <span>Fevereiro 2023 - Cursando</span>
              <div className="about__icons">
                <i className="bi bi-bank"></i>
                <span>Senac EAD</span>
              </div>
              <div className="about__icons">
                <i className="bi bi-mortarboard"></i>
                <span>BootCamp - Ri Happy</span>
              </div>
            </div>

            {/* Experiências */}
            <div className="row2">
              <h1>Experiências</h1>
              <h4>Impressor Gráfico</h4>
              <span>Epura Gráfica Digital</span>
              <h3>"Aprimorando minhas habilidades e expandindo meu
                 conhecimento em desenvolvimento web."</h3>

              <ul className="about__list">
                <li className="about__item"><span>HTML:</span> Estruturando semântica e acessibilidade;</li>
                <li className="about__item"><span>CSS:</span> Estilização avançada, incluindo animações e responsividade;</li>
                <li className="about__item"><span>JavaScript:</span> Implementação de interatividade e manipulação de DOM;</li>
                <li className="about__item"><span>React:</span> Modularização de componentes e gerenciamento de estado;</li>
                <li className="about__item"><span>Styled Components:</span> Melhor organização de estilos no desenvolvimento;</li>
                <li className="about__item"><span>Git e GitHub:</span> Controle de versões e colaboração eficiente.</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;