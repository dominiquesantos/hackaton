// src/pages/responsavel/RecadosResponsavel.jsx
import React, { useState, useEffect } from "react"; // Adicionado useEffect
import "../../styles/RecadosResponsavel.css";
import "../../styles/global.css";
import { getRecados, updateRecado } from "../../services/dataService"; // Importa as funções
import { Link } from "react-router-dom"; // Importa Link

function RecadosResponsavel() {
  const [recados, setRecados] = useState([]); // Usar estado para gerenciar recados
  const [recadoAbertoId, setRecadoAbertoId] = useState(null); // ID do recado aberto (melhor que index)
  const [senha, setSenha] = useState("");
  const [busca, setBusca] = useState("");

  // Carrega os recados do dataService quando o componente é montado
  useEffect(() => {
    setRecados(getRecados());
  }, []);

  const autenticar = (id) => { // Recebe o ID do recado
    if (senha === "1234") { // Senha fixa para fins de demonstração
      setRecadoAbertoId(id); // Define o ID do recado que pode ser visto
      setSenha(""); // Limpa a senha para a próxima vez
    } else {
      alert("Senha incorreta!");
    }
  };

  const marcarComoLido = (id) => { // Recebe o ID do recado
    // Atualiza o recado no dataService
    const updatedRecado = updateRecado(id, { lido: true });
    
    if (updatedRecado) {
      // Atualiza o estado local para forçar a re-renderização
      setRecados(prevRecados => 
        prevRecados.map(rec => 
          rec.id === id ? { ...rec, lido: true } : rec
        )
      );
      alert("Recado marcado como lido!");
    }
  };

  // Filtra recados com base na busca
  const recadosFiltrados = recados.filter(
    (recado) =>
      recado.nome.toLowerCase().includes(busca.toLowerCase()) ||
      recado.turma.toLowerCase().includes(busca.toLowerCase()) ||
      recado.texto.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="recados-responsavel">
      {/* Header igual ao da home */}
      <header className="responsavel-header">
        <div className="container">
          <div className="logo">Troca Fácil</div>
          <nav>
            <Link to="/">Home</Link> {/* Usar Link para navegação SPA */}
            <Link to="/eventos">Eventos</Link>
            <Link to="/responsavel/turmas">Turmas</Link>
            <Link to="/responsavel/recados">Recados</Link>
            <Link to="/login" className="login-button">Login</Link>
          </nav>
        </div>
      </header>

      {/* Faixa verde com busca */}
      <div className="faixa-verde">
        <div className="container">
          <h1>Recados</h1>
          <input
            className="campo-busca"
            type="text"
            placeholder="Pesquise uma turma ou aluno"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="recados-lista">
          {recadosFiltrados.length === 0 ? (
            <p>Nenhum recado disponível.</p>
          ) : (
            recadosFiltrados.map((recado) => (
              <div className="card-recado" key={recado.id}> {/* Usar recado.id como key */}
                <div className="cabecalho-card">
                  <strong>{recado.nome} – {recado.turma}</strong>
                  {recado.protegido ? (
                    recadoAbertoId === recado.id ? ( // Checa se este recado está aberto
                      <button className="botao-lido" onClick={() => marcarComoLido(recado.id)}>
                        {recado.lido ? "✅ Lido" : "Li o recado!"}
                      </button>
                    ) : (
                      <button
                        className="botao-protegido"
                        onClick={() => autenticar(recado.id)}
                      >
                        🔒 Recado Protegido
                      </button>
                    )
                  ) : (
                    <button className="botao-lido" onClick={() => marcarComoLido(recado.id)}>
                      {recado.lido ? "✅ Lido" : "Li o recado!"}
                    </button>
                  )}
                </div>

                <div
                  className={
                    recado.protegido && recadoAbertoId !== recado.id // Aplica blur se protegido e não aberto
                      ? "conteudo-recado protegido"
                      : "conteudo-recado"
                  }
                >
                  <p>{recado.texto}</p>
                </div>

                {recado.protegido && recadoAbertoId !== recado.id && ( // Mostra campo de senha se protegido e não aberto
                  <div className="senha-container">
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RecadosResponsavel;