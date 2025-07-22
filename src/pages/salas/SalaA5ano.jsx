// src/pages/SalaA5Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaA5 = [
  { nome: "Amanda Ferreira", imagem: "/aluno.png" },
  { nome: "Bruno Oliveira", imagem: "/aluno.png" },
  { nome: "Camila Souza", imagem: "/aluno.png" },
  { nome: "Daniel Rocha", imagem: "/aluno.png" },
  { nome: "Eduarda Lima", imagem: "/aluno.png" },
  { nome: "Felipe Almeida", imagem: "/aluno.png" },
  { nome: "Gabriela Teixeira", imagem: "/aluno.png" },
  { nome: "Henrique Silva", imagem: "/aluno.png" },
  { nome: "Isabela Moura", imagem: "/aluno.png" },
  { nome: "João Pedro Costa", imagem: "/aluno.png" },
  { nome: "Karina Monteiro", imagem: "/aluno.png" },
  { nome: "Lucas Nascimento", imagem: "/aluno.png" },
  { nome: "Manuela Martins", imagem: "/aluno.png" },
  { nome: "Natália Ribeiro", imagem: "/aluno.png" },
  { nome: "Otávio Santos", imagem: "/aluno.png" },
  { nome: "Paula Vieira", imagem: "/aluno.png" },
  { nome: "Rafael Cunha", imagem: "/aluno.png" },
  { nome: "Sofia Barros", imagem: "/aluno.png" },
  { nome: "Vinícius Carvalho", imagem: "/aluno.png" },
];

function SalaA5Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala A – 5º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

     <div className="alunos-lista">
        {alunosSalaA5.map((aluno, index) => (
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

export default SalaA5Ano;
