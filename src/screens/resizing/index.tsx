import React, { useState } from "react";
import "./style.css";
import AddOwnButton from "../../components/AddOwner";
import AddTechinical from "../../components/AddTechinical";
import Header from '../../components/header';
import SideBar from "../../components/sideBar";

interface CadastroFormProps {
  onSubmit: (data: CadastroFormData) => void;
}

interface CadastroFormData {
  name: string;
  email: string;
  typePeople: "Física" | "Jurídica";
  cpfCnpj: string;
  addOwn: boolean;
  Own: {
    name: string;
    email: string;
    cpfCnpj: string;
  };
  authorization: string;
  creaCau: string;
  responsibleTechnical: "Engenheiro" | "Arquiteto";
  address: string;
  subdivision: string;
  block: string;
  lot: string;
  number: string;
}

const CadastroForm: React.FC<CadastroFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CadastroFormData>({
    name: "",
    email: "",
    typePeople: "Física",
    cpfCnpj: "",
    addOwn: false,
    Own: {
      name: "",
      email: "",
      cpfCnpj: "",
    },
    authorization: "",
    creaCau: "",
    responsibleTechnical: "Engenheiro",
    address: "",
    subdivision: "",
    block: "",
    lot: "",
    number: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleresponsibleTechnicalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      responsibleTechnical: value as "Engenheiro" | "Arquiteto",
    });
  };

  const handletypePeopleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      typePeople: value as "Física" | "Jurídica",
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
      <Header title=""/>
      <SideBar title=""/>
      </div>
        <div className="ownerData">
          <span className="line-with-name">Dados do Proprietário</span>
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
          </div>
          <div className="SelecttypePeople">
            <select
              name="typePeople"
              value={formData.typePeople}
              onChange={handletypePeopleChange}
            >
              <option value="Física">Física</option>
              <option value="Jurídica">Jurídica</option>
            </select>
          </div>
          <div className="addOwn">
            <AddOwnButton></AddOwnButton>
          </div>
        </div>
        <div className="projectData">
          <span className="line-with-name">Dados do projeto</span>
          <div className="flex-container">
            <input
              type="text"
              placeholder="Auditoria"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="CPF/CNPJ"
              name="cpfCnpj"
              value={formData.cpfCnpj}
              onChange={handleInputChange}
            />
          </div>
          <div className="SelectTechinical">
            <select
              name="responsibleTechnical"
              value={formData.responsibleTechnical}
              onChange={handleresponsibleTechnicalChange}
            >
              <option value="Física">Engenheiro</option>
              <option value="Jurídica">Arquiteto</option>
            </select>
          </div>
          <div className="addTechinical">
            <AddTechinical></AddTechinical>
          </div>
        </div>
        <div className="addresData">
          <span className="line-with-name">Dados de endereço</span>
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
        <div className="propertyData">
          <span className="line-with-name">Dados do terreno</span>
        </div>
        <button className="RegistrationProcessButton" type="submit">
          Cadastrar processo
        </button>
      </div>
    </form>
  );
};

export default CadastroForm;
