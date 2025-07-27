// src/components/Login.jsx
import { useState } from "react";
import "./Login.css";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login.jsx: Função handleLogin iniciada."); 

    const dominioPermitido = "@prof.trocafacil.ana.br";
    const senhaCorreta = "1234";

    console.log("Login.jsx: Email digitado:", email); 
    console.log("Login.jsx: Senha digitada:", senha); 

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      console.log("Login.jsx: Erro - Campos vazios."); 
      return;
    }

    if (!email.endsWith(dominioPermitido)) {
      setErro("Use um e-mail institucional válido.");
      console.log("Login.jsx: Erro - Domínio de email inválido."); 
      return;
    }

    if (senha !== senhaCorreta) {
      setErro("Senha incorreta.");
      console.log("Login.jsx: Erro - Senha incorreta."); 
      return;
    }

    setErro(""); 
    localStorage.setItem("authenticated", "true");
    setIsAuthenticated(true);
    console.log("Login.jsx: Autenticação bem-sucedida, setIsAuthenticated(true) chamado."); // DEBUG: Sucesso
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h2>Troca Fácil</h2>
      </header>

      <div className="login-form">
        <h1>Acesse Sua Conta</h1>
        <p>
          Entre com seu e-mail institucional para acessar os recados e eventos da escola.
        </p>

        
        <form onSubmit={handleLogin} noValidate>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <a href="#">Esqueceu sua senha?</a>

          {erro && (
            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "-5px" }}>
              {erro}
            </p>
          )}

          <button type="submit">ENTRAR</button>
        </form>
      </div>

      <div className="login-image">
        <img src="/menina.png" alt="Ilustração educativa" />
      </div>
    </div>
  );
}

export default Login;
