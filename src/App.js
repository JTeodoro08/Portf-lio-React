import React from 'react';
// Importando os componentes
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import Courses from './components/Courses';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <Header />

      <main>
        {/* Componentes principais */}
        <Home />
        <Technologies />
        <Projects />
        <About />
        <Courses />
        <Contact />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;

