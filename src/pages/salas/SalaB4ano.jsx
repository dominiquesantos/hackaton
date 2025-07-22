// src/pages/SalaB4Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaB4 = [
  { nome: "Amanda Ribeiro", imagem: "/aluna.png" },
  { nome: "Bruno Henrique", imagem: "/aluno.png" },
  { nome: "Camila Santos", imagem: "/aluna.png" },
  { nome: "Diego Oliveira", imagem: "/aluno.png" },
  { nome: "Eduardo Carvalho", imagem: "/aluno.png" },
  { nome: "Fernanda Matos", imagem: "/aluna.png" },
  { nome: "Giovana Lima", imagem: "/aluna.png" },
  { nome: "Hugo Almeida", imagem: "/aluno.png" },
  { nome: "Ítalo Silva", imagem: "/aluno.png" },
  { nome: "Juliana Costa", imagem: "/aluna.png" },
  { nome: "Kauã Teixeira", imagem: "/aluno.png" },
  { nome: "Lucas Martins", imagem: "/aluno.png" },
  { nome: "Mariana Rocha", imagem: "/aluna.png" },
  { nome: "Nicole Freitas", imagem: "/aluna.png" },
  { nome: "Otávio Nascimento", imagem: "/aluno.png" }
];

function SalaB4Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala B – 4º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaB4.map((aluno, index) => (
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

export default SalaB4Ano;
