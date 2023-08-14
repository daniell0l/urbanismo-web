import React, { useState } from "react";
import "./style.css";

interface SideBarProps {
}

const SideBar: React.FC<SideBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProcessOptions, setShowProcessOptions] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    setShowProcessOptions(false);
  };

  const toggleProcessOptions = () => {
    setShowProcessOptions(!showProcessOptions);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={toggleSideBar}>
      <div className="toggle">
        {!isOpen && <div className="toggle-icon">☰</div>}
      </div>
      <div className="menu" onClick={(e) => e.stopPropagation()}>
        <div className="menu-item" onClick={toggleProcessOptions}>
          Cadastrar processos
          {showProcessOptions ? <div className="arrow">▼</div> : <div className="arrow">▶</div>}
        </div>
        {showProcessOptions && (
          <div className="submenu">
            <div className="submenu-item">Alvará Construção</div>
            <div className="submenu-item">Alvará Regularização</div>
            <div className="submenu-item">Condomínio</div>
            <div className="submenu-item">Redimensionamento</div>
          </div>
        )}
      </div>
      <div className="menu" onClick={(e) => e.stopPropagation()}>
        <div className="menu-item" onClick={toggleProcessOptions}>
          Listar processos
          {showProcessOptions ? <div className="arrow">▼</div> : <div className="arrow">▶</div>}
        </div>
        {showProcessOptions && (
          <div className="submenu">
            <div className="submenu-item">Alvará Construção</div>
            <div className="submenu-item">Alvará Regularização</div>
            <div className="submenu-item">Condomínio</div>
            <div className="submenu-item">Redimensionamento</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
