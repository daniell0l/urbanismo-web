import React, { useState } from "react";
import "../projectPermit/style.css";
import "./style.css"
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

const listUserSelect = [
    "Coordenador",
    "Fiscal",
    "Analista",
    "Administrador",
    "Clientes"
];


const listUser: React.FC = () => {
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
                <SideBar title="" />
            </div>
            <div className="navbar">
                <div className="procesSearch">
                    <div className="protocolAddres">
                        <select
                            name="protocolAddres"
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

export default listUser;
