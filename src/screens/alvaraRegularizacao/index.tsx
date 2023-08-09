import React, { useState } from "react";
import "../alvaraConstrucao/style.css";
import AdicionarPavimentoButton from "../../components/buttonAddBasement";
import AddOwnButton from "../../components/AddOwner";
import AddTechinical from "../../components/AddTechinical";
import Header from "../../components/header";

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
  permeabilityRate: string;
  occupancyRate: string;
  calculateTotal: string;
  areaToBuildGroundFloor: boolean;
  basementToBuild: boolean;
  existingArea: boolean;
  existingBasementArea: boolean;
  deckOrPoolArea: boolean;
  basementsToBuild: string[];
  existingAreas: string[];
  existingBasementAreas: string[];
  deckOrPoolAreas: string[];
  areaToBuildGroundFloors: string[];
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
    permeabilityRate: "",
    occupancyRate: "",
    calculateTotal: "",
    areaToBuildGroundFloor: false,
    basementToBuild: false,
    existingArea: false,
    existingBasementArea: false,
    deckOrPoolArea: false,
    basementsToBuild: [],
    existingAreas: [],
    existingBasementAreas: [],
    deckOrPoolAreas: [],
    areaToBuildGroundFloors: [],
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="container">
        <div>
          <div>
            <Header title="" />
          </div>
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
          <div className="min-Address">
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
              <option value="shed">Galão</option>
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
          <input
            type="text"
            placeholder="Taxa de Permeabilidade (%)"
            name="permeabilityRate"
            value={formData.permeabilityRate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Taxa de Ocupação (%)"
            name="occupancyRate"
            value={formData.occupancyRate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Total"
            readOnly
            value={formData.calculateTotal}
          />
          <label className="AddBasementeLabel">
            Área construir - Pavimento Térreo(m²)
            <AdicionarPavimentoButton></AdicionarPavimentoButton>
          </label>
          <label className="AddBasementeLabel">
            Área Subsolo a Construir(m²)
            <AdicionarPavimentoButton></AdicionarPavimentoButton>
          </label>
          <label className="AddBasementeLabel">
            Área Subsolo Existente(m²)
            <AdicionarPavimentoButton></AdicionarPavimentoButton>
          </label>
          <label className="AddBasementeLabel">
            Área Deck ou Piscina
            <AdicionarPavimentoButton></AdicionarPavimentoButton>
          </label>
        </div>
        <button className="RegistrationProcessButton" type="submit">
          Cadastrar processo
        </button>
      </div>
    </form>
  );
};

export default CadastroForm;
