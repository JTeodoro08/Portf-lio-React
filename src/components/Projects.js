import React from 'react';
import './Projects.css';
import landingPageImage from '../assets/foto21.jpeg';
import taskManagerImage from '../assets/foto13(1).jpg';
import personalPortfolioImage from '../assets/foto15(2).jpg';

const projectsData = [
  {
    title: 'Landing Page Corporativa',
    description: 'Desenvolvimento de uma página institucional moderna, otimizada para SEO e responsiva, perfeita para apresentação de empresas e serviços.',
    features: [
      'Design responsivo e moderno;',
      'Integração com ferramentas de análise (Google Analytics);',
      'Otimização para mecanismos de busca (SEO).'
    ],
    technologies: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored'],
    image: landingPageImage,
    linkPreview: 'https://link-da-landingpage.com',
    linkRepo: 'https://repositorio-da-landingpage.com',
  },
  {
    title: 'Sistema de Gerenciamento de Tarefas',
    description: 'Plataforma para organização e priorização de tarefas, com armazenamento em nuvem e notificações.',
    features: [
      'Criação e edição de tarefas;',
      'Visualização de progresso em tempo real;',
      'Armazenamento de dados seguro com autenticação.'
    ],
    technologies: ['devicon-react-original colored', 'devicon-nodejs-plain colored', 'devicon-css3-plain colored'],
    image: taskManagerImage,
    linkPreview: 'https://link-gerenciador-de-tarefas.com',
    linkRepo: 'https://repositorio-gerenciador-de-tarefas.com',
  },
  {
    title: 'Portfólio Pessoal Responsivo',
    description: 'Desenvolvimento de um site pessoal com informações sobre o desenvolvedor, habilidades, e projetos em destaque.',
    features: [
      'Sessão sobre mim e habilidades;',
      'Links para redes sociais e repositórios;',
      'Design elegante e responsivo.'
    ],
    technologies: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-react-original colored'],
    image: personalPortfolioImage,
    linkPreview: 'https://link-do-portfolio.com',
    linkRepo: 'https://repositorio-do-portfolio.com',
  },
];

const Projects = () => (
  <section id="projetos" className="projects">
    <h2 className="projects-title">Projetos</h2>
    <div className="projects__container">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className={`projects__card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
        >
          <img
            className="card__cover"
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            aria-label={`Imagem do projeto: ${project.title}`}
          />
          <div className="card__content">
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <ul className="card__list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="card__item">{feature}</li>
              ))}
            </ul>
            <div className="card__buttons">
              <a
                href={project.linkPreview}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Prévia do projeto: ${project.title}`}
              >
                Prévia
              </a>
              <a
                href={project.linkRepo}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositório do projeto: ${project.title}`}
              >
                Repositório
              </a>
              <div>
                <p className="technologies__heading">Principais tecnologias usadas:</p>
                <ul className="technologies__list">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>
                      <i className={`technologies__icon ${tech}`} aria-label={`Tecnologia usada: ${tech.split('-')[1]}`}></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;