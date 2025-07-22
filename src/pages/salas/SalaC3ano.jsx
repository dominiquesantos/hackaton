// src/pages/SalaC3Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaC3 = [
  { nome: "Ana Paula Ferreira", imagem: "/aluno.png" },
  { nome: "Bruna Andrade", imagem: "/aluno.png" },
  { nome: "Caio Vitoriano", imagem: "/aluno.png" },
  { nome: "Daniela Cunha", imagem: "/aluno.png" },
  { nome: "Enzo Gabriel Melo", imagem: "/aluno.png" },
  { nome: "Fátima Reis", imagem: "/aluno.png" },
  { nome: "Giovanni Oliveira", imagem: "/aluno.png" },
  { nome: "Helena Miranda", imagem: "/aluno.png" },
  { nome: "Iasmim Barbosa", imagem: "/aluno.png" },
  { nome: "João Pedro Lima", imagem: "/aluno.png" },
  { nome: "Karen Ribeiro", imagem: "/aluno.png" },
  { nome: "Leonardo Nunes", imagem: "/aluno.png" },
  { nome: "Milena Costa", imagem: "/aluno.png" },
  { nome: "Natália Gomes", imagem: "/aluno.png" },
  { nome: "Otto Henrique", imagem: "/aluno.png" }
];

function SalaC3Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala C – 3º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaC3.map((aluno, index) => (
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

export default SalaC3Ano;
