import React, { useReducer } from "react";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";
import { DELETE_PRODUCT } from "../types";

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Delete Product From Cart
  const onDelete = (id) => {
    // add the given item to the cart
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        onDelete,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
