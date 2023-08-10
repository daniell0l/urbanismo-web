import React, { useState } from 'react';
import logoWide from "../../assets/imgs/logoWide.png";
import "./style.css";
import { FaUser } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({}) => {
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
            <FaUser className="customUserIcon" />
          </div>
          {showOptions && (
            <div className="userSelector">
              <select>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
