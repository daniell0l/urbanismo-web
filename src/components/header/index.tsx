import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoWide from '../../assets/imgs/logoWide.png';

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
    <header className="h-16 fixed top-0 left-0 right-0 bg-blue-600 flex items-center justify-between px-6 z-10">
      <NavLink to="/principal">
        <img className='relative w-25 h-20 sm:w-40 sm:h-40 object-contain invert brightness-0 right-5' src={logoWide} alt="logoWide"
        />
      </NavLink>
      <div
        className="relative"
        onMouseEnter={showOptionsHandler}
        onMouseLeave={hideOptionsHandler}
      >
        <div className="h-8 w-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md ">
          <FaUser className="text-lg text-blue-600 cursor-pointer w-10 h-7 rounded-b-full " />
        </div>
        {showOptions && (
          <div
            className="absolute right-0 mt-0 bg-white shadow-md p-2 rounded-md"
            onMouseEnter={showOptionsHandler}
            onMouseLeave={hideOptionsHandler}
          >
            <div>
              <a className='text-blue-600 font-bold flex hover:text-blue-800'href="/profile">Perfil</a>
              <a className='text-blue-600 font-bold flex hover:text-blue-800'href="#">Sair</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
