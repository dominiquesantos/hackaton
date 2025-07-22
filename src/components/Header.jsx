// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("authenticated", "false");
    navigate("/"); // volta para login
    window.location.reload(); // força atualização para refletir logout
  };

  return (
    <header className="header">
      <div className="logo">Troca Fácil</div>
      <nav>
        <ul>
          <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/eventos')}>Eventos</li>
          <li onClick={() => navigate('/turmas')}>Turmas</li>
          <li onClick={() => navigate('/recados')}>Recados</li>
          <li onClick={() => navigate('/notificacoes')}>
            <span className="notification-icon">🔔</span>
          </li>
          <button onClick={handleLogout} className="login-button">Sair</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
