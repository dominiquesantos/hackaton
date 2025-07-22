// src/pages/SalaC2Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaC2 = [
  { nome: "Heitor Souza", imagem: "/img1.png" },
  { nome: "Gabriela Moura", imagem: "/img2.png" },
  { nome: "Daniel Silva", imagem: "/img3.png" },
  { nome: "Lívia Moreira", imagem: "/img4.png" },
  { nome: "Caio Fernandes", imagem: "/img5.png" },
  { nome: "Vitória Nascimento", imagem: "/img6.png" },
  { nome: "Samuel Borges", imagem: "/img7.png" }
];

function SalaC2Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala C – 2º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaC2.map((aluno, index) => (
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

export default SalaC2Ano;
