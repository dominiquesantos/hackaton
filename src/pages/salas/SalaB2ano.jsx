// src/pages/SalaB2Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaB2 = [
  { nome: "Matheus Lima", imagem: "/img1.png" },
  { nome: "Isadora Mendes", imagem: "/img2.png" },
  { nome: "Thiago Ribeiro", imagem: "/img3.png" },
  { nome: "Laura Cardoso", imagem: "/img4.png" },
  { nome: "Bruno Cavalcante", imagem: "/img5.png" },
  { nome: "Júlia Martins", imagem: "/img6.png" },
  { nome: "Henrique Alves", imagem: "/img7.png" },
  { nome: "Sofia Lima", imagem: "/img8.png" },
  { nome: "Amanda Vitória Barbosa", imagem: "/aluno.png" },
  { nome: "Nathan Oliveira", imagem: "/aluno.png" },
  { nome: "Tiago Nascimento", imagem: "/aluno.png" },
  { nome: "Wesley Araújo", imagem: "/aluno.png" },
  { nome: "Yasmin da Silva", imagem: "/aluno.png" }
  
];

function SalaB2Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala B – 2º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaB2.map((aluno, index) => (
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

export default SalaB2Ano;
