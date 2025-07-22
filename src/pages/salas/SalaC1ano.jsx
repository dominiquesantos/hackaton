import { useNavigate } from "react-router-dom";
import "../../styles/Alunos.css";

const alunosSalaC1 = [
  { nome: "Amanda Ribeiro Santos", imagem: "/img1.png" },
  { nome: "Carlos Eduardo Lima", imagem: "/img2.png" },
  { nome: "Beatriz Moura Andrade", imagem: "/img3.png" },
  { nome: "Ricardo Souza Ferreira", imagem: "/img4.png" },
  { nome: "Clara Machado Dias", imagem: "/img5.png" },
  { nome: "Vinícius Cardoso Teixeira", imagem: "/img6.png" },
  { nome: "Larissa Nunes Oliveira", imagem: "/img7.png" },
  { nome: "Rafael Gomes Prado", imagem: "/img8.png" },
  { nome: "Aline Castro Figueira", imagem: "/img9.png" },
  { nome: "Igor Fernandes Lima", imagem: "/img10.png" },
  { nome: "Natália Pires Costa", imagem: "/img11.png" },
  { nome: "Fábio Moreira Diniz", imagem: "/img12.png" },
  { nome: "Tatiane Rocha Silva", imagem: "/img13.png" },
  { nome: "Bruna Alves Tavares", imagem: "/img14.png" },
  { nome: "Otávio Martins Souza", imagem: "/img15.png" }
];

function SalaC1Ano() {
  const navigate = useNavigate();

  return (
    <div className="alunos-container">
      <div className="alunos-header">
        <h1>Sala C – 1º ano <span className="icon">👥</span></h1>
        <button className="voltar-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>

<div className="alunos-lista">
        {alunosSalaC1.map((aluno, index) => (
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

export default SalaC1Ano;
