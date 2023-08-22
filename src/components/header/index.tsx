import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoWide from '../../assets/imgs/logoWide.png';
import './style.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
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
        <NavLink to="/principal">
          <img src={logoWide} alt="logoWide" />
        </NavLink>
        <div
          className="userIcon"
          onMouseEnter={showOptionsHandler}
          onMouseLeave={hideOptionsHandler}
        >
          <FaUser className="customUserIcon" />
          {showOptions && (
            <div
              className="userSelector"
              onMouseEnter={showOptionsHandler}
              onMouseLeave={hideOptionsHandler}
            >
              <div className="relative">
                <a href="/profile">Perfil</a>
                <a href="#">Sair</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
