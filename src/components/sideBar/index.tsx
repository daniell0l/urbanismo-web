import React, { useState } from "react";
import "./style.css";

interface SubmenuProps {
  items: { label: string; link: string }[];
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => {
  return (
    <div className="submenu">
      {items.map((item, index) => (
        <div className="submenu-item" key={index}>
          <a href={item.link}>{item.label}</a>
        </div>
      ))}
    </div>
  );
};

interface MenuItemProps {
  title: string;
  items: { label: string; link: string }[];
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
        <div className="arrow">{showSubmenu ? "⌄" : "›"}</div>
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
      <MenuItem
        title="Cadastrar processo"
        items={[
          { label: "Alvará Construção", link: "/alvaraConstrucao" },
          { label: "Alvará Regularização", link: "/alvaraRegularizacao" },
          { label: "Condomínio", link: "/condominio" },
          { label: "Redimensionamento", link: "/resizing" },
        ]}
      />
      <MenuItem
        title="Listar processos"
        items={[
          { label: "Alvará de Projeto", link: "/projectPermit" },
          { label: "Alvará de construção", link: "/constructionPermit" },
          { label: "Alvará de Regularização", link: "/regularizationPermit" },
          { label: "Condomínio", link: "/condominiumSituation" },
          { label: "Redimensionamento", link: "/resizingSituation" },
        ]}
      />
      <MenuItem
        title="Listar usuários"
        items={[
          { label: "Coordenador", link: "/listUser" },
          { label: "Fiscal", link: "/listUser" },
          { label: "Analista", link: "/listUser" },
          { label: "Administrador", link: "/listUser" },
          { label: "clientes", link: "/listUser" },
        ]}
      />
      <MenuItem
        title="Listar clientes"
        items={[
          { label: "Engenheiro", link: "/listClients" },
          { label: "Arquiteto", link: "/listClients" },
          { label: "Técnico", link: "/listClients" },
        ]}
      />
    </div>
  );
};

export default SideBar;
