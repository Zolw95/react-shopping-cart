import React, { useContext } from "react";
import ProductContext from "../context/product/productContext";
//import CartContext from "../context/cart/cartContext";

// Components
import Item from "./ShoppingCartItem";
import Product from "./Product";

const ShoppingCart = (props) => {
  const productContext = useContext(ProductContext);

  const { cart } = productContext;

  console.log("cart", cart);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
