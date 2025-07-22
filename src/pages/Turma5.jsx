// src/pages/Turma5.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Turmas.css";

const salas5 = [
  { nome: "Sala A", alunos: 19, imagem: "/icon.jpg", rota: "/turmas/5ano/salaA" },
  { nome: "Sala B", alunos: 18, imagem: "/icon.jpg", rota: "/turmas/5ano/salaB" },
  { nome: "Sala C", alunos: 21, imagem: "/icon.jpg", rota: "/turmas/5ano/salaC" },
  { nome: "Sala D", alunos: 22, imagem: "/icon.jpg", rota: "/turmas/5ano/salaD" },
];

function Turma5() {
  const navigate = useNavigate();

  return (
    <div className="turmas-container">
      <div className="turmas-header">
        <h1>5º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate("/turmas")}>Voltar</button>
      </div>

      <div className="cards-container">
        {salas5.map((sala, index) => (
          <div
            className="turma-card"
            key={index}
            onClick={() => navigate(sala.rota)}
            style={{ cursor: "pointer" }}
          >
            <img src={sala.imagem} alt={`Sala ${sala.nome}`} />
            <div className="card-info">
              <h3>{sala.nome}</h3>
              <p>{sala.alunos} alunos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Turma5;
