import "./style.css";
import React, { useState } from "react";
import logoRegister from "../../assets/imgs/logoWide.png";
import axios from "axios";
// import * as yup from 'yup';

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [professionalType, setProfessionalType] = useState("engenheiro");
  const [currentCity, setCurrentCity] = useState("");
  const [AddressNumber, setAddressNumber] = useState("");
  const [AddressCep, setCep] = useState("");
  const [AddressStreet, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [phone, setPhone] = useState("");
  const [currentState, setCurrentState] = useState("AC");
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = "http://localhost:3000";

  const handleRegistration = async () => {
    if (
      !name ||
      !email ||
      !cpf ||
      !password ||
      !currentCity ||
      !AddressNumber ||
      !AddressCep ||
      !AddressStreet ||
      !neighborhood ||
      !phone
    ) {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }
  
    const externalClientData = {
      name,
      email,
      cpf,
      password,
      professional_type: professionalType,
      contact: phone,
      creacau: "1234567",

    };
  
    const addressData = {
      address_type: "PERSON",
      street: AddressStreet,
      number: AddressNumber,
      complement: "",
      neighborhood,
      city: currentCity,
      state: currentState,
      zip_code: AddressCep,
    };
  
    try {
      const response = await axios.post(apiUrl + "/external-clients", {
        externalClient: externalClientData,
        address: addressData,
      });
      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.error(error, "Erro ao cadastrar:");
      setErrorMessage("Erro ao cadastrar. Por favor, tente novamente mais tarde.");
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
          <label htmlFor="name">Nome completo:</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Obrigatório"
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
              <select value={currentState} onChange={(e) => setCurrentState(e.target.value)}>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
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
              placeholder="Obrigatório"
            />
          </label>
          <label htmlFor="address">Número:</label>
          <input
            type="text"
            id="address"
            required
            value={AddressNumber}
            onChange={(e) => setAddressNumber(e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="AddresCep">Cep:</label>
          <input
            type="text"
            id="AddressCep"
            required
            value={AddressCep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="AddressStreet">Rua:</label>
          <input
            type="text"
            id="AddressStreet"
            required
            value={AddressStreet}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="neighborhood">Bairro:</label>
          <input
            type="text"
            id="neighborhood"
            required
            value={neighborhood}
            onChange={(e) => setNeighborhood (e.target.value)}
            placeholder="Obrigatório"
          />
          <label htmlFor="Phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Obrigatório"
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
