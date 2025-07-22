import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaB1 = [
  { nome: "André Luiz Barbosa", imagem: "/aluno.png" },
  { nome: "Bruno Vinícius Farias", imagem: "/aluno.png" },
  { nome: "Caio Mendes Rocha", imagem: "/aluno.png" },
  { nome: "Camila Torres Nogueira", imagem: "/aluna.png" },
  { nome: "Diego Antunes Correia", imagem: "/img5.png" },
  { nome: "Eduardo Matos Rezende", imagem: "/img6.png" },
  { nome: "Letícia Santos Lima", imagem: "/img7.png" },
  { nome: "Mariana Lopes Alves", imagem: "/img8.png" },
  { nome: "Thiago Moreira Duarte", imagem: "/img9.png" },
  { nome: "Yasmin Gonçalves Ferreira", imagem: "/img10.png" },
  { nome: "Laura Cristina Silva", imagem: "/img11.png" },
  { nome: "Julia Castro Moura", imagem: "/img12.png" },
  { nome: "Henrique Bastos Oliveira", imagem: "/img13.png" },
  { nome: "Vitória Martins Souza", imagem: "/img14.png" },
  { nome: "Lucas Pereira Almeida", imagem: "/img15.png" }
];

function SalaB1Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala B – 1º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaB1.map((aluno, index) => (
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

export default SalaB1Ano;
