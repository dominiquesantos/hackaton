// src/pages/Turma3.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Turmas.css";

const salas3 = [
  { nome: "Sala A", alunos: 14, imagem: "/icon.jpg", rota: "salaA" },
  { nome: "Sala B", alunos: 15, imagem: "/icon.jpg", rota: "salaB" },
  { nome: "Sala C", alunos: 13, imagem: "/icon.jpg", rota: "salaC" },
  { nome: "Sala D", alunos: 14, imagem: "/icon.jpg", rota: "salaD" },
];

function Turma3() {
  const navigate = useNavigate();

  return (
    <div className="turmas-container">
      <div className="turmas-header">
        <h1>3º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate("/turmas")}>Voltar</button>
      </div>

      <div className="cards-container">
        {salas3.map((sala, index) => (
          <div
            className="turma-card"
            key={index}
            onClick={() => navigate(`/turmas/3ano/${sala.rota}`)}
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

export default Turma3;
