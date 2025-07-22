
import React, { useState } from "react"; 
import "../../styles/NovoRecado.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { addRecado } from "../../services/dataService"; 

function NovoRecado() {
  const navigate = useNavigate();
  const [aluno, setAluno] = useState(""); 
  const [turma, setTurma] = useState("");
  const [recadoTexto, setRecadoTexto] = useState(""); 
  const [protegido, setProtegido] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Objeto do novo recado
    const novoRecado = {
      nome: aluno, 
      turma: turma,
      texto: recadoTexto,
      protegido: protegido,
      lido: false, 
    };

    addRecado(novoRecado); 

    alert("Recado criado com sucesso!");
    navigate("/recados"); 
  };

  return (
    <div className="novo-recado-container">
      <Header />

      <div className="voltar-btn-wrapper">
        <button className="botao-voltar" onClick={() => navigate("/recados")}> 
        </button>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="turma">Turma/Sala</label>
          <select 
            id="turma" 
            name="turma" 
            className="input"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1º ano Sala A">1º ano Sala A</option>
            <option value="1º ano Sala B">1º ano Sala B</option>
            <option value="1º ano Sala C">1º ano Sala C</option>
            <option value="2º ano Sala A">2º ano Sala A</option>
            <option value="2º ano Sala B">2º ano Sala B</option>
            <option value="2º ano Sala C">2º ano Sala C</option>
            <option value="2º ano Sala D">2º ano Sala D</option>
            <option value="3º ano Sala A">3º ano Sala A</option>
            <option value="3º ano Sala B">3º ano Sala B</option>
            <option value="3º ano Sala C">3º ano Sala C</option>
            <option value="3º ano Sala D">3º ano Sala D</option>
            <option value="4º ano Sala A">4º ano Sala A</option>
            <option value="4º ano Sala B">4º ano Sala B</option>
            <option value="4º ano Sala C">4º ano Sala C</option>
            <option value="4º ano Sala D">4º ano Sala D</option>
            <option value="5º ano Sala A">5º ano Sala A</option>
            <option value="5º ano Sala B">5º ano Sala B</option>
            <option value="5º ano Sala C">5º ano Sala C</option>
            <option value="5º ano Sala D">5º ano Sala D</option>
          </select>
        </div>

        <div>
          <label htmlFor="aluno">Aluno (Nome Completo)</label>
          <input
            type="text"
            id="aluno"
            name="aluno"
            className="input"
            placeholder="Nome do aluno"
            value={aluno}
            onChange={(e) => setAluno(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="recado">Recado</label>
          <textarea
            id="recado"
            name="recado"
            className="textarea"
            rows="6"
            placeholder="Digite o recado..."
            value={recadoTexto}
            onChange={(e) => setRecadoTexto(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group checkbox-group"> 
            <input
              type="checkbox"
              id="protegido"
              checked={protegido}
              onChange={(e) => setProtegido(e.target.checked)}
            />
            <label htmlFor="protegido">Recado Protegido por Senha?</label>
          </div>

        <div className="botoes-acao">
         
          <button type="submit" className="botao-enviar">Publicar</button>
        </div>
      </form>

      <div className="footer-bar"></div>
    </div>
  );
}

export default NovoRecado;