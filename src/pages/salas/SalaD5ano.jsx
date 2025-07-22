// src/pages/SalaD5Ano.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaD5 = [
  { nome: "Ana Júlia Ferreira", imagem: "/aluno.png" },
  { nome: "Bruno Almeida", imagem: "/aluno.png" },
  { nome: "Caroline Moura", imagem: "/aluno.png" },
  { nome: "Diego Fernandes", imagem: "/aluno.png" },
  { nome: "Elisa Costa", imagem: "/aluno.png" },
  { nome: "Fernando Duarte", imagem: "/aluno.png" },
  { nome: "Gabrielly Matos", imagem: "/aluno.png" },
  { nome: "Henrique Torres", imagem: "/aluno.png" },
  { nome: "Iara Cristina", imagem: "/aluno.png" },
  { nome: "João Miguel Teixeira", imagem: "/aluno.png" },
  { nome: "Kauã Lopes", imagem: "/aluno.png" },
  { nome: "Larissa Dias", imagem: "/aluno.png" },
  { nome: "Marcelo Fonseca", imagem: "/aluno.png" },
  { nome: "Natália Amorim", imagem: "/aluno.png" },
  { nome: "Otávio Ribeiro", imagem: "/aluno.png" },
  { nome: "Pietra Campos", imagem: "/aluno.png" },
  { nome: "Quirino Martins", imagem: "/aluno.png" },
  { nome: "Rafael Azevedo", imagem: "/aluno.png" },
  { nome: "Sabrina Lopes", imagem: "/aluno.png" },
  { nome: "Talita Silva", imagem: "/aluno.png" },
  { nome: "Uelton Moura", imagem: "/aluno.png" },
  { nome: "Viviane Castro", imagem: "/aluno.png" },
];

function SalaD5Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala D – 5º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaD5.map((aluno, index) => (
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

export default SalaD5Ano;
