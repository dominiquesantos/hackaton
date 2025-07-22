// src/pages/SalaC5Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaC5 = [
  { nome: "Aline Castro", imagem: "/aluno.png" },
  { nome: "Bruno Costa", imagem: "/aluno.png" },
  { nome: "Carla Meireles", imagem: "/aluno.png" },
  { nome: "Diogo Lima", imagem: "/aluno.png" },
  { nome: "Eduarda Fernandes", imagem: "/aluno.png" },
  { nome: "Fábio Silva", imagem: "/aluno.png" },
  { nome: "Giovana Ribeiro", imagem: "/aluno.png" },
  { nome: "Heitor Rocha", imagem: "/aluno.png" },
  { nome: "Isadora Vasconcelos", imagem: "/aluno.png" },
  { nome: "João Guilherme", imagem: "/aluno.png" },
  { nome: "Kátia Nunes", imagem: "/aluno.png" },
  { nome: "Leandro Campos", imagem: "/aluno.png" },
  { nome: "Mariana Prado", imagem: "/aluno.png" },
  { nome: "Nicolas Barros", imagem: "/aluno.png" },
  { nome: "Olívia Borges", imagem: "/aluno.png" },
  { nome: "Paulo Henrique", imagem: "/aluno.png" },
  { nome: "Quésia Araújo", imagem: "/aluno.png" },
  { nome: "Rafaela Lima", imagem: "/aluno.png" },
  { nome: "Samuel Batista", imagem: "/aluno.png" },
  { nome: "Thaís Mendonça", imagem: "/aluno.png" },
  { nome: "Vinícius Dantas", imagem: "/aluno.png" },
];

function SalaC5Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala C – 5º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaC5.map((aluno, index) => (
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

export default SalaC5Ano;
