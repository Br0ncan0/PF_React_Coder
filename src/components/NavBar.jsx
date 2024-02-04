import React from 'react';
import '../assets/styles/Navbar.css'
import Logo from './Logo';
import CartLogo from './CartLogo';
import { NavLink } from 'react-router-dom';

const NavBar = () => { 
return (
  <div className='navbar'>
    <Logo></Logo>
    <NavLink to="/home"> Inicio </NavLink>
    <NavLink to="/productos"> Productos </NavLink>
    <NavLink to="/contacto"> Contacto </NavLink>
    <CartLogo></CartLogo>
  </div>
  )
}

export default NavBar;