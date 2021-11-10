import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: orange;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-weight: bolder;
  font-size: 24px;
  text-decoration: none;
`;

export const Menu = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 20px;
  &.active {
    color: black;
  }
  &.hover {
    color: black;
  }
`;
