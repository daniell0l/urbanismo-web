import React, { useState } from 'react';

const AdicionarPavimentoButton = () => {
  const [pavimentos, setPavimentos] = useState<string[]>(['1']);

  const handleAdicionarPavimento = () => {
    const proximoNumeroPavimento = pavimentos.length + 1;
    setPavimentos([...pavimentos, proximoNumeroPavimento.toString()]);
  };

  const handleRemoverPavimento = (index) => {
    const novosPavimentos = [...pavimentos];
    novosPavimentos.splice(index, 1);
    setPavimentos(novosPavimentos);
  };

  return (
    <div>
      {pavimentos.map((pavimento, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`${pavimento}º Pavimento`}
            onChange={(event) => {
              const novosPavimentos = [...pavimentos];
              novosPavimentos[index] = event.target.value;
              setPavimentos(novosPavimentos);
            }}
          />
          <button onClick={handleAdicionarPavimento}>+</button>
      <button onClick={() => handleRemoverPavimento(index)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default AdicionarPavimentoButton;
