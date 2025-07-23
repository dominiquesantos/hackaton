// src/pages/professor/EditarRecado.jsx
import React, { useState, useEffect } from "react";
import "../../styles/NovoRecado.css"; 
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { getRecadoById, updateRecado, deleteRecado } from "../../services/dataService";

function EditarRecado() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  
  const [aluno, setAluno] = useState("");
  const [turma, setTurma] = useState("");
  const [recadoTexto, setRecadoTexto] = useState("");
  const [protegido, setProtegido] = useState(false);

  
  useEffect(() => {
    console.log("EditarRecado: Tentando carregar recado com ID:", id);
    const recadoEncontrado = getRecadoById(id);
    if (recadoEncontrado) {
      console.log("EditarRecado: Recado encontrado:", recadoEncontrado);
      setAluno(recadoEncontrado.nome || ""); 
      setTurma(recadoEncontrado.turma || "");
      setRecadoTexto(recadoEncontrado.texto || "");
      setProtegido(recadoEncontrado.protegido || false);
    } else {
      console.error("EditarRecado: Recado não encontrado para ID:", id);
      alert("Recado não encontrado!");
      navigate('/recados');
    }
  }, [id, navigate]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const recadoAtualizado = {
      nome: aluno,
      turma,
      texto: recadoTexto,
      protegido,
    };

    console.log("EditarRecado: Tentando salvar recado ID:", id, "com dados:", recadoAtualizado);
    const result = updateRecado(id, recadoAtualizado); 
    
    if (result) {
      alert("Recado salvo com sucesso!");
      navigate("/recados"); 
    } else {
      alert("Erro ao salvar recado. Tente novamente.");
    }
  };

  const handleExcluir = () => {
    if (window.confirm("Tem certeza que deseja excluir este recado?")) {
      deleteRecado(id);
      alert("Recado excluído com sucesso!");
      navigate("/recados");
    }
  };

  
  if (!aluno && !turma && !recadoTexto && id) { 
    return <div>Carregando recado...</div>;
  }

  return (
    <div className="novo-recado-container">
      <Header />

      <div className="voltar-btn-wrapper">
        <button className="botao-voltar" onClick={() => navigate("/recados")}>
          Voltar
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
          <label htmlFor="aluno">Aluno</label>
          <input
            type="text"
            id="aluno"
            name="aluno"
            className="input"
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
          <button type="button" className="botao-excluir" onClick={handleExcluir}>Excluir</button>
          <button type="submit" className="botao-enviar">Salvar</button>
        </div>
      </form>

      <div className="footer-bar"></div>
    </div>
  );
}

export default EditarRecado;
