import React from 'react';
import { Nav, NavLogo, NavLink, Menu, NavMenu } from '../NavElWrap/NavElements';

const Header = () => {
  return (
    <header>
      <Nav>
        <NavLogo to="/">PokieSearch</NavLogo>
        <Menu />

        <NavMenu>
          <NavLink to="/" activestyle="true">
            Gallery
          </NavLink>
          <NavLink to="/search" activestyle="true">
            Search
          </NavLink>
        </NavMenu>
      </Nav>
    </header>
  );
};

export default Header;
