import React, { useState } from "react";
import "./style.css";
import AddOwnButton from "../../components/AddOwner";
import AddTechinical from "../../components/AddTechinical";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

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
  NumberofLots: string;
  TotallandArea: string;
  selectResizing: "Remembramento" | "Desmembramento";
  numberOfUnits: string;
  unitDescriptions: string;
  requester: string;
  phone: string;
}

export const Resizing: React.FC = () => {
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
    number: "",
    NumberofLots: "",
    TotallandArea: "",
    selectResizing: "Remembramento",
    numberOfUnits: "",
    unitDescriptions: "",
    requester: "",
    phone: "",
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

  const handleselectResizing = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      selectResizing: value as "Remembramento" | "Desmembramento",
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



  const handleTotallandArea = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleNumberofLots = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form>
      <div id="container">
        <div>
          <Header title="" />
          <SideBar></SideBar>
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
          <div>
            <input
              type="text"
              placeholder="Quantidade de Lotes (Unidades)"
              name="NumberofLots"
              value={formData.NumberofLots}
              onChange={handleNumberofLots}
            />
            <input
              type="text"
              placeholder="Área total do terreno (m²)"
              name="TotallandArea"
              value={formData.TotallandArea}
              onChange={handleTotallandArea}
            />
          </div>
        </div>
        <div className="ResizingObjectIntendedSituation">
          <span className="line-with-name">
            Dados do Redimensionamento Objeto/Situação Pretendida
          </span>
          <div>
            <input
              type="text"
              placeholder="Quantidade de Lotes (Unidades)"
              name="numberOfUnits"
              value={formData.numberOfUnits}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Descrição dos Lotes (Unidades)"
              name="unitDescriptions"
              value={formData.unitDescriptions}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Requerente"
              name="requester"
              value={formData.requester}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          <div className="SelectResizing">
            <select
              name="selectResizing"
              value={formData.selectResizing}
              onChange={handleselectResizing}
            >
              <option value="remembering">Remembramento</option>
              <option value="dismemberment">Desmembramento</option>
            </select>
          </div>
          </div>
        </div>
        <button className="RegistrationProcessButton" type="submit">
          Cadastrar processo
        </button>
      </div>
    </form>
  );
};

