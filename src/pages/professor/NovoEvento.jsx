
import React, { useState } from "react"; 
import Header from "../../components/Header";
import "../../styles/NovoEvento.css";
import { useNavigate } from "react-router-dom";
import { addEvento } from "../../services/dataService"; 

function NovoEvento() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [turmas, setTurmas] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoEvento = {
      titulo,
      data,
      horario,
      turmas,
      tipo,
      descricao,
    };

    addEvento(novoEvento); 

    alert("Evento criado com sucesso!");
    navigate("/eventos");
  };

  return (
    <>
      <Header />
      <main className="novo-evento-container">
        <button className="voltar-button" onClick={() => navigate("/eventos")}>
          Voltar
        </button>

        <div className="form-card">
          <label htmlFor="titulo">Título</label>
          <input 
            type="text" 
            id="titulo" 
            placeholder="Título do evento" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label htmlFor="data">Data</label>
          <input 
            type="date" // Alterado para type="date" para melhor UX
            id="data" 
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />

          <label htmlFor="horario">Horário</label>
          <input 
            type="text" 
            id="horario" 
            placeholder="Ex: 09h, manhã, período integral" 
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />

          <label htmlFor="turmas">Turma(s) Envolvida(s)</label>
          <input 
            type="text" 
            id="turmas" 
            placeholder="Ex: 1º ano Sala A, Todas as turmas" 
            value={turmas}
            onChange={(e) => setTurmas(e.target.value)}
            required
          />

          <label htmlFor="tipo">Tipo de Evento</label>
            <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
              <option value="">Selecione...</option>
              <option value="reuniao">Reunião</option>
              <option value="feira">Feira</option>
              <option value="atividade">Atividade</option>
              <option value="apresentacao">Apresentação</option>
              <option value="outros">Outros</option>
            </select>

          <label htmlFor="descricao">Descrição (Opcional)</label>
          <textarea 
            id="descricao" 
            placeholder="Detalhes adicionais do evento..." 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <div className="botoes">
            
            <button type="submit" className="btn-enviar">Criar Evento</button>
          </div>
        </div>

        <div className="rodape-verde"></div>
      </main>
    </>
  );
}

export default NovoEvento;