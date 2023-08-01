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
    cpfCnpj: string;
    role: "Engenheiro" | "Arquiteto";
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
      cpfCnpj: "",
      role: "Engenheiro",
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

  const handleTipoPessoaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
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
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
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
          <div className="SelectTipoPessoa">
            <select 
              name="tipoPessoa"
              value={formData.tipoPessoa}
              onChange={handleTipoPessoaChange}
            >
              <option value="Física">Física</option>
              <option value="Jurídica">Jurídica</option>
            </select>
          </div>
          <div className="checkboxOwner">
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
{/* .............................................................................linha teste */}
        </div>
        <div className="DadosProprietario">
          <span className="line-with-name">Dados do projeto</span>
          <div className="flex-container">
            <input
              type="text"
              placeholder="Auditoria"
              name="nome"
              value={formData.nome}
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
              name="tipoPessoa"
              value={formData.tipoPessoa}
              onChange={handleTipoPessoaChange}
            >
              <option value="Física">Engenheiro</option>
              <option value="Jurídica">Arquiteto</option>
            </select>
          </div>
          <div className="checkboxTechnical">
            <input
              type="checkbox"
              name="adicionar"
              checked={formData.responsibleTechnical}
              onChange={handleResponsavelTecnicoChange}
            />
            <span>Responsável técnico</span>
          </div>
          {formData.responsibleTechnical && (
            <div className="flex-container">
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                value={formData.proprietario.nome}
                onChange={handleResponsavelChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.proprietario.email}
                onChange={handleResponsavelChange}
              />
              <input
                type="text"
                placeholder="CPF/CNPJ"
                name="cpfCnpj"
                value={formData.proprietario.cpfCnpj}
                onChange={handleResponsavelChange}
              />
            </div>
          )}
        </div>

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
        <button className="RegistrationProcessButton" type="submit">
          Cadastrar processo
        </button>
      </div>
    </form>
  );
};

export default CadastroForm;
