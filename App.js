import React from 'react';
import './style.css';

const projetos = [
  { id: 1, titulo: "Primeiro Portfólio", desc: "Criado com HTML e CSS puro.", link: "#" },
  { id: 2, titulo: "Sistema de Gestão", desc: "Focado em administração pública.", link: "#" },
  { id: 3, titulo: "Projeto React", desc: "Migração dinâmica para a disciplina de TI.", link: "#" }
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Portfólio de Josimar Rocha</h1>
        <nav><span>Sobre</span> | <span>Projetos</span> | <span>Contato</span></nav>
      </header>

      <section className="projetos-grid">
        {projetos.map(p => (
          <div key={p.id} className="card">
            <h3>{p.titulo}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="btn">Ver Mais</a>
          </div>
        ))}
      </section>

      <footer><p>© 2026 - Piauí, Brasil</p></footer>
    </div>
  );
}

export default App;