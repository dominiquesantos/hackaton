// src/pages/SalaA2Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaA2 = [
  { nome: "Ana Júlia Fernandes Rocha", imagem: "/aluna.png" },
  { nome: "Aline Rocha", imagem: "/aluna.png" },
  { nome: "Beatriz Santos", imagem: "/aluna.png" },
  { nome: "Bruno Silva dos Santos", imagem: "/aluno.png" },
  { nome: "Camila Ferreira", imagem: "/aluna.png" },
  { nome: "Carlos Eduardo Lima", imagem: "/aluno.png" },
  { nome: "Daniel Souza", imagem: "/aluno.png" },
  { nome: "Eduarda Almeida", imagem: "/aluna.png" },
  { nome: "Fernanda Martins", imagem: "/aluna.png" },
  { nome: "Gustavo Henrique", imagem: "/aluno.png" },
  { nome: "Helena Costa", imagem: "/aluna.png" },
  { nome: "Igor Pereira", imagem: "/aluno.png" },
  { nome: "Joana Figueiredo", imagem: "/aluna.png" },
  { nome: "Larissa Alves", imagem: "/aluna.png" },
  { nome: "Matheus Rocha", imagem: "/aluno.png" }
];


function SalaA2Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala A – 2º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaA2.map((aluno, index) => (
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

export default SalaA2Ano;
