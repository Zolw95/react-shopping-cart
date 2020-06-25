import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "../context/product/productContext";
//import CartContext from "../context/cart/cartContext";

const Navigation = (props) => {
  const productContext = useContext(ProductContext);

  const { cart } = productContext;

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
