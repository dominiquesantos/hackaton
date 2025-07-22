// src/pages/SalaD3Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaD3 = [
  { nome: "Alana Ferreira", imagem: "/aluno.png" },
  { nome: "Beatriz Vieira", imagem: "/aluno.png" },
  { nome: "Caio Mendes", imagem: "/aluno.png" },
  { nome: "Davi Teixeira", imagem: "/aluno.png" },
  { nome: "Eloá Almeida", imagem: "/aluno.png" },
  { nome: "Felipe Gonçalves", imagem: "/aluno.png" },
  { nome: "Gabriela Lopes", imagem: "/aluno.png" },
  { nome: "Hugo Santos", imagem: "/aluno.png" },
  { nome: "Isaque Matos", imagem: "/aluno.png" },
  { nome: "Joana Reis", imagem: "/aluno.png" },
  { nome: "Kauan Viana", imagem: "/aluno.png" },
  { nome: "Larissa Rocha", imagem: "/aluno.png" },
  { nome: "Maurício Xavier", imagem: "/aluno.png" },
  { nome: "Nayara Fernandes", imagem: "/aluno.png" },
  { nome: "Otávia Martins", imagem: "/aluno.png" }
];

function SalaD3Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala D – 3º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaD3.map((aluno, index) => (
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

export default SalaD3Ano;
