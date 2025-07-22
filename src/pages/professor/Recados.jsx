// src/pages/professor/Recados.jsx (Ajustei o caminho da pasta para professor)
import React, { useState, useEffect } from "react"; // Adicionado React, useState, useEffect
import "../../styles/Recados.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { getRecados, deleteRecado } from "../../services/dataService"; // Importa funções do dataService

function Recados() {
  const navigate = useNavigate();
  const [recados, setRecados] = useState([]); // Usar estado para gerenciar os recados
  const [busca, setBusca] = useState("");

  // Carrega os recados do dataService ao montar o componente
  useEffect(() => {
    setRecados(getRecados());
  }, []);

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este recado?")) {
      const novaLista = deleteRecado(id); // Exclui e obtém a nova lista
      setRecados(novaLista); // Atualiza o estado
      alert("Recado excluído com sucesso!");
    }
  };

  // Filtra recados com base na busca
  const recadosFiltrados = recados.filter(
    (recado) =>
      recado.nome.toLowerCase().includes(busca.toLowerCase()) || // Filtrar por nome (aluno)
      recado.turma.toLowerCase().includes(busca.toLowerCase()) || // Filtrar por turma
      recado.texto.toLowerCase().includes(busca.toLowerCase()) // Filtrar por conteúdo
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
              <div key={recado.id} className="recado-card"> {/* Usar recado.id como key */}
                <h3>{recado.nome} – {recado.turma}</h3>
                <p className="tempo">Recado enviado em {new Date(recado.dataCriacao).toLocaleDateString()}</p> {/* Exibir data de criação */}
                <p>{recado.texto}</p>
                {/* Professor pode não ter campo professora, então removi */}

                <div className="recado-actions">
                  <button 
                    className="editar-btn" 
                    onClick={() => navigate(`/recados/editar/${recado.id}`)} // Navegar para a rota de edição
                  >
                    Editar
                  </button>
                  <button 
                    className="excluir-btn" 
                    onClick={() => handleExcluir(recado.id)} // Chamar função de exclusão
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