// src/pages/SalaA4Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaA4 = [
  { nome: "Aline Souza", imagem: "/aluna.png" },
  { nome: "Bruno Martins", imagem: "/aluno.png" },
  { nome: "Carolina Mendes", imagem: "/aluna.png" },
  { nome: "Daniel Costa", imagem: "/aluno.png" },
  { nome: "Eduarda Lima", imagem: "/aluna.png" },
  { nome: "Felipe Rocha", imagem: "/aluno.png" },
  { nome: "Gabriela Santos", imagem: "/aluna.png" },
  { nome: "Henrique Almeida", imagem: "/aluno.png" },
  { nome: "Isadora Ribeiro", imagem: "/aluna.png" },
  { nome: "João Vitor Teixeira", imagem: "/aluno.png" },
  { nome: "Larissa Oliveira", imagem: "/aluna.png" },
  { nome: "Marcelo Fernandes", imagem: "/aluno.png" },
  { nome: "Natália Moraes", imagem: "/aluna.png" },
  { nome: "Otávio Silva", imagem: "/aluno.png" },
  { nome: "Priscila Andrade", imagem: "/aluna.png" }
];

function SalaA4Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala A – 4º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

     <div className="alunos-lista">
        {alunosSalaA4.map((aluno, index) => (
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

export default SalaA4Ano;
