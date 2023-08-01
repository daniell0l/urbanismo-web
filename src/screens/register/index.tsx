import "./style.css";
import React, {useState } from "react";
import logoRegister from "../../assets/imgs/logoWide.png";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [professionalType, setProfessionalType] = useState("Engineer");
  const [currentCity, setCurrentCity] = useState("");
  const [AddressNumber, setAddressNumber] = useState("");
  const [AddressCep, setCep] = useState("");
  const [AddressStreet, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [phone, setPhone] = useState("");
  const [currentState, setCurrentState] = useState("AC");

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

  const handleProfessionalTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProfessionalType(event.target.value);
  };

  const handleCurrentCityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentCity(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressNumber(event.target.value);
  };

  const handleNeighborhoodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNeighborhood(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleCurrentStateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentState(event.target.value);
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    if (!name || !email || !cpf || !password || !currentCity || !AddressNumber || !AddressCep || !AddressStreet || !neighborhood || !phone) {
      return;
    }
    console.log("Name:", name);
    console.log("CPF:", cpf);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Professional Type:", professionalType);
    console.log("Current City:", currentCity);
    console.log("Address:", AddressNumber);
    console.log("Neighborhood:", neighborhood);
    console.log("Phone:", phone);
    console.log("Current State:", currentState);
    console.log("Cep:", AddressCep);
    console.log("Street:", AddressStreet);
    window.location.href = '/principal'
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
          <h2>Cadastro</h2>
          <span className="line-with-name">Dados pessoais</span>
          <label htmlFor="name">Nome completo:</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            required
            value={cpf}
            onChange={handleCpfChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={handlePasswordChange}
            placeholder="Obrigatório"
          />
          <span className="line-with-name">Dados de Endereço/Contato</span>
          <div className="select-container">
            <label htmlFor="professionalType">Tipo profissional:</label>
            <div className="Select">
              <select
                value={professionalType}
                onChange={handleProfessionalTypeChange}
              >
                <option value="Engineer">Engenheiro</option>
                <option value="Technician">Técnico</option>
                <option value="Architect">Arquiteto</option>
              </select>
            </div>
          </div>
          <div className="select-container">
            <label htmlFor="currentState">Estado atual:</label>
            <div className="selectEstado">
              <select value={currentState} onChange={handleCurrentStateChange}>
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
              onChange={handleCurrentCityChange}
              placeholder="Obrigatório"
            />
          </label>
          <label htmlFor="address">Número:</label>
          <input
            type="text"
            id="address"
            required
            value={AddressNumber}
            onChange={handleCepChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="AddresCep">Cep:</label>
          <input
            type="text"
            id="AddressCep"
            required
            value={AddressCep}
            onChange={handleStreetChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="AddressStreet">Rua:</label>
          <input
            type="text"
            id="AddressStreet"
            required
            value={AddressStreet}
            onChange={handleAddressChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="neighborhood">Bairro:</label>
          <input
            type="text"
            id="neighborhood"
            required
            value={neighborhood}
            onChange={handleNeighborhoodChange}
            placeholder="Obrigatório"
          />
          <label htmlFor="Phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            required
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Obrigatório"
          />
          <button
            className="buttonRegistration"
            type="submit"
          >
            Cadastrar
          </button>
          <br />
          <p className="cadastroLink">
            {" "}
            Já tem cadastro?
            <a href="/login"> Faça o login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
