import React, { useContext } from "react";
import ProductContext from "../context/product/productContext";
//import CartContext from "../context/cart/cartContext";

const Item = (props) => {
  const productContext = useContext(ProductContext);
  console.log("item props", props);
  const { onDelete } = productContext;
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => onDelete(props.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
