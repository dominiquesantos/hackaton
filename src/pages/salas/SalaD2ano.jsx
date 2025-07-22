// src/pages/SalaD2ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaD2 = [
  { nome: "Lucas Mendes", imagem: "/aluno.png" },
  { nome: "Maria Eduarda Souza", imagem: "/aluna.png" },
  { nome: "João Pedro Lima", imagem: "/aluno.png" },
  { nome: "Larissa Ferreira", imagem: "/aluna.png" },
  { nome: "Gabriel Santos", imagem: "/aluno.png" },
  { nome: "Isabela Cardoso", imagem: "/aluna.png" },
  { nome: "Matheus Costa", imagem: "/aluno.png" },
  { nome: "Aline Martins", imagem: "/aluna.png" },
  { nome: "Rafael Nunes", imagem: "/aluno.png" },
  { nome: "Juliana Ramos", imagem: "/aluna.png" },
  { nome: "Carlos Henrique Dias", imagem: "/aluno.png" },
  { nome: "Patrícia Almeida", imagem: "/aluna.png" },
  { nome: "Vinícius Teixeira", imagem: "/aluno.png" },
  { nome: "Bianca Rocha", imagem: "/aluna.png" },
  { nome: "André Luiz Moura", imagem: "/aluno.png" }
];

function SalaD2ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala D – 2º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaD2.map((aluno, index) => (
          <div className="aluno-card" key={index}>
            <img src={aluno.imagem} alt="Aluno" />
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

export default SalaD2ano;
