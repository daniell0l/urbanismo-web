import React, { useState } from "react";
import "./style.css";

interface UnitData {
  areaConstruir: string;
  areaExistente: string;
  areaExclusiva: string;
  areaComum: string;
  loteamento: string;
  quadra: string;
  lote: string;
  numero: string;
  processType: string;
}

const AddUnitButton: React.FC = () => {
  const [unitCount, setUnitCount] = useState(0);
  const [unitData, setUnitData] = useState<UnitData[]>([]);

  const handleAddUnitClick = () => {
    setUnitCount((prevCount) => prevCount + 1);
    setUnitData((prevData) => [
      ...prevData,
      {
        loteamento: "",
        quadra: "",
        lote: "",
        numero: "",
        processType: "",
        areaConstruir: "",
        areaExistente: "",
        areaExclusiva: "",
        areaComum: "",
      },
    ]);
  };

  const handleRemoveUnitClick = () => {
    if (unitCount > 0) {
      setUnitCount((prevCount) => prevCount - 1);
      setUnitData((prevData) => prevData.slice(0, prevData.length - 1));
    }
  };

  const handleChange = (
    index: number,
    field: keyof UnitData,
    value: string
  ) => {
    setUnitData((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      return newData;
    });
  };
  return (
    <div>
      <button onClick={handleAddUnitClick}>+</button>
      {unitCount > 0 && (
        <button onClick={handleRemoveUnitClick}>-</button>
      )}
      {Array.from({ length: unitCount }).map((_, index) => (
        <div key={index}>
          <div>
            <input
              type="text"
              placeholder="Loteamento"
              value={unitData[index]?.loteamento}
              onChange={(e) =>
                handleChange(index, "loteamento", e.target.value)
              }
            />
          </div>
          <div className="minAddres">
            <input
              type="text"
              placeholder="Quadra"
              value={unitData[index]?.quadra}
              onChange={(e) => handleChange(index, "quadra", e.target.value)}
            />
          </div>
          <div className="minAddres">
            <input
              type="text"
              placeholder="Lote"
              value={unitData[index]?.lote}
              onChange={(e) => handleChange(index, "lote", e.target.value)}
            />
          </div>
          <div className="minAddres">
            <input
              type="text"
              placeholder="Nº"
              value={unitData[index]?.numero}
              onChange={(e) => handleChange(index, "numero", e.target.value)}
            />
          </div>
          <div>
            <select
              value={unitData[index]?.processType}
              onChange={(e) =>
                handleChange(index, "processType", e.target.value)
              }
            >
              <option value="">Selecione</option>
              <option value="Construção">Construção</option>
              <option value="Regularização">Regularização</option>
              <option value="Acréscimo de Área">Acréscimo de Área</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Área a Construir(m²)"
              value={unitData[index]?.areaConstruir}
              onChange={(e) =>
                handleChange(index, "areaConstruir", e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Área Existente(m²)"
              value={unitData[index]?.areaExistente}
              onChange={(e) =>
                handleChange(index, "areaExistente", e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Área de Uso Exclusivo(m²)"
              value={unitData[index]?.areaExclusiva}
              onChange={(e) =>
                handleChange(index, "areaExclusiva", e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Área Comum Proporcional(m²)"
              value={unitData[index]?.areaComum}
              onChange={(e) => handleChange(index, "areaComum", e.target.value)}
            />
          </div>
          {unitData[index]?.processType && (
            <div>
              <button onClick={() => handleAddUnitClick()}>
                Adicionar pavimento
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddUnitButton;
