import React from 'react';
import header from './header.png';
import './Header.css';

const Header = () => (
  <div className="header">
    <img
      className="headerImage"
      src={header}
      alt="header"
    />
  </div>
);

export default Header;
