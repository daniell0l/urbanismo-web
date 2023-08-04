import React, { useState } from "react";

interface PavementData {
  areaConstruir: string;
  areaExistente: string;
  areaExclusiva: string;
  areaComum: string;
}

interface UnitData {
  loteamento: string;
  quadra: string;
  lote: string;
  numero: string;
  pavements: PavementData[];
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
        pavements: [],
        processType: "",
      },
    ]);
  };

  const handleRemoveUnitClick = () => {
    if (unitCount > 0) {
      setUnitCount((prevCount) => prevCount - 1);
      setUnitData((prevData) => prevData.slice(0, prevData.length - 1));
    }
  };

  const handleAddPavements = (index: number) => {
    setModalUnitIndex(index);
    setIsModalOpen(true);
  };

  const handleAddPavement = (index: number) => {
    setUnitData((prevData) => {
      const newData = [...prevData];
      newData[index].pavements.push({
        areaConstruir: "",
        areaExistente: "",
        areaExclusiva: "",
        areaComum: "",
      });
      return newData;
    });
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

  const handleChangePavement = (
    unitIndex: number,
    pavementIndex: number,
    field: keyof PavementData,
    value: string
  ) => {
    setUnitData((prevData) => {
      const newData = [...prevData];
      newData[unitIndex].pavements[pavementIndex][field] = value;
      return newData;
    });
  };

  return (
    <div>
      <button onClick={handleAddUnitClick}>Adicionar Unidade</button>
      {unitCount > 0 && (
        <button onClick={handleRemoveUnitClick}>Remover Unidade</button>
      )}
      {Array.from({ length: unitCount }).map((_, index) => (
        <div key={index}>
          <div>Casa {index + 1}</div>
          <div>
            <label>Tipo de Processo:</label>
            <select>
              <option value="">Selecione</option>
              <option value="Construção">Construção</option>
              <option value="Regularização">Regularização</option>
              <option value="Acréscimo de Área">Acréscimo de Área</option>
            </select>
          </div>
          <div>
            <label>Loteamento:</label>
            <input
              type="text"
              value={unitData[index]?.loteamento}
              onChange={(e) =>
                handleChange(index, "loteamento", e.target.value)
              }
            />
          </div>
          <div>
            <label>Quadra:</label>
            <input
              type="text"
              value={unitData[index]?.quadra}
              onChange={(e) => handleChange(index, "quadra", e.target.value)}
            />
          </div>
          <div>
            <label>Lote:</label>
            <input
              type="text"
              value={unitData[index]?.lote}
              onChange={(e) => handleChange(index, "lote", e.target.value)}
            />
          </div>
          <div>
            <label>Nº:</label>
            <input
              type="text"
              value={unitData[index]?.numero}
              onChange={(e) => handleChange(index, "numero", e.target.value)}
            />
          </div>
          <div>
            <label>Área a Construir(m²):</label>
            <input
              type="text"
              value={unitData[index]?.areaConstruir}
              onChange={(e) =>
                handleChange(index, "areaConstruir", e.target.value)
              }
            />
          </div>
          <div>
            <label>Área Existente(m²):</label>
            <input
              type="text"
              value={unitData[index]?.areaExistente}
              onChange={(e) =>
                handleChange(index, "areaExistente", e.target.value)
              }
            />
          </div>
          <div>
            <label>Área de Uso Exclusivo(m²):</label>
            <input
              type="text"
              value={unitData[index]?.areaExclusiva}
              onChange={(e) =>
                handleChange(index, "areaExclusiva", e.target.value)
              }
            />
          </div>
          <div>
            <label>Área Comum Proporcional(m²):</label>
            <input
              type="text"
              value={unitData[index]?.areaComum}
              onChange={(e) => handleChange(index, "areaComum", e.target.value)}
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
          {unitData[index]?.processType && (
            <div>
              <button onClick={() => handleAddPavement(index)}>
                Adicionar pavimento
              </button>
            </div>
          )}
          {unitData[index]?.pavements.map((pavement, pavementIndex) => (
            <div key={pavementIndex}>
              <div>Pavimento {pavementIndex + 1}</div>
              <div>
                <label>Área a Construir(m²):</label>
                <input
                  type="text"
                  value={pavement.areaConstruir}
                  onChange={(e) =>
                    handleChangePavement(
                      index,
                      pavementIndex,
                      "areaConstruir",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label>Área Existente(m²):</label>
                <input
                  type="text"
                  value={pavement.areaExistente}
                  onChange={(e) =>
                    handleChangePavement(
                      index,
                      pavementIndex,
                      "areaExistente",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label>Área de Uso Exclusivo(m²):</label>
                <input
                  type="text"
                  value={pavement.areaExclusiva}
                  onChange={(e) =>
                    handleChangePavement(
                      index,
                      pavementIndex,
                      "areaExclusiva",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label>Área Comum Proporcional(m²):</label>
                <input
                  type="text"
                  value={pavement.areaComum}
                  onChange={(e) =>
                    handleChangePavement(
                      index,
                      pavementIndex,
                      "areaComum",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AddUnitButton;
