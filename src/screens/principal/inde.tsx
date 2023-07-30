import React, { useState } from 'react';

interface Result {
  id: number;
  ir: string;
  proprietors: string;
  address: string;
  district: string;
  data: string;
}

const optionsConstruction = [
  'Construction Permit',
  'Regularization Permit',
  'Condominium',
  'Resizing',
  'Project Permit',
  'Subdivision',
];

const optionsProtocol = ['Protocol/Address', 'Permit', 'Occupancy Permit', 'Owners'];

const TableComponent: React.FC = () => {
  const [selectedConstruction, setSelectedConstruction] = useState<string>('');
  const [selectedProtocol, setSelectedProtocol] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [results, setResults] = useState<Result[]>([

  ]);

  const handleSearch = () => {
    const filteredResults = results.filter(
      (result) =>
        result.ir.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.proprietors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.data.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <div>
        <select
          value={selectedConstruction}
          onChange={(e) => setSelectedConstruction(e.target.value)}
        >
          <option value="">Select Construction Type</option>
          {optionsConstruction.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select value={selectedProtocol} onChange={(e) => setSelectedProtocol(e.target.value)}>
          <option value="">Select Protocol Type</option>
          {optionsProtocol.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
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
  );
};

export default TableComponent;
