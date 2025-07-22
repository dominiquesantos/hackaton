// src/pages/SalaC4Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaC4 = [
  { nome: "André Silva", imagem: "/aluno.png" },
  { nome: "Bianca Souza", imagem: "/aluna.png" },
  { nome: "Caio Mendes", imagem: "/aluno.png" },
  { nome: "Daniela Rocha", imagem: "/aluna.png" },
  { nome: "Eduardo Santos", imagem: "/aluno.png" },
  { nome: "Fabiana Lima", imagem: "/aluna.png" },
  { nome: "Gustavo Freitas", imagem: "/aluno.png" },
  { nome: "Helena Duarte", imagem: "/aluna.png" },
  { nome: "Isabel Fernandes", imagem: "/aluna.png" },
  { nome: "João Pedro Martins", imagem: "/aluno.png" },
  { nome: "Karina Moura", imagem: "/aluna.png" },
  { nome: "Leonardo Alves", imagem: "/aluno.png" },
  { nome: "Milena Costa", imagem: "/aluna.png" },
  { nome: "Natanael Pereira", imagem: "/aluno.png" },
  { nome: "Otávia Ramos", imagem: "/aluna.png" }
];

function SalaC4Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala C – 4º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaC4.map((aluno, index) => (
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

export default SalaC4Ano;
