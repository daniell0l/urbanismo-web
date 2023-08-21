import React, { useState } from "react";
import "./style.css";
import Header from '../../components/header';
import SideBar from "../../components/sideBar";
import {SearchPrincipal} from "../../components/search"


const optionsConstruction = [
  "Alvará de construção",
  "Alvará de regularização",
  "Condomínio",
  "Redimensionando",
  "Alvará de projeto",
  "Subdivisão",
];

const optionsProtocol = [
  "Protocolo/Endereço",
  "Alvará",
  "alvará de construção",
  "Proprietários",
];

export const Principal: React.FC = () => {
  const [formState, setFormState] = useState<{
    selectedConstruction: string;
    selectedProtocol: string;
    searchTerm: string;
  }>({
    selectedConstruction: "",
    selectedProtocol: "",
    searchTerm: "",
  });


  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="principal">
      <div>
      <Header title=""/>
      </div>
      <div>
      <SideBar></SideBar>
      </div>
      <div className="navbar">
        <div className="construction-protocol">
          <div className="selectedConstruction">
            <select
              name="selectedConstruction"
              value={formState.selectedConstruction}
              onChange={handleChange}
            >
              <option value="">tipo de projeto</option>
              {optionsConstruction.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="selectedProtocol">
            <select
              name="selectedProtocol"
              value={formState.selectedProtocol}
              onChange={handleChange}
            >
              <option value="">Processos</option>
              {optionsProtocol.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="Search">
          <SearchPrincipal></SearchPrincipal>
          </div>
        </div>
      </div>
      <div className="Search-result">
        <table>
          <thead>
            <tr>
              <th>Ir</th>
              <th>Proprietário</th>
              <th>Endireitar</th>
              <th>Bairro</th>
              <th>Dados</th>
              <th>Ações</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

