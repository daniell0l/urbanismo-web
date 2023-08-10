import React, { useState } from 'react';

const AdicionarPavimentoButton = () => {
  const [pavimentos, setPavimentos] = useState<string[]>(['']);

  const handleAdicionarPavimento = () => {
    setPavimentos([...pavimentos, '']);
  };

  const handleRemoverPavimento = (index) => {
    if (pavimentos.length === 1) {
      return; // Não remover o último pavimento
    }
    const novosPavimentos = [...pavimentos];
    novosPavimentos.splice(index, 1);
    setPavimentos(novosPavimentos);
  };

  const handleInputChange = (event, index) => {
    const novosPavimentos = [...pavimentos];
    novosPavimentos[index] = event.target.value;
    setPavimentos(novosPavimentos);
  };

  return (
    <div>
      {pavimentos.map((pavimento, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`${index + 1}º Pavimento`}
            value={pavimento}
            onChange={(event) => handleInputChange(event, index)}
          />
        </div>
      ))}
      <button onClick={handleAdicionarPavimento}>+</button>
      {pavimentos.length > 1 && (
        <button onClick={() => handleRemoverPavimento(pavimentos.length - 1)}>-</button>
      )}
    </div>
  );
};

export default AdicionarPavimentoButton;
