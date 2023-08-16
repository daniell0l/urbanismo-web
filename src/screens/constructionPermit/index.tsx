import React, { useState } from "react";
import "./style.css";
import Header from '../../components/header';
import SideBar from "../../components/sideBar";

interface Result {
    id: number;
    ir: string;
    proprietors: string;
    address: string;
    district: string;
    data: string;
}

const procesSituation = [
    "A ser analisado",
    "Em estado de análise",
    "Insuficiente",
    "Reprovado",
    "Aprovado"
];

const protocolAddres = [
    "Alvará",
    "alvará de construção",
    "Proprietários",
];

export const ConstructionPermit: React.FC = () => {
    const [formState, setFormState] = useState<{
        procesSituation: string;
        protocolAddres: string;
        searchTerm: string;
    }>({
        procesSituation: "",
        protocolAddres: "",
        searchTerm: "",
    });

    const [results, setResults] = useState<Result[]>([]);

    const handleChange = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
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
                result.proprietors
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.address
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.district
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.data.toLowerCase().includes(formState.searchTerm.toLowerCase())
        );

        setResults(filteredResults);
    };

    return (
        <div id="process">
            <div>
                <Header title="" />
            </div>
            <div>
                <SideBar></SideBar>
            </div>
            <div className="navbar">
                <div className="procesSearch">
                    <div className="procesSituation">
                        <select
                            name="procesSituation"
                            value={formState.procesSituation}
                            onChange={handleChange}
                        >
                            <option value="">Situação do projeto</option>
                            {procesSituation.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="protocolAddres">
                        <select
                            name="protocolAddres"
                            value={formState.protocolAddres}
                            onChange={handleChange}
                        >
                            <option value="">Protocolo/Endereço</option>
                            {protocolAddres.map((option, index) => (
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
                            <th>Ir</th>
                            <th>Proprietário</th>
                            <th>Endireitar</th>
                            <th>Bairro</th>
                            <th>Dados</th>
                            <th>Ações</th>
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
        </div>
    );
};

