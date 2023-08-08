import React from 'react';
import logoWide from '../../assets/imgs/logoWide.png'
import './style.css'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className='headerUrbanismo'>
        <img src={logoWide} alt="logoWide" />
      </div>
    </header>
  );
};

export default Header;