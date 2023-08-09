import React, { useState } from 'react';

interface Techinical {
  nome: string;
  cpfCnpj: string;
  creacau: string;
}

const AddTechinicalButton: React.FC = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [Techinical , setTechinical ] = useState<Techinical >({
    nome: '',
    cpfCnpj: '',
    creacau: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTechinical ((prevTechinical ) => ({
      ...prevTechinical ,
      [name]: value,
    }));
  };

  const handleAddTechinical  = () => {
    console.log('Techinical :', Techinical );
    setTechinical ({
      nome: '',
      cpfCnpj: '',
      creacau: '',
    });
    setShowInputs(false);
  };

  const handleExcluir = () => {
    console.log('Excluindo técnico:',Techinical );
    setTechinical ({
      nome: '',
      cpfCnpj: '',
      creacau: '',
    });
    setShowInputs(false);
  };

  return (
    <div>
      {!showInputs ? (
        <button onClick={() => setShowInputs(true)}> responsável técnico</button>
      ) : (
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={Techinical .nome}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cpfCnpj"
            placeholder="CPF/CNPJ"
            value={Techinical .cpfCnpj}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="creacau"
            placeholder="CREA/CAU"
            value={Techinical .creacau}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTechinical }>Adicionar</button>
          <button onClick={handleExcluir}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default AddTechinicalButton;
