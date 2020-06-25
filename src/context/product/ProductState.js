import React, { useReducer } from "react";
import data from "../../data";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const ProductState = (props) => {
  const initialState = {
    products: data,
    cart: [],
  };
  console.log(initialState);

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Add Product To Cart
  const addItem = (item) => {
    // add the given item to the cart
    dispatch({
      type: ADD_PRODUCT,
      payload: item,
    });
  };
  // Delete Product From Cart
  const onDelete = (id) => {
    // add the given item to the cart
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addItem,
        onDelete,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
