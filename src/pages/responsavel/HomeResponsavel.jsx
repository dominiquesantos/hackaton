// src/pages/responsavel/HomeResponsavel.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/HomeResponsavel.css";
import { getEventos } from "../../services/dataService"; // Importa getEventos

function HomeResponsavel() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    console.log("--- HomeResponsavel: INICIANDO CARREGAMENTO DE EVENTOS ---");
    const todosEventos = getEventos(); // Chama o getEventos do dataService
    console.log("HomeResponsavel: 1. Todos os eventos obtidos (brutos):", todosEventos);

    // Filtra eventos futuros (ou a partir de hoje) e ordena pela data mais próxima
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera o horário para comparar apenas a data (ignora horas, minutos, segundos)
    console.log("HomeResponsavel: 2. Data de hoje (para filtro):", hoje.toLocaleDateString());

    const eventosFuturos = todosEventos.filter(evento => {
      // Garante que evento.data exista e seja uma string
      if (!evento.data || typeof evento.data !== 'string') {
        console.warn("HomeResponsavel: Evento ignorado por ter data inválida ou ausente:", evento);
        return false;
      }
      
      // Cria um objeto Date para a data do evento (adiciona T00:00:00 para padronizar o horário e evitar problemas de fuso)
      const dataEvento = new Date(evento.data + 'T00:00:00');
      
      // Verifica se a data do evento é válida (evita erros com datas mal formatadas)
      if (isNaN(dataEvento.getTime())) {
          console.error("HomeResponsavel: Data do evento inválida após parse: ", evento.data, "Evento:", evento);
          return false;
      }
      
      // Compara se a data do evento é MAIOR OU IGUAL à data de hoje
      return dataEvento >= hoje;
    });
    console.log("HomeResponsavel: 3. Eventos futuros filtrados:", eventosFuturos);

    const eventosOrdenados = eventosFuturos.sort((a, b) => 
      new Date(a.data + 'T00:00:00') - new Date(b.data + 'T00:00:00')
    );
    console.log("HomeResponsavel: 4. Eventos futuros ordenados por data:", eventosOrdenados);

    const eventosParaExibir = eventosOrdenados.slice(0, 4); // Pega os 4 próximos eventos futuros
    console.log("HomeResponsavel: 5. Eventos que serão exibidos (4 primeiros):", eventosParaExibir);
    
    setEventos(eventosParaExibir);
    console.log("--- HomeResponsavel: CARREGAMENTO DE EVENTOS CONCLUÍDO ---");
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez ao montar o componente

  return (
    <div className="home-container">
      {/* Header */}
      <header className="responsavel-header">
        <div className="container">
          <div className="logo">Troca Fácil</div>
          <nav>
            <Link to="/">Home</Link>
            {/* O link abaixo deve levar para uma lista de eventos do responsável, se existir */}
            <Link to="/eventos">Eventos</Link> 
            <Link to="/responsavel/turmas">Turmas</Link>
            <Link to="/responsavel/recados">Recados</Link>
            <Link to="/login" className="login-button">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>Bem-vindo, responsável!</h1>
          <p>Agradecemos por acompanhar de perto o aprendizado do seu pequeno.</p>

          <button
            className="gray-button"
            onClick={() => navigate("/responsavel/recados")}
          >
            Acessar recados
          </button>

          <div className="search-bar">
            <input type="text" placeholder="Pesquise uma turma ou aluno" />
            <button>🔍</button>
          </div>
        </div>

        <div className="hero-right">
          <img src="/menina.png" alt="Ilustração" />
        </div>
      </section>

      {/* Agenda Section */}
      <section className="agenda">
        <div className="agenda-header">
          <h2>📌 Agenda da Semana</h2>
        </div>

        <div className="card-list">
          {eventos.length === 0 ? (
            // Mensagem quando não há eventos para exibir
            <p>Nenhum evento na agenda por enquanto.</p>
          ) : (
            // Mapeia e renderiza os cards de eventos
            eventos.map((evento) => (
              <div key={evento.id} className="card">
                <h3>{evento.titulo}</h3>
                {/* Ajuste o formato da data aqui se necessário, ex: formatar para DD/MM */}
                <p>📅 {evento.data}</p> 
                <p>{evento.turmas}<br />{evento.horario}</p>
                <div className="card-buttons">
                  <button className="gray-button" onClick={() => alert('Abrir detalhes do evento: ' + evento.titulo)}>Abrir</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="see-more">
          {/* Link para ver todos os eventos, ajuste a rota se /eventos não for a ideal */}
<button onClick={() => navigate("/responsavel/eventos")}>Veja Mais</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p><strong>Troca Fácil</strong></p>
        <p>A escola e a família caminham juntas.</p>
        <p>Sobre</p>
        <p className="footer-year">2025</p>
      </footer>
    </div>
  );
}

export default HomeResponsavel;