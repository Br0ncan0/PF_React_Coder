import React from "react";
import cartLogo from '../assets/images/shopping-cart.png';
import '../assets/styles/Logo.css';


const CartLogo = () => {
  return (
    <div>
      <a className="cart" href="./"><img src={cartLogo} alt="" /></a>
    </div>
  )
}

export default CartLogo;