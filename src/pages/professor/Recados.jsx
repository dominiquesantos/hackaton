
import React, { useState, useEffect } from "react"; 
import "../../styles/Recados.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { getRecados, deleteRecado } from "../../services/dataService"; 

function Recados() {
  const navigate = useNavigate();
  const [recados, setRecados] = useState([]); 
  const [busca, setBusca] = useState("");

  
  useEffect(() => {
    setRecados(getRecados());
  }, []);

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este recado?")) {
      const novaLista = deleteRecado(id); 
      setRecados(novaLista);
      alert("Recado excluído com sucesso!");
    }
  };

  
  const recadosFiltrados = recados.filter(
    (recado) =>
      recado.nome.toLowerCase().includes(busca.toLowerCase()) || 
      recado.turma.toLowerCase().includes(busca.toLowerCase()) || 
      recado.texto.toLowerCase().includes(busca.toLowerCase()) 
  );

  return (
    <div className="recados-container">
      <Header />

      <div className="recados-top-bar">
        <h1>Recados <span className="icon">👥</span></h1>
        <div className="barra-pesquisa">
          <input
            type="text"
            placeholder="Pesquise uma turma ou aluno"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <span className="lupa">🔍</span>
        </div>
      </div>

      <div className="recados-conteudo">
        <div className="recados-list">
          {recadosFiltrados.length === 0 ? (
            <p>Nenhum recado encontrado.</p>
          ) : (
            recadosFiltrados.map((recado) => (
              <div key={recado.id} className="recado-card"> 
                <h3>{recado.nome} – {recado.turma}</h3>
                <p className="tempo">Recado enviado em {new Date(recado.dataCriacao).toLocaleDateString()}</p> 
                <p>{recado.texto}</p>
                

                <div className="recado-actions">
                  <button 
                    className="editar-btn" 
                    onClick={() => navigate(`/recados/editar/${recado.id}`)} 
                  >
                    Editar
                  </button>
                  <button 
                    className="excluir-btn" 
                    onClick={() => handleExcluir(recado.id)} 
                  >
                    Excluir
                  </button>
                </div>

                <div className="status-leitura">
                  {recado.protegido && <span className="tag-protegido">🔒 Protegido</span>}
                  <span className="tag-lido">
                    {recado.lido ? "✅ Lido" : "❌ Não Lido"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="coluna-lateral">
          <button className="novo-recado" onClick={() => navigate("/recados/novo")}>
            Criar Novo Recado
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recados;
