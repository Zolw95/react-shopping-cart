import React, { useContext } from "react";
import ProductContext from "../context/product/productContext";
// Components
import Product from "./Product";

const Products = () => {
  // Initialize Context
  const productContext = useContext(ProductContext);

  const { products, addItem } = productContext;

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
