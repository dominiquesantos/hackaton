// src/pages/professor/EditarEvento.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import "../../styles/NovoEvento.css"; 
import { useNavigate, useParams } from "react-router-dom";
import { getEventoById, updateEvento, deleteEvento } from "../../services/dataService";

function EditarEvento() {
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o ID do evento da URL
  
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [turmas, setTurmas] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  // Carrega o evento específico ao montar o componente
  useEffect(() => {
    console.log("EditarEvento: Tentando carregar evento com ID:", id);
    const eventoEncontrado = getEventoById(id);
    if (eventoEncontrado) {
      console.log("EditarEvento: Evento encontrado:", eventoEncontrado);
      setTitulo(eventoEncontrado.titulo || "");
      setData(eventoEncontrado.data || ""); // Data já deve estar no formato YYYY-MM-DD
      setHorario(eventoEncontrado.horario || "");
      setTurmas(eventoEncontrado.turmas || "");
      setTipo(eventoEncontrado.tipo || "");
      setDescricao(eventoEncontrado.descricao || "");
    } else {
      console.error("EditarEvento: Evento não encontrado para ID:", id);
      alert("Evento não encontrado!");
      navigate('/eventos');
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Objeto com os campos atualizados
    const eventoAtualizado = {
      titulo,
      data,
      horario,
      turmas,
      tipo,
      descricao,
    };

    console.log("EditarEvento: Tentando salvar evento ID:", id, "com dados:", eventoAtualizado);
    const result = updateEvento(id, eventoAtualizado);
    
    if (result) {
      alert("Evento salvo com sucesso!");
      navigate("/eventos");
    } else {
      alert("Erro ao salvar evento. Tente novamente.");
    }
  };

  const handleExcluir = () => {
    if (window.confirm("Tem certeza que deseja excluir este evento?")) {
      deleteEvento(id);
      alert("Evento excluído com sucesso!");
      navigate("/eventos");
    }
  };

  if (!titulo && !data && !horario && id) { // Pequena checagem para evitar piscar quando carrega
    return <div>Carregando evento...</div>;
  }

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
            type="date"
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
            <button type="button" className="btn-excluir" onClick={handleExcluir}>Excluir</button>
            <button type="submit" className="btn-enviar">Salvar</button>
          </div>
        </div>

        <div className="rodape-verde"></div>
      </main>
    </>
  );
}

export default EditarEvento;
