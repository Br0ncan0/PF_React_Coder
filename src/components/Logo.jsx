import React from "react";
import logo from '../assets/images/logo.png'
import '../assets/styles/Logo.css'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo_contenedor">
      <Link className="logo" to="/"><img src={logo} alt="" /></Link>
    </div>
  )
}

export default Logo;