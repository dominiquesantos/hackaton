// src/pages/SalaB3Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaB3 = [
  { nome: "Amanda Oliveira", imagem: "/aluno.png" },
  { nome: "Bruno Souza", imagem: "/aluno.png" },
  { nome: "Camila Farias", imagem: "/aluno.png" },
  { nome: "Daniel Rocha", imagem: "/aluno.png" },
  { nome: "Eduardo Lima", imagem: "/aluno.png" },
  { nome: "Fernanda Gomes", imagem: "/aluno.png" },
  { nome: "Gabriel Silva", imagem: "/aluno.png" },
  { nome: "Heloísa Dias", imagem: "/aluno.png" },
  { nome: "Igor Almeida", imagem: "/aluno.png" },
  { nome: "Juliana Reis", imagem: "/aluno.png" },
  { nome: "Kevin Rocha", imagem: "/aluno.png" },
  { nome: "Letícia Martins", imagem: "/aluno.png" },
  { nome: "Marcos Santos", imagem: "/aluno.png" },
  { nome: "Nicole Araújo", imagem: "/aluno.png" },
  { nome: "Otávio Matos", imagem: "/aluno.png" }
];

function SalaB3Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala B – 3º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaB3.map((aluno, index) => (
          <div className="aluno-card" key={index}>
            <img src={aluno.imagem} alt={aluno.nome} />
            <div className="aluno-info">
              <h3>{aluno.nome}</h3>
              <p>Aluno</p>
            </div>
          </div>
        ))}
      </div>
       <footer className="footer">
  <p>Troca Fácil</p>
  <p>A escola e a família caminham juntas.</p>
  <p>Sobre</p>
  <p className="footer-year">2025</p>
</footer>

    </div>
  );
}

export default SalaB3Ano;
