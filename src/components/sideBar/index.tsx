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
          <div className="selectSideBar">
            <h2>{title}</h2>
            <select
              onChange={(e) => (window.location.href = e.target.value)}
              className="custom-select"
            >
              <option value="">Cadastrar processos</option>
              <option value="../alvaraConstrucao">Alvará Construção</option>
              <option value="../alvaraRegularizacao">Alvará Regularização</option>
              <option value="../condominio">Condomínio</option>
              <option value="../resizing">Redimensionamento</option>
            </select>
            <select
              onChange={(e) =>
                (window.location.href = `${e.target.value}.html`)
              }
              className="custom-select"
            >
              <option value="">Listar processos</option>
              <option value="alvaraProjeto">Alvará Projeto</option>
              <option value="alvaraConstrucao">Alvará Construção</option>
              <option value="alvaraRegularizacao">Alvará Regularização</option>
              <option value="condominio">Condomínio</option>
              <option value="redimensionamento">Redimensionamento</option>
            </select>
            <select
              onChange={(e) =>
                (window.location.href = `${e.target.value}.html`)
              }
              className="custom-select"
            >
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
