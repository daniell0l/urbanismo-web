import React, { useState } from 'react';

interface Proprietario {
  nome: string;
  cpfCnpj: string;
  creaCau: string;
}

const AddProprietarioButton: React.FC = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [proprietario, setProprietario] = useState<Proprietario>({
    nome: '',
    cpfCnpj: '',
    creaCau: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProprietario((prevProprietario) => ({
      ...prevProprietario,
      [name]: value,
    }));
  };

  const handleAddProprietario = () => {
    console.log('Proprietário:', proprietario);
    setProprietario({
      nome: '',
      cpfCnpj: '',
      creaCau: '',
    });
    setShowInputs(false);
  };

  const handleExcluir = () => {
    console.log('Excluindo proprietário:', proprietario);
    setProprietario({
      nome: '',
      cpfCnpj: '',
      creaCau: '',
    });
    setShowInputs(false);
  };

  return (
    <div>
      {!showInputs ? (
        <button onClick={() => setShowInputs(true)}>Adicionar Proprietário</button>
      ) : (
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={proprietario.nome}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cpfCnpj"
            placeholder="CPF/CNPJ"
            value={proprietario.cpfCnpj}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="creaCau"
            placeholder="CREA/CAU"
            value={proprietario.creaCau}
            onChange={handleInputChange}
          />
          <button onClick={handleAddProprietario}>Adicionar</button>
          <button onClick={handleExcluir}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default AddProprietarioButton;
