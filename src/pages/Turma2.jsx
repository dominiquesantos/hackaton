// src/pages/Turma2.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Turmas.css";

const salas2 = [
  { nome: "Sala A", alunos: 15, imagem: "/icon.jpg", rota: "/turmas/2ano/salaA" },
  { nome: "Sala B", alunos: 13, imagem: "/icon.jpg", rota: "/turmas/2ano/salaB" },
  { nome: "Sala C", alunos: 15, imagem: "/icon.jpg", rota: "/turmas/2ano/salaC" },
  { nome: "Sala D", alunos: 13, imagem: "/icon.jpg", rota: "/turmas/2ano/salaD" },
];

function Turma2() {
  const navigate = useNavigate();

  return (
    <div className="turmas-container">
      <div className="turmas-header">
        <h1>2º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate("/turmas")}>Voltar</button>
      </div>

      <div className="cards-container">
        {salas2.map((sala, index) => (
          <div
            className="turma-card"
            key={index}
            onClick={() => navigate(sala.rota)}
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

export default Turma2;
