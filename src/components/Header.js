import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo-512x512.png';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || false;
  });

  useEffect(() => {
    const rootElement = document.documentElement; // Alvo o <html> ao invés do <body>
    if (isDarkMode) {
      rootElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      rootElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="header-container">
      {/* Navegação */}
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-menu-item">
            <a className="header-menu-link active" href="#home">Home</a>
          </li>
          <li className="header-menu-item">
            <a className="header-menu-link" href="#projetos">Projetos</a>
          </li>
          <li className="header-menu-item">
            <a className="header-menu-link" href="#sobre">Sobre</a>
          </li>
          <li className="header-menu-item">
            <a className="header-menu-link" href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      {/* Marca */}
      <div className="header-brand">
        <a href="#home">
          <img className="header-logo" src={logo} alt="Logo JTA" />
        </a>
      </div>

      {/* Alternância de tema */}
      <div
        className="header-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        role="button"
        aria-label={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
      </div>
    </header>
  );
};

export default Header;