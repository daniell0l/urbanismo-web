import React, { useState } from "react";
import "./style.css";

interface Result {
  id: number;
  ir: string;
  proprietors: string;
  address: string;
  district: string;
  data: string;
}

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

const TableComponent: React.FC = () => {
  const [formState, setFormState] = useState<{
    selectedConstruction: string;
    selectedProtocol: string;
    searchTerm: string;
  }>({
    selectedConstruction: "",
    selectedProtocol: "",
    searchTerm: "",
  });

  const [results, setResults] = useState<Result[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filteredResults = results.filter(
      (result) =>
        result.ir.toLowerCase().includes(formState.searchTerm.toLowerCase()) ||
        result.proprietors.toLowerCase().includes(formState.searchTerm.toLowerCase()) ||
        result.address.toLowerCase().includes(formState.searchTerm.toLowerCase()) ||
        result.district.toLowerCase().includes(formState.searchTerm.toLowerCase()) ||
        result.data.toLowerCase().includes(formState.searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div id="principal">
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
            <input
              type="text"
              name="searchTerm"
              value={formState.searchTerm}
              onChange={handleChange}
              placeholder="Pesquisar..."
            />
            <button onClick={handleSearch}>Procurar</button>
          </div>
        </div>
      </div>
      <div className="Search-result">
        <table>
          <thead>
            <tr>
              <th>IR</th>
              <th>Proprietors</th>
              <th>Address</th>
              <th>District</th>
              <th>Data</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.ir}</td>
                <td>{result.proprietors}</td>
                <td>{result.address}</td>
                <td>{result.district}</td>
                <td>{result.data}</td>
                <td>Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="javascript:history.go(-1)">voltar a página anterior</a>
    </div>
  );
};

export default TableComponent;
