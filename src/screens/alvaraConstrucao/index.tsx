import React, { useState } from "react";
import AdicionarPavimentoButton from "../../components/buttonAddBasement";
import Header from '../../components/header';
import SideBar from "../../components/sideBar";
import AddGroundFloorButton from "../../components/buttonGroundFloor"
import AddOwnButton from "../../components/AddOwner";



interface CadastroFormData {
  name: string;
  cpfCnpj: string;
  creacau: string;
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

export const AlvaraConstrucao: React.FC = () => {
  const [formData, setFormData] = useState<CadastroFormData>({
    name: "",
    cpfCnpj: "",
    creacau: "",
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
              readOnly
            />
            <input
              type="creaCau"
              placeholder="Crea/Cau"
              name="creaCau"
              value={formData.creacau}
              readOnly
            />
            <div className="addOwn">
            <input
              type="search"
              placeholder="CPF/CNPJ"
              name="cpfCnpj"
              value={formData.cpfCnpj}
              onChange={handleInputChange}
            />
            <AddOwnButton></AddOwnButton>
            </div>
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
              type="search"
              placeholder="Pesquisar CPF/CNPJ"
              name="cpfCnpj"
              value={formData.cpfCnpj}
            />
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
          <input
            type="text"
            placeholder="Àrea permeável (%)"
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
          <div className="AddBasementeLabel">
            <label className="AddBasementeLabel">
              Área construir - Pavimento Térreo(m²)
              <AddGroundFloorButton></AddGroundFloorButton>
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
        </div>
        <button className="RegistrationProcessButton" type="submit">
          Cadastrar processo
        </button>
      </div>
    </form>
  );
};

export default AlvaraConstrucao;
