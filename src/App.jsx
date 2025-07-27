// src/App.jsx
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";


import Login from "./components/Login";
import Home from "./pages/professor/Home";
import HomeResponsavel from "./pages/responsavel/HomeResponsavel";
import Turmas from "./pages/professor/Turmas";
import Recados from "./pages/professor/Recados";
import NovoRecado from "./pages/professor/NovoRecado";
import Eventos from "./pages/professor/Eventos";
import NovoEvento from "./pages/professor/NovoEvento";
import EditarEvento from "./pages/professor/EditarEvento";
import EditarRecado from "./pages/professor/EditarRecado";

import TurmasResponsavel from "./pages/responsavel/TurmasResponsavel";
import RecadosResponsavel from "./pages/responsavel/RecadosResponsavel";
import EventosResponsavel from "./pages/responsavel/EventosResponsavel";

import Turma1 from "./pages/Turma1";
import Turma2 from "./pages/Turma2";
import Turma3 from "./pages/Turma3";
import Turma4 from "./pages/Turma4";
import Turma5 from "./pages/Turma5";

import SalaA1Ano from "./pages/salas/SalaA1ano";
import SalaB1Ano from "./pages/salas/SalaB1ano";
import SalaC1Ano from "./pages/salas/SalaC1ano";
import SalaA2Ano from "./pages/salas/SalaA2ano";
import SalaB2Ano from "./pages/salas/SalaB2ano";
import SalaC2Ano from "./pages/salas/SalaC2ano";
import SalaD2Ano from "./pages/salas/SalaD2ano";
import SalaA3Ano from "./pages/salas/SalaA3ano";
import SalaB3Ano from "./pages/salas/SalaB3ano";
import SalaC3Ano from "./pages/salas/SalaC3ano";
import SalaD3Ano from "./pages/salas/SalaD3Ano";
import SalaA4Ano from "./pages/salas/SalaA4ano";
import SalaB4Ano from "./pages/salas/SalaB4ano";
import SalaC4Ano from "./pages/salas/SalaC4ano";
import SalaD4Ano from "./pages/salas/SalaD4ano";
import SalaA5Ano from "./pages/salas/SalaA5ano";
import SalaB5Ano from "./pages/salas/SalaB5Ano";
import SalaC5Ano from "./pages/salas/SalaC5ano";
import SalaD5Ano from "./pages/salas/SalaD5ano";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

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
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeResponsavel />} />
          <Route path="/responsavel/turmas" element={<TurmasResponsavel />} />
          <Route path="/responsavel/recados" element={<RecadosResponsavel />} />
          <Route path="/responsavel/eventos" element={<EventosResponsavel />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>} />
          <Route path="/turmas" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turmas /></ProtectedRoute>} />
          <Route path="/recados" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Recados /></ProtectedRoute>} />
          <Route path="/recados/novo" element={<ProtectedRoute isAuthenticated={isAuthenticated}><NovoRecado /></ProtectedRoute>} />
          <Route path="/recados/editar/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditarRecado /></ProtectedRoute>} />
          <Route path="/eventos" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Eventos /></ProtectedRoute>} />
          <Route path="/eventos/novo" element={<ProtectedRoute isAuthenticated={isAuthenticated}><NovoEvento /></ProtectedRoute>} />
          <Route path="/eventos/editar/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditarEvento /></ProtectedRoute>} />

          <Route path="/turmas/1ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma1 /></ProtectedRoute>} />
          <Route path="/turmas/2ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma2 /></ProtectedRoute>} />
          <Route path="/turmas/3ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma3 /></ProtectedRoute>} />
          <Route path="/turmas/4ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma4 /></ProtectedRoute>} />
          <Route path="/turmas/5ano" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Turma5 /></ProtectedRoute>} />

          <Route path="/turmas/1ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA1Ano /></ProtectedRoute>} />
          <Route path="/turmas/1ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB1Ano /></ProtectedRoute>} />
          <Route path="/turmas/1ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC1Ano /></ProtectedRoute>} />

          <Route path="/turmas/2ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA2Ano /></ProtectedRoute>} />
          <Route path="/turmas/2ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB2Ano /></ProtectedRoute>} />
          <Route path="/turmas/2ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC2Ano /></ProtectedRoute>} />
          <Route path="/turmas/2ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD2Ano /></ProtectedRoute>} />

          <Route path="/turmas/3ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA3Ano /></ProtectedRoute>} />
          <Route path="/turmas/3ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB3Ano /></ProtectedRoute>} />
          <Route path="/turmas/3ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC3Ano /></ProtectedRoute>} />
          <Route path="/turmas/3ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD3Ano /></ProtectedRoute>} />

          <Route path="/turmas/4ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA4Ano /></ProtectedRoute>} />
          <Route path="/turmas/4ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB4Ano /></ProtectedRoute>} />
          <Route path="/turmas/4ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC4Ano /></ProtectedRoute>} />
          <Route path="/turmas/4ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD4Ano /></ProtectedRoute>} />

          <Route path="/turmas/5ano/salaA" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaA5Ano /></ProtectedRoute>} />
          <Route path="/turmas/5ano/salaB" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaB5Ano /></ProtectedRoute>} />
          <Route path="/turmas/5ano/salaC" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaC5Ano /></ProtectedRoute>} />
          <Route path="/turmas/5ano/salaD" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SalaD5Ano /></ProtectedRoute>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
