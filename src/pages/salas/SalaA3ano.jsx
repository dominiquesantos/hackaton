// src/pages/SalaA3Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaA3 = [
  { nome: "Adriana Lima", imagem: "/aluno.png" },
  { nome: "Carlos Eduardo Vieira", imagem: "/aluno.png" },
  { nome: "Débora Martins", imagem: "/aluno.png" },
  { nome: "Eduarda Souza", imagem: "/aluno.png" },
  { nome: "Fábio Castro", imagem: "/aluno.png" },
  { nome: "Gisele Rocha", imagem: "/aluno.png" },
  { nome: "Henrique Gonçalves", imagem: "/aluno.png" },
  { nome: "Isadora Almeida", imagem: "/aluno.png" },
  { nome: "João Victor Mendes", imagem: "/aluno.png" },
  { nome: "Kauane Silva", imagem: "/aluno.png" },
  { nome: "Lucas Pereira", imagem: "/aluno.png" },
  { nome: "Maria Eduarda Fernandes", imagem: "/aluno.png" },
  { nome: "Nicolas Henrique", imagem: "/aluno.png" },
  { nome: "Rafaela Soares", imagem: "/aluno.png" },
  { nome: "Vinícius Teixeira", imagem: "/aluno.png" }
];

function SalaA3Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala A – 3º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

     <div className="alunos-lista">

        {alunosSalaA3.map((aluno, index) => (
          <div className="aluno-card" key={index}>
            <img src={aluno.imagem} alt={aluno.nome} />
            <div className="aluno-info">
              <h3>{aluno.nome}</h3>
              <p>Aluno</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalaA3Ano;
