import React, { useState } from 'react';

interface Own {
  nome: string;
  cpfCnpj: string;
  creacau: string;
}

export const AddOwnButton: React.FC = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [Own, setOwn] = useState<Own>({
    nome: '',
    cpfCnpj: '',
    creacau: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOwn((prevOwn) => ({
      ...prevOwn,
      [name]: value,
    }));
  };

  const handleAddOwn = () => {
    console.log('Own:', Own);
    setOwn({
      nome: '',
      cpfCnpj: '',
      creacau: '',
    });
    setShowInputs(false);
  };

  const handleExcluir = () => {
    console.log('Excluindo proprietário:', Own);
    setOwn({
      nome: '',
      cpfCnpj: '',
      creacau: '',
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
            value={Own.nome}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cpfCnpj"
            placeholder="CPF/CNPJ"
            value={Own.cpfCnpj}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="creacau"
            placeholder="CREA/CAU"
            value={Own.creacau}
            onChange={handleInputChange}
          />
          <button onClick={handleAddOwn}>Adicionar</button>
          <button onClick={handleExcluir}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default AddOwnButton;
