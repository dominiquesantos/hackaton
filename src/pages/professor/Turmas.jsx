import { useNavigate } from "react-router-dom";
import "../../styles/Turmas.css";

const anos = [
  { ano: "1º ano", turmas: 3 },
  { ano: "2º ano", turmas: 4 },
  { ano: "3º ano", turmas: 4 },
  { ano: "4º ano", turmas: 4 },
  { ano: "5º ano", turmas: 4 },
];

function Turmas() {
  const navigate = useNavigate();

  return (
    <div className="turmas-container">
      <div className="turmas-header">
        <h1>Turmas <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate("/home")}>Voltar</button>
      </div>

      <div className="cards-container">
        {anos.map((item, index) => (
          <div
            className="turma-card"
            key={index}
            onClick={() => navigate(`/turmas/${item.ano.replace("º ano", "ano")}`)}
          >
            <img src="/livros.png" alt="Turma" />
            <div className="card-info">
              <h3>{item.ano}</h3>
              <p>{item.turmas} Turmas</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Turmas;
