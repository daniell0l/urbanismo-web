import React, { useState } from "react";
import "../alvaraConstrucao/style.css";
import Header from '../../components/header';
import SideBar from "../../components/sideBar";

interface CadastroFormProps {
  onSubmit: (data: CadastroFormData) => void;
}

interface CadastroFormData {
  name: string;
  email: string;
  cpfCnpj: string;
  address: string;
  subdivision: string;
  block: string;
  lot: string;
  number: string;
  phone: string;
  officeFunction: string;
  department: string;
}

const profile: React.FC<CadastroFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CadastroFormData>({
    name: "",
    email: "",
    cpfCnpj: "",
    address: "",
    subdivision: "",
    block: "",
    lot: "",
    number: "",
    phone: "",
    officeFunction: "",
    department: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="container">
        <div>
          <Header title="" />
          <SideBar title="" />
        </div>
        <div className="ownerData">
          <span className="line-with-name">Dados pessoais</span>
          <div className="flex-container">
            <input
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="CPF/CNPJ"
              name="cpfCnpj"
              value={formData.cpfCnpj}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Departamento"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Cargo/Função"
              name="officeFunction"
              value={formData.officeFunction}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="addresData">
          <span className="line-with-name">Dados de endereço/Contato</span>
          <input
            type="text"
            placeholder="Endereço"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Loteamento"
            name="subdivision"
            value={formData.subdivision}
            onChange={handleInputChange}
          />
          <input readOnly type="text" placeholder="Bahia" />
          <input readOnly type="text" placeholder="Luís Eduardo Magalhães" />
          <div className="minAddressData">
            <input
              type="text"
              placeholder="Bloco"
              name="block"
              value={formData.block}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Lote"
              name="lot"
              value={formData.lot}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Nº"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="RegistrationProcessButton" type="submit">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default profile;
