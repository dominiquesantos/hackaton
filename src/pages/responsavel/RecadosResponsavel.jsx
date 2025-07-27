// src/pages/responsavel/RecadosResponsavel.jsx
import React, { useState, useEffect } from "react";
import "../../styles/RecadosResponsavel.css";

const recadosFake = [
  {
    id: 1,
    nome: "Alice Ramos Santana",
    turma: "1º ano Sala A",
    tempo: "1 dia atrás",
    protegido: true,
    texto: "Olá! Esse recado está protegido com blur...",
    autor: "Professora Ana",
  },
  {
    id: 2,
    nome: "Felipe Gabriel Mendes",
    turma: "1º ano Sala A",
    tempo: "1 dia atrás",
    protegido: true,
    texto:
      "Olá! O Felipe esqueceu o caderno e a apostila duas vezes nesta semana, o que comprometeu um pouco seu acompanhamento das atividades. Sei que pode acontecer, mas achei importante avisar para que possamos ajudá-lo a desenvolver mais autonomia com a rotina escolar. Uma boa dica pode ser montar uma listinha e conferir junto com ele antes de sair de casa.",
    autor: "Professora Ana",
  },
  {
    id: 3,
    nome: "Bruno Henrique Costa",
    turma: "1º ano Sala B",
    tempo: "2 dias atrás",
    protegido: true,
    texto: "Este recado também está protegido e deve ter blur.",
    autor: "Professora Ana",
  }
];

export default function RecadosResponsavel() {
  const [recados, setRecados] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    
    const recadosIniciais = recadosFake.map((recado) => ({
      ...recado,
      desbloqueado: false,
      lido: false,
      dataLeitura: ""
    }));
    setRecados(recadosIniciais);
  }, []);

  const handleDesbloquear = (recadoId) => {
    const senha = prompt("Digite a senha para visualizar o recado:");
    const senhaCorreta = "alunofelipe2025";

    const recado = recados.find((r) => r.id === recadoId);
    const isFelipe = recado.nome.includes("Felipe");

    if (isFelipe && senha === senhaCorreta) {
      setRecados((prev) =>
        prev.map((r) =>
          r.id === recadoId ? { ...r, desbloqueado: true } : r
        )
      );
    } else {
      alert("Senha incorreta!");
    }
  };

  const handleMarcarComoLido = (recadoId) => {
    const data = new Date().toLocaleDateString("pt-BR");
    setRecados((prev) =>
      prev.map((r) =>
        r.id === recadoId ? { ...r, lido: true, dataLeitura: data } : r
      )
    );
  };

  const recadosFiltrados = recados.filter((r) =>
    r.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="recados-page">
      <div className="recados-banner">
        <div className="recados-banner-content">
          <h1 className="recados-title">Recados</h1>
          <input
            type="text"
            className="recados-search"
            placeholder="Pesquise uma turma ou aluno"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <button className="voltar-btn" onClick={() => window.location.href = "http://localhost:5173"}>
            Voltar
          </button>
        </div>
      </div>

      <div className="recados-lista">
        {recadosFiltrados.map((recado) => (
          <div key={recado.id} className="recado-card">
            <h3 className="recado-titulo">
              {recado.nome} – {recado.turma}
            </h3>
            <p className="recado-data">Recado enviado {recado.tempo}</p>

            {!recado.desbloqueado ? (
              <div
                className="recado-status protegido"
                onClick={() => handleDesbloquear(recado.id)}
              >
                🔒 Recado Protegido (clique para desbloquear)
              </div>
            ) : (
              <>
                <p className="recado-texto">{recado.texto}</p>
                <p className="recado-autor">— {recado.autor}</p>
                <div className="recado-status lido">
                  {!recado.lido ? (
                    <button onClick={() => handleMarcarComoLido(recado.id)}>
                      ✅ Marcar como lido
                    </button>
                  ) : (
                    <p style={{ color: "#FFFFFF" }}>
                      👁️ Lido em {recado.dataLeitura}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
