// src/pages/SalaB5Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaB5 = [
  { nome: "Arthur Gomes", imagem: "/aluno.png" },
  { nome: "Bianca Alves", imagem: "/aluno.png" },
  { nome: "Caio Martins", imagem: "/aluno.png" },
  { nome: "Daniela Cruz", imagem: "/aluno.png" },
  { nome: "Eduardo Pinheiro", imagem: "/aluno.png" },
  { nome: "Fernanda Lopes", imagem: "/aluno.png" },
  { nome: "Gabriel Monteiro", imagem: "/aluno.png" },
  { nome: "Helena Dias", imagem: "/aluno.png" },
  { nome: "Igor Ramos", imagem: "/aluno.png" },
  { nome: "Jéssica Freitas", imagem: "/aluno.png" },
  { nome: "Kauan Batista", imagem: "/aluno.png" },
  { nome: "Larissa Braga", imagem: "/aluno.png" },
  { nome: "Marcos Vinícius", imagem: "/aluno.png" },
  { nome: "Nicole Farias", imagem: "/aluno.png" },
  { nome: "Otávio Reis", imagem: "/aluno.png" },
  { nome: "Patrícia Souza", imagem: "/aluno.png" },
  { nome: "Renato Dias", imagem: "/aluno.png" },
  { nome: "Tatiane Costa", imagem: "/aluno.png" },
];

function SalaB5Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala B – 5º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaB5.map((aluno, index) => (
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

export default SalaB5Ano;
