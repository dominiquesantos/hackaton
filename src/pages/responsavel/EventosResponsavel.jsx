
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/EventosResponsavel.css"; 
import { getEventos } from "../../services/dataService";

function EventosResponsavel() {
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const todosEventos = getEventos();
    const eventosOrdenados = todosEventos.sort((a, b) =>
      new Date(a.data + 'T00:00:00') - new Date(b.data + 'T00:00:00')
    );
    setEventos(eventosOrdenados);
  }, []);

  return (
    
    <div className="eventos-responsavel-container"> 
      <div className="eventos-header"> 
        <h1>Eventos</h1>
        
        <button onClick={() => navigate("/")} className="botao-voltar">Voltar</button>
      </div>

      
      <div className="eventos-cards">
        {eventos.map((evento) => (
          
          <div className="evento-card" key={evento.id}>
            
            <h3>{evento.titulo}</h3>
            <p className="data">📅 {evento.data}</p> 
            <p>{evento.turmas}</p>
            {evento.horario && <p>{evento.horario}</p>}
            
            {evento.descricao && <p className="descricao">{evento.descricao}</p>} 
            
            <button className="abrir">Abrir</button>
          </div>
        ))}
      </div>

      
      <footer className="eventos-footer">
        <p><strong>Troca Fácil</strong></p>
        <p>A escola e a família caminham juntas.</p>
      </footer>
    </div>
  );
}

export default EventosResponsavel;
