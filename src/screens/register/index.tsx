import "./style.css";
import React, { useState } from "react";
import logoLateral from "../../assets/imgs/logoWide.png";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegistration = () => {
    console.log("Name:", name);
    console.log("CPF:", cpf);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div id="registration-container">
      <div className="logoLateral">
        <img src={logoLateral} alt="logo lem urbanismo" />
      </div>
      <div className="greenLineRegister"></div>
      <form className="blocoRegistration">
        <h2>Cadastro</h2>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Usuário"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <label htmlFor="cpf"></label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleCpfChange}
            placeholder="CPF"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Senha"
          />
          <div className="labelProfissionalType">
          <label htmlFor="professionalType">Tipo profissional:</label><br />
          <select className="profissionalType">
            <option value="Engineer">Engenheiro</option>
            <option value="Technician">Técnico</option>
            <option value="Architect">Arquiteto</option>
          </select>
        </div>
        <button
          className="buttonRegistration"
          type="button"
          onClick={handleRegistration}
        >
          Cadastrar
        </button>
        <br />
          <p className="cadastroLink"> Já tem cadastro? 
            <a href="/login">
              Faça o login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
