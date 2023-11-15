import React, { useState, useEffect, useRef } from 'react';
import { IconBar, MenuItem, MenuItems, NavBarMenuWrapper, NavBarMobile, NavBarToggle, Img } from './styles';
import { svg } from '../../../assets';

export const NavBarMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    return (
      <NavBarMenuWrapper ref={menuRef}>
        <Img src={svg.logo} />
        <NavBarMobile>
          <NavBarToggle onClick={toggleMenu}>
            <IconBar />
            <IconBar />
            <IconBar />
          </NavBarToggle>
        </NavBarMobile>
        {menuOpen && (
          <MenuItems className={menuOpen ? 'open' : ''}>
            <ul className="navbar">
              <MenuItem><a href="">Como Funciona ?</a></MenuItem>
              <MenuItem><a href="">Serviços</a></MenuItem>
              <MenuItem><a href="">Depoimentos</a></MenuItem>
              <MenuItem><a href="">Loja</a></MenuItem>
              <MenuItem><a href="">Contato</a></MenuItem>
            </ul>
          </MenuItems>
        )}
      </NavBarMenuWrapper>
    );
  
};

export default NavBarMenu;
