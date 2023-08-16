import React, { useState } from "react";
import "../projectPermit/style.css";
import "../listUser/style.css"
import Header from '../../components/header';
import SideBar from "../../components/sideBar";

interface Result {
    name: string;
    profissional: string;
    email: string;
    date: string;
    activateDeactivate: string;
}

const listClientsSelect = [
    "Engenheiro",
    "Técnico",
    "Arquiteto",
];


export const ListClients: React.FC = () => {
    const [formState, setFormState] = useState<{
        listclients: string;
        searchTerm: string;
    }>({
        listclients: "",
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
                result.name
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.profissional
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.email
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.date
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.activateDeactivate
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase())
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
                    <div className="protocolAddres">
                        <select
                            name="listclients"
                            value={formState.listclients}
                            onChange={handleChange}
                        >
                            <option value="">Clientes</option>
                            {listClientsSelect.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="SearchUser">
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
                            <th>Nome</th>
                            <th>Profissional</th>
                            <th>E-mail</th>
                            <th>Data</th>
                            <th>Aitva/Desativa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.name}>
                                <td>{result.name}</td>
                                <td>{result.profissional}</td>
                                <td>{result.email}</td>
                                <td>{result.date}</td>
                                <td>{result.activateDeactivate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};