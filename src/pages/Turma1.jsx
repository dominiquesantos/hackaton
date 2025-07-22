// src/pages/Turma1.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Turmas.css";

const salas = [
  { nome: "Sala A", alunos: 15, imagem: "/icon.jpg", rota: "/turmas/1ano/salaA" },
  { nome: "Sala B", alunos: 24, imagem: "/icon.jpg", rota: "/turmas/1ano/salaB" },
  { nome: "Sala C", alunos: 24, imagem: "/icon.jpg", rota: "/turmas/1ano/salaC" },
];

function Turma1() {
  const navigate = useNavigate();

  return (
    <div className="turmas-container">
      <div className="turmas-header">
        <h1>1º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate("/turmas")}>Voltar</button>
      </div>

      <div className="cards-container">
        {salas.map((sala, index) => (
          <div
            className="turma-card"
            key={index}
            onClick={() => navigate(sala.rota)}
            style={{ cursor: "pointer" }}
          >
            <img src={sala.imagem} alt="Sala" />
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

export default Turma1;
