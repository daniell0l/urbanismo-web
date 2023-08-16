import "./style.css";
import React, { useState } from "react";
import logoRegister from "../../assets/imgs/logoWide.png";
import { uf } from "../../utils/states";
import axios from "axios";
// import * as yup from 'yup';

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [creacau, setCreaCau] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [professionalType, setProfessionalType] = useState("engenheiro");
  const [currentCity, setCurrentCity] = useState("");
  const [AddressNumber, setAddressNumber] = useState("");
  const [AddressCep, setCep] = useState("");
  const [AddressStreet, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [phone, setPhone] = useState("");
  const [complement, setComplement] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = "http://localhost:3000";

  const handleRegistration = async () => {
    const externalClientData = {
      name,
      email,
      cpf,
      password,
      confirmPassword,
      professional_type: professionalType,
      contact: phone,
      creacau,
    };

    const addressData = {
      address_type: "PERSON",
      street: AddressStreet,
      number: AddressNumber,
      complement: "",
      neighborhood,
      city: currentCity,
      zip_code: AddressCep,
    };

    try {
      const response = await axios.post( apiUrl + "/external-clients", {
        externalClient: externalClientData,
        address: addressData,
      });
      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.error(error, "Erro ao cadastrar:");
      setErrorMessage(
        "Erro ao cadastrar. Por favor, verifique todos os campos."
      );
    }
  };

  return (
    <div id="registration-container">
      <form className="blocoRegistration" onSubmit={handleRegistration}>
        <div>
          <img
            className="logoRegister"
            src={logoRegister}
            alt="logo lem urbanismo"
          />
        </div>
        <div className="form-group-register">
          <h1>Cadastro</h1>
          <span className="line-with-name">Dados pessoais</span>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="insira seu nome"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="insira seu email"
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="insira seu cpf"
          />
          <label htmlFor="crea/cau">Crea/Cau:</label>
          <input
            type="text"
            id="crea/cau"
            required
            value={creacau}
            onChange={(e) => setCreaCau(e.target.value)}
            placeholder="insira seu crea/cau"
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="insira uma senha"
          />
          <label htmlFor="confirmPassword">Confirmar senha:</label>
          <input
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirme sua senha"
          />
          <span className="line-with-name">Dados de Endereço/Contato</span>
          <div className="select-container">
            <label htmlFor="professionalType">Tipo profissional:</label>
            <div className="Select">
              <select
                value={professionalType}
                onChange={(e) => setProfessionalType(e.target.value)}
              >
                <option value="engenheiro">Engenheiro</option>
                <option value="tecnico">Técnico</option>
                <option value="arquiteto">Arquiteto</option>
              </select>
            </div>
          </div>
          <div className="select-container">
            <label htmlFor="currentState">Estado atual:</label>
            <div className="selectEstado">
              <select>
                {uf.map((item) => (
                  <option key={item.UF} value={item.UF}>
                    {item.Value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <label htmlFor="currentCity">
            Cidade Atual:
            <input
              type="text"
              id="currentCity"
              required
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
              placeholder="insira sua cidade"
            />
          </label>
          <label htmlFor="address">Número:</label>
          <input
            type="text"
            id="address"
            required
            value={AddressNumber}
            onChange={(e) => setAddressNumber(e.target.value)}
            placeholder="insira o número da sua residencia"
          />
          <label htmlFor="AddresCep">Cep:</label>
          <input
            type="text"
            id="AddressCep"
            required
            value={AddressCep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="insira um cep válido"
          />
          <label htmlFor="AddressStreet">Rua:</label>
          <input
            type="text"
            id="AddressStreet"
            required
            value={AddressStreet}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="insira sua rua"
          />
          <label htmlFor="neighborhood">Bairro:</label>
          <input
            type="text"
            id="neighborhood"
            required
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            placeholder="insira seu bairro"
          />
          <label htmlFor="Complement">Complemento:</label>
          <input
            type="text"
            id="complemente"
            required
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            placeholder="casa, apartamento, bloco"
          />
          <label htmlFor="Phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="telefone, celular"
          />
          <div className="buttonRegisterExternalClient">
            <button
              className="buttonRegistration"
              type="button"
              onClick={handleRegistration}
            >
              Cadastrar
            </button>

            <p className="cadastroLink">
              Já tem cadastro?
              <a href="/login"> Faça o login</a>
            </p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
