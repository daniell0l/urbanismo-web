import React, { useState } from "react";

interface CadastroFormProps {
  onSubmit: (data: CadastroFormData) => void;
}

interface CadastroFormData {
  nome: string;
  email: string;
  tipoPessoa: "Física" | "Jurídica";
  cpfCnpj: string;
  adicionarProprietario: boolean;
  proprietario: {
    nome: string;
    email: string;
    cpfCnpj: string;
  };
  authorization: string;
  creaCau: string;
  responsibleTechnical: boolean;
  responsible: {
    nome: string;
    creaCau: string;
  };
  address: string;
  subdivision: string;
  block: string;
  lot: string;
  number: string;
  purposeOfWork: string;
  landArea: string;
  landSituation: "Meio Esquina" | "Esquina";
  permeabilityRate: string;
  occupancyRate: string;
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
    nome: "",
    email: "",
    tipoPessoa: "Física",
    cpfCnpj: "",
    adicionarProprietario: false,
    proprietario: {
      nome: "",
      email: "",
      cpfCnpj: "",
    },
    authorization: "",
    creaCau: "",
    responsibleTechnical: false,
    responsible: {
      nome: "",
      creaCau: "",
    },
    address: "",
    subdivision: "",
    block: "",
    lot: "",
    number: "",
    purposeOfWork: "",
    landArea: "",
    landSituation: "Meio Esquina",
    permeabilityRate: "",
    occupancyRate: "",
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleTipoPessoaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      tipoPessoa: value as "Física" | "Jurídica",
    });
  };

  const handleAdicionarProprietarioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    setFormData({
      ...formData,
      adicionarProprietario: checked,
    });
  };

  const handleProprietarioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      proprietario: {
        ...formData.proprietario,
        [name]: value,
      },
    });
  };

  const handleResponsavelTecnicoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    setFormData({
      ...formData,
      responsibleTechnical: checked,
    });
  };

  const handleResponsavelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      responsible: {
        ...formData.responsible,
        [name]: value,
      },
    });
  };

  const handlePavimentoClick = (
    field: keyof CadastroFormData,
    pavimentos: string[]
  ) => {
    switch (field) {
      case "basementToBuild":
        setFormData({ ...formData, basementsToBuild: [...pavimentos, ""] });
        break;
      case "areaToBuildGroundFloor":
        setFormData({ ...formData, areaToBuildGroundFloors: [...pavimentos, ""] });
        break;
      case "existingArea":
        setFormData({ ...formData, existingAreas: [...pavimentos, ""] });
        break;
      case "existingBasementArea":
        setFormData({
          ...formData,
          existingBasementAreas: [...pavimentos, ""],
        });
        break;
      case "deckOrPoolArea":
        setFormData({ ...formData, deckOrPoolAreas: [...pavimentos, ""] });
        break;
      default:
        break;
    }
  };

  const handlePavimentoChange = (
    index: number,
    value: string,
    field: keyof CadastroFormData
  ) => {
    const updatedPavimentos = [...formData[field]];
    updatedPavimentos[index] = value;
    setFormData({
      ...formData,
      [field]: updatedPavimentos,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Name:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="tipoPessoa"
            value="Física"
            checked={formData.tipoPessoa === "Física"}
            onChange={handleTipoPessoaChange}
          />
          Individual
        </label>
        <label>
          <input
            type="radio"
            name="tipoPessoa"
            value="Jurídica"
            checked={formData.tipoPessoa === "Jurídica"}
            onChange={handleTipoPessoaChange}
          />
          Legal Entity
        </label>
      </div>
      <div>
        <label htmlFor="cpfCnpj">CPF/CNPJ:</label>
        <input
          type="text"
          id="cpfCnpj"
          name="cpfCnpj"
          value={formData.cpfCnpj}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="adicionarProprietario"
            checked={formData.adicionarProprietario}
            onChange={handleAdicionarProprietarioChange}
          />
          Add Owner
        </label>
      </div>
      {formData.adicionarProprietario && (
        <div>
          <label htmlFor="proprietarioNome">Owner Name:</label>
          <input
            type="text"
            id="proprietarioNome"
            name="nome"
            value={formData.proprietario.nome}
            onChange={handleProprietarioChange}
          />
          <label htmlFor="proprietarioEmail">Owner E-mail:</label>
          <input
            type="email"
            id="proprietarioEmail"
            name="email"
            value={formData.proprietario.email}
            onChange={handleProprietarioChange}
          />
          <label htmlFor="proprietarioCpfCnpj">Owner CPF/CNPJ:</label>
          <input
            type="text"
            id="proprietarioCpfCnpj"
            name="cpfCnpj"
            value={formData.proprietario.cpfCnpj}
            onChange={handleProprietarioChange}
          />
        </div>
      )}
      <div>
        <label htmlFor="authorization">Authorization:</label>
        <input
          type="text"
          id="authorization"
          name="authorization"
          value={formData.authorization}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="creaCau">CREA/CAU:</label>
        <input
          type="text"
          id="creaCau"
          name="creaCau"
          value={formData.creaCau}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="responsibleTechnical"
            checked={formData.responsibleTechnical}
            onChange={handleResponsavelTecnicoChange}
          />
          Responsible Technical
        </label>
        {formData.responsibleTechnical && (
          <div>
            <label htmlFor="responsibleName">Responsible Name:</label>
            <input
              type="text"
              id="responsibleName"
              name="nome"
              value={formData.responsible.nome}
              onChange={handleResponsavelChange}
            />
            <label htmlFor="responsibleCreaCau">CREA/CAU of Responsible:</label>
            <input
              type="text"
              id="responsibleCreaCau"
              name="creaCau"
              value={formData.responsible.creaCau}
              onChange={handleResponsavelChange}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="subdivision">Subdivision:</label>
        <input
          type="text"
          id="subdivision"
          name="subdivision"
          value={formData.subdivision}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="block">Block:</label>
        <input
          type="text"
          id="block"
          name="block"
          value={formData.block}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lot">Lot:</label>
        <input
          type="text"
          id="lot"
          name="lot"
          value={formData.lot}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="purposeOfWork">Purpose of Work:</label>
        <select
          id="purposeOfWork"
          name="purposeOfWork"
          value={formData.purposeOfWork}
          onChange={handleSelectChange}
        >
          <option value="Residential">Residential</option>
          <option value="Residential in Condominium">
            Residential in Condominium
          </option>
          <option value="Commercial">Commercial</option>
          <option value="Mixed">Mixed</option>
          <option value="Institutional">Institutional</option>
          <option value="Industrial">Industrial</option>
        </select>
      </div>
      <div>
        <label htmlFor="landArea">Land Area (m²):</label>
        <input
          type="text"
          id="landArea"
          name="landArea"
          value={formData.landArea}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          Land Situation:
          <label>
            <input
              type="radio"
              name="landSituation"
              value="Meio Esquina"
              checked={formData.landSituation === "Meio Esquina"}
              onChange={handleTipoPessoaChange}
            />
            Half Corner
          </label>
          <label>
            <input
              type="radio"
              name="landSituation"
              value="Esquina"
              checked={formData.landSituation === "Esquina"}
              onChange={handleTipoPessoaChange}
            />
            Corner
          </label>
        </label>
      </div>
      <div>
        <label htmlFor="permeabilityRate">Permeability Rate (%):</label>
        <input
          type="text"
          id="permeabilityRate"
          name="permeabilityRate"
          value={formData.permeabilityRate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="occupancyRate">Occupancy Rate (%):</label>
        <input
          type="text"
          id="occupancyRate"
          name="occupancyRate"
          value={formData.occupancyRate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="basementToBuild"
            checked={formData.basementToBuild}
            onChange={handleCheckboxChange}
          />
          Area to Build - Basement (m²):
        </label>
        {formData.basementToBuild &&
          formData.basementsToBuild.map((pavimento, index) => (
            <div key={index}>
              <label htmlFor={`basementPavimento${index + 1}`}>{`${
                index + 1
              }º Basement:`}</label>
              <input
                type="text"
                id={`basementPavimento${index + 1}`}
                name={`basementPavimento${index + 1}`}
                value={pavimento}
                onChange={(e) =>
                  handlePavimentoChange(index, e.target.value, "basementsToBuild")
                }
              />
            </div>
          ))}
        {formData.basementToBuild && (
          <button
            type="button"
            onClick={() =>
              handlePavimentoClick("basementToBuild", formData.basementsToBuild)
            }
          >
            Add Basement
          </button>
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="areaToBuildGroundFloor"
            onChange={handleCheckboxChange}
            checked={formData.areaToBuildGroundFloor}
          />
          Area to Build - Ground Floor (m²):
        </label>
        {formData.areaToBuildGroundFloor &&
          formData.areaToBuildGroundFloors.map((pavimento, index) => (
            <div key={index}>
              <label htmlFor={`groundFloorPavimento${index + 1}`}>{`${
                index + 1
              }º Ground Floor:`}</label>
              <input
                type="text"
                id={`groundFloorPavimento${index + 1}`}
                name={`groundFloorPavimento${index + 1}`}
                value={pavimento}
                onChange={(e) =>
                  handlePavimentoChange(index, e.target.value, "areaToBuildGroundFloor")
                }
              />
            </div>
          ))}
        {formData.areaToBuildGroundFloor && (
          <button
            type="button"
            onClick={() =>
              handlePavimentoClick(
                "areaToBuildGroundFloor",
                formData.areaToBuildGroundFloors
              )
            }
          >
            Add Ground Floor
          </button>
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="existingArea"
            checked={formData.existingArea}
            onChange={handleCheckboxChange}
          />
          Existing Area (m²):
        </label>
        {formData.existingArea &&
          formData.existingAreas.map((pavimento, index) => (
            <div key={index}>
              <label htmlFor={`existingAreaPavimento${index + 1}`}>{`${
                index + 1
              }º Existing Area:`}</label>
              <input
                type="text"
                id={`existingAreaPavimento${index + 1}`}
                name={`existingAreaPavimento${index + 1}`}
                value={pavimento}
                onChange={(e) =>
                  handlePavimentoChange(index, e.target.value, "existingAreas")
                }
              />
            </div>
          ))}
        {formData.existingArea && (
          <button
            type="button"
            onClick={() =>
              handlePavimentoClick("existingArea", formData.existingAreas)
            }
          >
            Add Existing Area
          </button>
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="existingBasementArea"
            checked={formData.existingBasementArea}
            onChange={handleCheckboxChange}
          />
          Existing Basement Area (m²):
        </label>
        {formData.existingBasementArea &&
          formData.existingBasementAreas.map((pavimento, index) => (
            <div key={index}>
              <label htmlFor={`existingBasementAreaPavimento${index + 1}`}>{`${
                index + 1
              }º Existing Basement Area:`}</label>
              <input
                type="text"
                id={`existingBasementAreaPavimento${index + 1}`}
                name={`existingBasementAreaPavimento${index + 1}`}
                value={pavimento}
                onChange={(e) =>
                  handlePavimentoChange(index, e.target.value, "existingBasementAreas")
                }
              />
            </div>
          ))}
        {formData.existingBasementArea && (
          <button
            type="button"
            onClick={() =>
              handlePavimentoClick(
                "existingBasementArea",
                formData.existingBasementAreas
              )
            }
          >
            Add Existing Basement Area
          </button>
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="deckOrPoolArea"
            checked={formData.deckOrPoolArea}
            onChange={handleCheckboxChange}
          />
          Deck/Pool Area (m²):
        </label>
        {formData.deckOrPoolArea &&
          formData.deckOrPoolAreas.map((pavimento, index) => (
            <div key={index}>
              <label htmlFor={`deckOrPoolAreaPavimento${index + 1}`}>{`${
                index + 1
              }º Deck/Pool Area:`}</label>
              <input
                type="text"
                id={`deckOrPoolAreaPavimento${index + 1}`}
                name={`deckOrPoolAreaPavimento${index + 1}`}
                value={pavimento}
                onChange={(e) =>
                  handlePavimentoChange(index, e.target.value, "deckOrPoolAreas")
                }
              />
            </div>
          ))}
        {formData.deckOrPoolArea && (
          <button
            type="button"
            onClick={() =>
              handlePavimentoClick("deckOrPoolArea", formData.deckOrPoolAreas)
            }
          >
            Add Deck/Pool Area
          </button>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CadastroForm;
