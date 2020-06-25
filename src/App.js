import React, { useState } from "react";
import { Route } from "react-router-dom";
import ProductState from "./context/product/ProductState";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartState from "./context/cart/CartState";

function App() {
  return (
    <CartState>
      <ProductState>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </div>
      </ProductState>
    </CartState>
  );
}

export default App;
