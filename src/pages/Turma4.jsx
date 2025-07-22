// src/pages/Turma4.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Turmas.css";

const salas4 = [
  { nome: "Sala A", alunos: 16, imagem: "/icon.jpg", rota: "/turmas/4ano/salaA" },
  { nome: "Sala B", alunos: 15, imagem: "/icon.jpg", rota: "/turmas/4ano/salaB" },
  { nome: "Sala C", alunos: 14, imagem: "/icon.jpg", rota: "/turmas/4ano/salaC" },
  { nome: "Sala D", alunos: 14, imagem: "/icon.jpg", rota: "/turmas/4ano/salaD" },
];

function Turma4() {
  const navigate = useNavigate();

  return (
    <div className="turmas-container">
      <div className="turmas-header">
        <h1>4º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate("/turmas")}>Voltar</button>
      </div>

      <div className="cards-container">
        {salas4.map((sala, index) => (
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

export default Turma4;
