import React, { useState } from "react";
import "./style.css";

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
        setFormData({
          ...formData,
          areaToBuildGroundFloors: [...pavimentos, ""],
        });
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
      <div id="container">
        <div className="DadosProprietario">
          <span className="line-with-name">Dados do Proprietário</span>
          <div className="flex-container">
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              value={formData.nome}
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

          <div className="radio-checkbox">
            <input
              type="radio"
              name="tipoPessoa"
              value="Física"
              checked={formData.tipoPessoa === "Física"}
              onChange={handleTipoPessoaChange}
            />
            <span>Física</span>
            <input
              type="radio"
              name="tipoPessoa"
              value="Jurídica"
              checked={formData.tipoPessoa === "Jurídica"}
              onChange={handleTipoPessoaChange}
            />
            <span>Jurídica</span>
          </div>

          <div className="checkbox-Owner">
            <input
              type="checkbox"
              name="adicionarProprietario"
              checked={formData.adicionarProprietario}
              onChange={handleAdicionarProprietarioChange}
            />
            <span>Adicionar proprietário</span>
          </div>

          {formData.adicionarProprietario && (
            <div className="flex-container">
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                value={formData.proprietario.nome}
                onChange={handleProprietarioChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.proprietario.email}
                onChange={handleProprietarioChange}
              />
              <input
                type="text"
                placeholder="CPF/CNPJ"
                name="cpfCnpj"
                value={formData.proprietario.cpfCnpj}
                onChange={handleProprietarioChange}
              />
            </div>
          )}
        </div>

        <div className="DadosProjeto">
          <div className="flex-container">
            <input
              type="text"
              placeholder="Autoria"
              name="authorization"
              value={formData.authorization}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="CREA/CAU"
              name="creaCau"
              value={formData.creaCau}
              onChange={handleInputChange}
            />
          </div>

          <div className="checkboxResponsabile">
            <input
              type="checkbox"
              name="responsibleTechnical"
              checked={formData.responsibleTechnical}
              onChange={handleResponsavelTecnicoChange}
            />
            <span className="checkbox">Responsável técnico</span>

            {formData.responsibleTechnical && (
              <div className="flex-container">
                <input
                  type="text"
                  placeholder="Nome"
                  name="nome"
                  value={formData.responsible.nome}
                  onChange={handleResponsavelChange}
                />
                <input
                  type="text"
                  placeholder="CREA/CAU"
                  name="creaCau"
                  value={formData.responsible.creaCau}
                  onChange={handleResponsavelChange}
                />
              </div>
            )}
          </div>
        </div>
        <span className="line-with-name">Dados do Projeto</span>
        <div className="DadosEndereco">
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
          <input
            className="min-Address"
            type="text"
            placeholder="Bloco"
            name="block"
            value={formData.block}
            onChange={handleInputChange}
          />
          <input
            className="min-Address"
            type="text"
            placeholder="Lote"
            name="lot"
            value={formData.lot}
            onChange={handleInputChange}
          />
          <input
            className="min-Address"
            type="text"
            placeholder="Nº"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
          <input type="text" placeholder="Bahia" />
          <input type="text" placeholder="Luís Eduardo Magalhães" />
        </div>
        <div className="DadosTerreno">
          <span className="line-with-name">Dados do Terreno</span>
          <label htmlFor="">Finalidade da obra: </label>
          <div className="selectTerreno">
            <select
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
          <input
            type="text"
            placeholder="Área terreno (m²)"
            name="landArea"
            value={formData.landArea}
            onChange={handleInputChange}
          />
          <div className="radio-Terreno">
            <label>Situação terreno:</label>
            <div className="radio-Terreno">
              <input
                type="radio"
                id="meioEsquina"
                name="landSituation"
                value="Meio Esquina"
              />
              <span>Meia esquina</span>
            </div>

            <div className="radio-container">
              <input
                type="radio"
                id="esquina"
                name="landSituation"
                value="Esquina"
              />
              <span>Esquina</span>
            </div>
          </div>
          <br />
          <br />
          <div className="InputTerreno">
            <input
              type="text"
              placeholder="Taxa de permeabilidade (%)"
              name="permeabilityRate"
              value={formData.permeabilityRate}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Taxa de ocupação (%)"
              name="occupancyRate"
              value={formData.occupancyRate}
              onChange={handleInputChange}
            />
          </div>
          <div className="radio-DadosTerreno">
            <input
              type="checkbox"
              name="basementToBuild"
              checked={formData.basementToBuild}
              onChange={handleCheckboxChange}
            />
            <span>Área construir - Pavimento Térreo (m²):</span>
            {formData.basementToBuild &&
              formData.basementsToBuild.map((pavimento, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`${index + 1}º Basement:`}
                    name={`basementPavimento${index + 1}`}
                    value={pavimento}
                    onChange={(e) =>
                      handlePavimentoChange(
                        index,
                        e.target.value,
                        "basementsToBuild"
                      )
                    }
                  />
                </div>
              ))}
            {formData.basementToBuild && (
              <button
                type="button"
                onClick={() =>
                  handlePavimentoClick(
                    "basementToBuild",
                    formData.basementsToBuild
                  )
                }
              >
                Adicionar pavimento
              </button>
            )}
            <input
              type="checkbox"
              name="areaToBuildGroundFloor"
              onChange={handleCheckboxChange}
              checked={formData.areaToBuildGroundFloor}
            />
            <span>Área Subsolo a Construir (m²):</span>
            {formData.areaToBuildGroundFloor &&
              formData.areaToBuildGroundFloors.map((pavimento, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`${index + 1}º Ground Floor:`}
                    name={`groundFloorPavimento${index + 1}`}
                    value={pavimento}
                    onChange={(e) =>
                      handlePavimentoChange(
                        index,
                        e.target.value,
                        "areaToBuildGroundFloor"
                      )
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
                Adicionar pavimento
              </button>
            )}
            <div>
              <input
                type="checkbox"
                name="existingArea"
                checked={formData.existingArea}
                onChange={handleCheckboxChange}
              />
              <span>Área Subsolo Existente (m²):</span>
              {formData.existingArea &&
                formData.existingAreas.map((pavimento, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder={`${index + 1}º Existing Area:`}
                      name={`existingAreaPavimento${index + 1}`}
                      value={pavimento}
                      onChange={(e) =>
                        handlePavimentoChange(
                          index,
                          e.target.value,
                          "existingAreas"
                        )
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
                  Adicionar pavimento
                </button>
              )}
            </div>
            <input
              type="checkbox"
              name="existingBasementArea"
              checked={formData.existingBasementArea}
              onChange={handleCheckboxChange}
            />
            <span>Área Existente (m²):</span>
            {formData.existingBasementArea &&
              formData.existingBasementAreas.map((pavimento, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`${index + 1}º Existing Basement Area:`}
                    name={`existingBasementAreaPavimento${index + 1}`}
                    value={pavimento}
                    onChange={(e) =>
                      handlePavimentoChange(
                        index,
                        e.target.value,
                        "existingBasementAreas"
                      )
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
                Adicionar pavimento
              </button>
            )}
            <input
              type="checkbox"
              name="deckOrPoolArea"
              checked={formData.deckOrPoolArea}
              onChange={handleCheckboxChange}
            />
            <span>Área Deck ou Piscina (m²):</span>
            {formData.deckOrPoolArea &&
              formData.deckOrPoolAreas.map((pavimento, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`${index + 1}º Deck/Pool Area:`}
                    name={`deckOrPoolAreaPavimento${index + 1}`}
                    value={pavimento}
                    onChange={(e) =>
                      handlePavimentoChange(
                        index,
                        e.target.value,
                        "deckOrPoolAreas"
                      )
                    }
                  />
                </div>
              ))}
            {formData.deckOrPoolArea && (
              <button
                type="button"
                onClick={() =>
                  handlePavimentoClick(
                    "deckOrPoolArea",
                    formData.deckOrPoolAreas
                  )
                }
              >
                Adicionar pavimento
              </button>
            )}
          </div>
        </div>
        <button className="RegistrationProcessButton" type="submit">
        Cadastrar processo
      </button>
      </div>
    </form>
  );
};

export default CadastroForm;
