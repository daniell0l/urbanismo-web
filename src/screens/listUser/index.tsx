import React, { useState } from "react";
import "../projectPermit/style.css";
import "./style.css"
import Header from '../../components/header';
import SideBar from "../../components/sideBar";

interface Result {
    name: string;
    department: string;
    positionFunction: string;
    email: string;
    date: string;
    activateDeactivate: string;
}

const listUserSelect = [
    "Coordenador",
    "Fiscal",
    "Analista",
    "Administrador",
    "Clientes"
];


export const ListUser: React.FC = () => {
    const [formState, setFormState] = useState<{
        listUser: string;
        searchTerm: string;
    }>({
        listUser: "",
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
                result.department
                    .toLowerCase()
                    .includes(formState.searchTerm.toLowerCase()) ||
                result.positionFunction
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
                            name="listUser"
                            value={formState.listUser}
                            onChange={handleChange}
                        >
                            <option value="">Usuários</option>
                            {listUserSelect.map((option, index) => (
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
                            <th>Departamento</th>
                            <th>Cargo/Função</th>
                            <th>E-mail</th>
                            <th>Data</th>
                            <th>Aitva/Desativa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.name}>
                                <td>{result.name}</td>
                                <td>{result.department}</td>
                                <td>{result.positionFunction}</td>
                                <td>{result.email}</td>
                                <td>{result.date}</td>
                                <td>{result.activateDeactivate}</td>
                                <td>Actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

