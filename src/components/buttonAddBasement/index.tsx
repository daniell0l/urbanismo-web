import React, { useState } from 'react';

const AdicionarPavimentoButton = () => {
  const [pavimentos, setPavimentos] = useState<string[]>(['1']);

  const handleAdicionarPavimento = (event) => {
    if (event.key === 'Enter') {
      const proximoNumeroPavimento = pavimentos.length + 1;
      setPavimentos([...pavimentos, proximoNumeroPavimento.toString()]);
    }
  };

  return (
    <div>
      {pavimentos.map((pavimento, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`${pavimento}º Pavimento`}
            onKeyDown={handleAdicionarPavimento}
            onChange={(event) => {
              const novosPavimentos = [...pavimentos];
              novosPavimentos[index] = event.target.value;
              setPavimentos(novosPavimentos);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AdicionarPavimentoButton;
