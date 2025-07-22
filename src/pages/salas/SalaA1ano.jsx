// src/pages/SalaA1Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaA1 = [
  { nome: "Ana Beatriz Ferreira", imagem: "/aluna.png" },
  { nome: "Davi Luiz Rocha", imagem: "/aluno.png" },
  { nome: "Enzo Matheus Carvalho", imagem: "/aluno.png" },
  { nome: "Felipe Gabriel Mendes", imagem: "/aluno.png" },
  { nome: "Fernanda Maria Oliveira", imagem: "/aluna.png" },
  { nome: "Guilherme Alves Costa", imagem: "/aluno.png" },
  { nome: "Giovanna Lopes Araújo", imagem: "/aluna.png" },
  { nome: "Helena Martins Souza", imagem: "/aluna.png" },
  { nome: "Isabela Moura da Silva", imagem: "/aluna.png" },
  { nome: "João Gabriel dos Santos", imagem: "/aluno.png" },
  { nome: "Kauã Vinícius Teixeira", imagem: "/aluno.png" },
  { nome: "Manuela Rocha Tavares", imagem: "/aluna.png" },
  { nome: "Matheus Emanuel Ribeiro", imagem: "/aluno.png" },
  { nome: "Pedro Henrique Oliveira", imagem: "/aluno.png" },
  { nome: "Sofia Vitória Andrade", imagem: "/aluna.png" }
];

function SalaA1Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala A – 1º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaA1.map((aluno, index) => (
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

export default SalaA1Ano;
