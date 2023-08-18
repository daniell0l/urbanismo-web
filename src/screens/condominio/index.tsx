import React, { useState } from "react";
import AddOwnButton from "../../components/AddOwner";
import AddTechinical from "../../components/AddTechinical";
import AddUnity from "../../components/AddUnity";
import Header from '../../components/header'
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
  creacau: string;
  responsibleTechnical: "Engenheiro" | "Arquiteto";
  address: string;
  subdivision: string;
  block: string;
  lot: string;
  number: string;
  purposeOfWork: string;
  landArea: string;
  landSituation: "Meio quadra" | "Esquina";
  purposeWork:
    | "residential"
    | "residencialCondominium"
    | "commercial"
    | "mixed"
    | "institutional"
    | "shed"
    | "industrial";
}

const CadastroForm: React.FC= () => {
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
    creacau: "",
    responsibleTechnical: "Engenheiro",
    address: "",
    subdivision: "",
    block: "",
    lot: "",
    number: "",
    purposeOfWork: "",
    landArea: "",
    landSituation: "Meio quadra",
    purposeWork: "residential",
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

  const handlePurposeWork = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      purposeWork: value as
        | "residential"
        | "residencialCondominium"
        | "commercial"
        | "mixed"
        | "institutional"
        | "shed"
        | "industrial",
    });
  };

  const handleLandSituation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      landSituation: value as "Meio quadra" | "Esquina",
    });
  };

  return (
    <form>
      <div id="container">
      <div>
      <Header title=""/>
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
          <input readOnly type="text" placeholder="Bahia" />
          <input readOnly type="text" placeholder="Luís Eduardo Magalhães" />
        </div>
        <div className="propertyData">
          <span className="line-with-name">Dados do terreno</span>
          <div className="selectPurposeWork">
            <select
              name="PurposeWork"
              value={formData.purposeWork}
              onChange={handlePurposeWork}
            >
              <option value="residential">Residencial</option>
              <option value="residencialCondominium">
                Residencial em condomínio
              </option>
              <option value="commercial">Comercial</option>
              <option value="mixed">Misto</option>
              <option value="institutional">Institucional</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
          <div className="selectLandSituation">
            <select
              name="landSituation"
              value={formData.landSituation}
              onChange={handleLandSituation}
            >
              <option value="Meio quadra">Meio quadra</option>
              <option value="Esquina">Esquina</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Área do Terreno (m²)"
            name="landArea"
            value={formData.landArea}
            onChange={handleInputChange}
          />
          <div className="addUnity">
            <AddUnity></AddUnity>
        </div>
        <button className="RegistrationProcessButton" type="submit">
            Cadastrar processo
          </button>
          </div>
      </div>
    </form>
  );
};

export default CadastroForm;
