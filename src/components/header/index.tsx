import React from 'react';
import './style.css'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <div className='headerUrbanismo'>
      </div>
    </header>
  );
};

export default Header;