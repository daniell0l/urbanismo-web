import React, { useState } from "react";
import "./style.css";

interface SubmenuProps {
  items: string[];
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => {
  return (
    <div className="submenu">
      {items.map((item, index) => (
        <div className="submenu-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

interface MenuItemProps {
  title: string;
  items: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ title, items }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="menu" onClick={(e) => e.stopPropagation()}>
      <div className="menu-item" onClick={toggleSubmenu}>
        {title}
        <div className="arrow">{showSubmenu ? "▼" : "▶"}</div>
      </div>
      {showSubmenu && <Submenu items={items} />}
    </div>
  );
};

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} onClick={toggleSideBar}>
      <div className="toggle">
        {!isOpen && <div className="toggle-icon">☰</div>}
      </div>
      <MenuItem title="Cadastrar processo" items={["Alvará Construção", "Alvará Regularização", "Condomínio", "Redimensionamento"]} />,
      <MenuItem title="Listar processos" items={["Alvará de Projeto", "Alvará de construção", "Alvará de Regularização", "Condomínio", "Redimensionamento"
      ]} />
    </div>
  );
};

export default SideBar;
