// src/App.jsx
// Remova BrowserRouter daqui, ele será movido para index.js
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./pages/professor/Home";
import HomeResponsavel from "./pages/responsavel/HomeResponsavel";
import Turmas from "./pages/professor/Turmas";
import Recados from "./pages/professor/Recados";
import NovoRecado from "./pages/professor/NovoRecado";
import Eventos from "./pages/professor/Eventos";
import NovoEvento from "./pages/professor/NovoEvento";
import EditarEvento from "./pages/professor/EditarEvento";
import EditarRecado from "./pages/professor/EditarRecado"; // Importar EditarRecado

// Telas do responsável
import TurmasResponsavel from "./pages/responsavel/TurmasResponsavel";
import RecadosResponsavel from "./pages/responsavel/RecadosResponsavel";

// Turmas por ano
import Turma1 from "./pages/Turma1";
import Turma2 from "./pages/Turma2";
import Turma3 from "./pages/Turma3";
import Turma4 from "./pages/Turma4";
import Turma5 from "./pages/Turma5";

// Salas 1º ano
import SalaA1Ano from "./pages/salas/SalaA1ano";
import SalaB1Ano from "./pages/salas/SalaB1ano";
import SalaC1Ano from "./pages/salas/SalaC1ano";

// Salas 2º ano
import SalaA2Ano from "./pages/salas/SalaA2ano";
import SalaB2Ano from "./pages/salas/SalaB2ano";
import SalaC2Ano from "./pages/salas/SalaC2ano";
import SalaD2Ano from "./pages/salas/SalaD2ano";

// Salas 3º ano
import SalaA3Ano from "./pages/salas/SalaA3ano";
import SalaB3Ano from "./pages/salas/SalaB3ano";
import SalaC3Ano from "./pages/salas/SalaC3ano";
import SalaD3Ano from "./pages/salas/SalaD3Ano";

// Salas 4º ano
import SalaA4Ano from "./pages/salas/SalaA4ano";
import SalaB4Ano from "./pages/salas/SalaB4ano";
import SalaC4Ano from "./pages/salas/SalaC4ano";
import SalaD4Ano from "./pages/salas/SalaD4ano";

// Salas 5º ano
import SalaA5Ano from "./pages/salas/SalaA5ano";
import SalaB5Ano from "./pages/salas/SalaB5Ano";
import SalaC5Ano from "./pages/salas/SalaC5ano";
import SalaD5Ano from "./pages/salas/SalaD5ano";


// Componente auxiliar para rotas protegidas
const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redireciona para /login se não estiver autenticado
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("authenticated") === "true";
    setIsAuthenticated(auth);
    console.log("App.jsx: Verificação inicial de autenticação:", auth);
  }, []);

  useEffect(() => {
    console.log("App.jsx: isAuthenticated mudou para:", isAuthenticated);

    if (isAuthenticated && window.location.pathname === '/login') {
      console.log("App.jsx: Redirecionando para /home após login bem-sucedido.");
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      {/* Página inicial pública — home do responsável */}
      <Route path="/" element={<HomeResponsavel />} />

      {/* Telas do responsável */}
      <Route path="/responsavel/turmas" element={<TurmasResponsavel />} />
      <Route path="/responsavel/recados" element={<RecadosResponsavel />} />

      {/* Login do professor */}
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />

      {/* Home do professor (protegida) */}
      <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>} />

      {/* Rotas protegidas para professor */}
      <Route path="/turmas" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turmas /></ProtectedRoute>} />
      <Route path="/recados" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Recados /></ProtectedRoute>} />
      <Route path="/recados/novo" element={<ProtectedRoute isAuthenticated={isAuthenticated}><NovoRecado /></ProtectedRoute>} />
      <Route path="/recados/editar/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditarRecado /></ProtectedRoute>} /> {/* NOVA ROTA PARA EDITAR RECADO */}
      <Route path="/eventos" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Eventos /></ProtectedRoute>} />
      <Route path="/eventos/novo" element={<ProtectedRoute isAuthenticated={isAuthenticated}><NovoEvento /></ProtectedRoute>} />
      <Route path="/eventos/editar/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditarEvento /></ProtectedRoute>} /> {/* ROTA DE EDITAR EVENTO AJUSTADA */}

      {/* Turmas por ano */}
      <Route path="/turmas/1ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma1 /></ProtectedRoute>} />
      <Route path="/turmas/2ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma2 /></ProtectedRoute>} />
      <Route path="/turmas/3ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma3 /></ProtectedRoute>} />
      <Route path="/turmas/4ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma4 /></ProtectedRoute>} />
      <Route path="/turmas/5ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma5 /></ProtectedRoute>} />

      {/* Salas do 1º ano */}
      <Route path="/turmas/1ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA1Ano /></ProtectedRoute>} />
      <Route path="/turmas/1ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB1Ano /></ProtectedRoute>} />
      <Route path="/turmas/1ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC1Ano /></ProtectedRoute>} />

      {/* Salas do 2º ano */}
      <Route path="/turmas/2ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA2Ano /></ProtectedRoute>} />
      <Route path="/turmas/2ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB2Ano /></ProtectedRoute>} />
      <Route path="/turmas/2ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC2Ano /></ProtectedRoute>} />
      <Route path="/turmas/2ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD2Ano /></ProtectedRoute>} />

      {/* Salas do 3º ano */}
      <Route path="/turmas/3ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA3Ano /></ProtectedRoute>} />
      <Route path="/turmas/3ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB3Ano /></ProtectedRoute>} />
      <Route path="/turmas/3ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC3Ano /></ProtectedRoute>} />
      <Route path="/turmas/3ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD3Ano /></ProtectedRoute>} />

      {/* Salas do 4º ano */}
      <Route path="/turmas/4ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA4Ano /></ProtectedRoute>} />
      <Route path="/turmas/4ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB4Ano /></ProtectedRoute>} />
      <Route path="/turmas/4ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC4Ano /></ProtectedRoute>} />
      <Route path="/turmas/4ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD4Ano /></ProtectedRoute>} />

      {/* Salas do 5º ano */}
      <Route path="/turmas/5ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA5Ano /></ProtectedRoute>} />
      <Route path="/turmas/5ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB5Ano /></ProtectedRoute>} />
      <Route path="/turmas/5ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC5Ano /></ProtectedRoute>} />
      <Route path="/turmas/5ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD5Ano /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;