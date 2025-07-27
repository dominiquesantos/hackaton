// src/pages/professor/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import "../../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { getEventos } from "../../services/dataService"; 

function Home() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    
    const todosEventos = getEventos();
    const eventosOrdenados = todosEventos.sort((a, b) => new Date(a.data) - new Date(b.data));
    setEventos(eventosOrdenados.slice(0, 4)); 
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    if (searchValue) {
      console.log("Buscar por:", searchValue);
    }
  };

  return (
    <>
      <Header />

      <main className="home-container">
        <section className="hero">
          <div className="hero-left">
            <h1>Olá, Professor!</h1>
            <p>A escola e a família caminham juntas.</p>

            <button
              className="gray-button"
              style={{ marginBottom: "20px" }}
              onClick={() => navigate("/recados/novo")}
            >
              Criar Novo Recado
            </button>

            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Pesquise uma turma ou aluno"
              />
              <button type="submit">🔍</button>
            </form>
          </div>

          <div className="hero-right">
            <img src="/menina.png" alt="Ilustração educativa" />
          </div>
        </section>

        <section className="agenda">
          <div className="agenda-header">
            <h2>📌 Agenda da Semana</h2>
            <button
              className="gray-button"
              onClick={() => navigate("/eventos/novo")}
            >
              Adicionar Novo Evento
            </button>
          </div>

          <div className="card-list">
            {eventos.length === 0 ? (
              <p>Nenhum evento na agenda por enquanto.</p>
            ) : (
              eventos.map((evento) => (
                <div key={evento.id} className="card">
                  <h3>{evento.titulo}</h3>
                  <p>📅 {evento.data}<br />{evento.turmas} – {evento.horario}</p>
                  <div className="card-buttons">
                    <button className="green-button" onClick={() => navigate(`/eventos/editar/${evento.id}`)}>Editar</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="see-more">
            <button
              className="green-button"
              onClick={() => navigate("/eventos")}
            >
              Veja Mais
            </button>
          </div>
        </section>

        <section className="footer">
          <p><strong>Troca Fácil</strong></p>
          <p>A escola e a família caminham juntas.</p>
          <p><strong>Sobre</strong></p>
          <p className="footer-year">2025</p>
        </section>
      </main>
    </>
  );
}

export default Home;
