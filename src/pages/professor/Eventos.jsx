
import React, { useState, useEffect } from "react"; 
import "../../styles/Eventos.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { getEventos, deleteEvento } from "../../services/dataService"; 

function Eventos() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]); 
  const [busca, setBusca] = useState("");

  
  useEffect(() => {
    setEventos(getEventos());
  }, []);

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este evento?")) {
      const novaLista = deleteEvento(id); 
      setEventos(novaLista); 
      alert("Evento excluído com sucesso!");
    }
  };

  
  const eventosFiltrados = eventos.filter(
    (evento) =>
      evento.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      evento.turmas.toLowerCase().includes(busca.toLowerCase()) ||
      evento.descricao.toLowerCase().includes(busca.toLowerCase()) ||
      evento.data.includes(busca) 
  );

  return (
    <div className="eventos-container">
      <Header />

      <div className="eventos-header">
        <h1>Eventos <span className="icon">👥</span></h1>
        <button className="botao-voltar" onClick={() => navigate("/home")}>
          Voltar
        </button>
      </div>

      <div className="add-btn-container">
        <button className="botao-add" onClick={() => navigate("/eventos/novo")}>
          Adicionar Novo Evento
        </button>
      </div>

      <div className="eventos-cards">
        {eventosFiltrados.length === 0 ? (
          <p>Nenhum evento encontrado.</p>
        ) : (
          eventosFiltrados.map((evento) => (
            <div key={evento.id} className="card-evento"> 
              <h3>{evento.titulo}</h3>
              <p className="data">📅 {evento.data}</p>
              {evento.horario && <p>{evento.horario}</p>} 
              {evento.turmas && <p>{evento.turmas}</p>} 
              {evento.descricao && <p>{evento.descricao}</p>} 

              <div className="botoes">
                <button 
                  className="btn-editar" 
                  onClick={() => navigate(`/eventos/editar/${evento.id}`)} 
                >
                  Editar
                </button>
                <button 
                  className="btn-excluir" 
                  onClick={() => handleExcluir(evento.id)} 
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p><strong>Troca Fácil</strong></p>
        <p>A escola e a família caminham juntas.</p>
        <p><strong>Sobre</strong></p>
        <p className="footer-year">2025</p>
      </footer>
    </div>
  );
}

export default Eventos;
