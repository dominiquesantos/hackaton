// src/pages/responsavel/TurmasResponsavel.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TurmasResponsavel.css";

function TurmasResponsavel() {
  const navigate = useNavigate();

  const anos = [
    { ano: "1º ano", turmas: "3 Turmas" },
    { ano: "2º ano", turmas: "4 Turmas" },
    { ano: "3º ano", turmas: "4 Turmas" },
    { ano: "4º ano", turmas: "4 Turmas" },
    { ano: "5º ano", turmas: "4 Turmas" },
  ];

  return (
    <div className="turmas-responsavel-container">
      
      <div className="turmas-header">
        <h1>Turmas</h1>
        <button className="voltar-btn" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>

      <div className="cards-grid">
        {anos.map((item, index) => (
          <div className="turma-card" key={index}>
            <img src="/livros.png" alt="Ícone" />
            <div className="card-text">
              <h2>{item.ano}</h2>
              <p>{item.turmas}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TurmasResponsavel;
