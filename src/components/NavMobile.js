import React from 'react';
import './NavMobile.css';

const NavMobile = () => (
  <nav className="nav--mobile">
    <ul className="menu menu--mobile">
      <li className="menu__item">
        <a className="menu__link active" href="#home">
          <i className="menu__icon bi bi-house-door"></i>
          <span className="menu__text">Home</span>
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#projetos">
          <i className="menu__icon bi bi-window-stack"></i>
          <span className="menu__text">Projetos</span>
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#sobre">
          <i className="menu__icon bi bi-person"></i>
          <span className="menu__text">Sobre</span>
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#contato">
          <i className="menu__icon bi bi-envelope"></i>
          <span className="menu__text">Contato</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default NavMobile;