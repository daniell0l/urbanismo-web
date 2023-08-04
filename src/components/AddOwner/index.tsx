import React, { useState } from 'react';

interface Own {
  nome: string;
  cpfCnpj: string;
  creaCau: string;
}

const AddOwnButton: React.FC = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [Own, setOwn] = useState<Own>({
    nome: '',
    cpfCnpj: '',
    creaCau: '',
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
      creaCau: '',
    });
    setShowInputs(false);
  };

  const handleExcluir = () => {
    console.log('Excluindo proprietário:', Own);
    setOwn({
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
            name="creaCau"
            placeholder="CREA/CAU"
            value={Own.creaCau}
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
