import React, { useState } from "react";
import "./style.css";

interface sideBarProps {
  title: string;
}

const SideBar: React.FC<sideBarProps> = ({ title }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleSelectClick = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.stopPropagation();
  };

  return (
    <header>
      <div
        className={`sideBarUrbanismo ${sideBarOpen ? "open" : ""}`}
        onClick={toggleSideBar}
      >
        {sideBarOpen ? (
          <div className="closedSidebar">
            <div className="hamburgerIcon" onClick={toggleSideBar}>
              ☰
            </div>
          </div>
        ) : (
          <div>
            <h2>{title}</h2>
            <select onClick={handleSelectClick}>
              <option value="alvaraConstrucao">Alvará Construção</option>
              <option value="alvaraRegularizacao">Alvará Regularização</option>
              <option value="condominio">Condomínio</option>
              <option value="redimensionamento">Redimensionamento</option>
            </select>
            <select onClick={handleSelectClick}>
              <option value="alvaraProjeto">Alvará Projeto</option>
              <option value="alvaraConstrucao">Alvará Construção</option>
              <option value="alvaraRegularizacao">Alvará Regularização</option>
              <option value="condominio">Condomínio</option>
              <option value="redimensionamento">Redimensionamento</option>
            </select>
            <select onClick={handleSelectClick}>
              <option value="usuarios">Usuários</option>
              <option value="clientes">Clientes</option>
            </select>
          </div>
        )}
      </div>
    </header>
  );
};

export default SideBar;
