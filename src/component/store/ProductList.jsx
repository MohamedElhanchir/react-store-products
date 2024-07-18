import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "1200px" }}>
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductList;
