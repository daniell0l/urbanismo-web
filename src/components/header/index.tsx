import React, { useState } from 'react';
import logoWide from "../../assets/imgs/logoWide.png";
import "./style.css";
import { FaUser } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({}) => {
  const [showOptions, setShowOptions] = useState(false);

  const showOptionsHandler = () => {
    setShowOptions(true);
  };

  const hideOptionsHandler = () => {
    setShowOptions(false);
  };

  return (
    <header>
      <div className="headerUrbanismo">
        <a href="/principal">
        <img src={logoWide} alt="logoWide" />
        </a>
        <div
          className="userIcon"
          onMouseEnter={showOptionsHandler}
          onMouseLeave={hideOptionsHandler}
        >
          <div className="iconWrapper">
            <FaUser className="customUserIcon" />
          </div>
          {showOptions && (
            <div
              className="userSelector"
              onMouseEnter={showOptionsHandler}
              onMouseLeave={hideOptionsHandler}
            >
              <select>
                <option value="">Perfil</option>
                <option value="">Sair</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
