import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contato" className="contact">
    <h2>Contate-me</h2>
    <p>
      "Acredito no poder da colaboração para construir o futuro. Estou aqui para transformar ideias em realidade e explorar novas oportunidades. Estou pronto para colaborar em projetos e em busca de desafios que proporcionem aprendizado contínuo e promovam meu crescimento profissional."
    </p>
    <ul className="menu menu--social">
      <li>
        <a
          className="menu__link"
          href="https://github.com/JTeodoro08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de José Teodoro"
        >
          <i className="menu__icon bi bi-github"></i>
        </a>
      </li>
      <li>
        <a
          className="menu__link"
          href="https://www.linkedin.com/in/jteodoro08/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de José Teodoro"
        >
          <i className="menu__icon bi bi-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          className="menu__link"
          href="https://www.instagram.com/jteodoro08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de José Teodoro"
        >
          <i className="menu__icon bi bi-instagram"></i>
        </a>
      </li>
      <li>
        <a
          className="menu__link"
          href="https://wa.me/5581981774919"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp de José Teodoro"
        >
          <i className="menu__icon bi bi-whatsapp"></i>
        </a>
      </li>
      <li>
        <a
          className="menu__link"
          href="https://twitter.com/JTeodoro08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter de José Teodoro"
        >
          <i className="menu__icon bi bi-twitter"></i>
        </a>
      </li>
    </ul>
    <a href="mailto:jteodoro33jc@gmail.com">
      <button className="btn btn--primary">
        <i className="bi bi-envelope"></i> <span className="email">jteodoro33jc@gmail.com</span>
      </button>
    </a>
  </section>
);

export default Contact;