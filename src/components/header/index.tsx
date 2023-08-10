import React, { useState } from 'react';
import logoWide from "../../assets/imgs/logoWide.png";
import "./style.css";
import { FaUser } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <header>
      <div className="headerUrbanismo">
        <img src={logoWide} alt="logoWide" />
        <div className="userIcon">
          <div className="iconWrapper" onClick={toggleOptions}>
            <FaUser />
          </div>
          {showOptions && (
            <select className="userSelector">
              <option value="user1">Usuário 1</option>
              <option value="user2">Usuário 2</option>
            </select>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
