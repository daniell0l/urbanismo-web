import "./style.css";
import logoLateral from "../../assets/imgs/logoWide.png";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Usuário:", username);
    console.log("Senha:", password);
    window.location.href = '/principal'
    if (!username || !password) {
      return;
    }
  };

  return (
    <div id="login-container">
      <div className="logoLateral">
        <img src={logoLateral} alt="logo lem urbanismo" />
      </div>
      <div className="greenLine"></div>
      <form className="blocoLogin" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <div className="LabelLogin">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={handleUsernameChange}
              placeholder="Usuário"
            />
          </div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={handlePasswordChange}
            placeholder="Senha"
          />
          <button className="buttonLogin" type="submit">
            Entrar
          </button>
        </div>
        <div className="linkCadastro">
          <p>
            Não tem uma conta? <a href="/register">Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
