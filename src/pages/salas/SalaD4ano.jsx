// src/pages/SalaD4Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaD4 = [
  { nome: "Ana Paula Silva", imagem: "/aluna.png" },
  { nome: "Breno Rocha", imagem: "/aluno.png" },
  { nome: "Cecília Almeida", imagem: "/aluna.png" },
  { nome: "Diego Santos", imagem: "/aluno.png" },
  { nome: "Elaine Costa", imagem: "/aluna.png" },
  { nome: "Fábio Teixeira", imagem: "/aluno.png" },
  { nome: "Gisele Martins", imagem: "/aluna.png" },
  { nome: "Hélio Vieira", imagem: "/aluno.png" },
  { nome: "Íris Moreira", imagem: "/aluna.png" },
  { nome: "João Lucas Lima", imagem: "/aluno.png" },
  { nome: "Karla Ribeiro", imagem: "/aluna.png" },
  { nome: "Lucas Henrique", imagem: "/aluno.png" },
  { nome: "Marcela Freitas", imagem: "/aluna.png" },
  { nome: "Nilson Ramos", imagem: "/aluno.png" },
  { nome: "Olívia Fernandes", imagem: "/aluna.png" }
];

function SalaD4Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala D – 4º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaD4.map((aluno, index) => (
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

export default SalaD4Ano;
