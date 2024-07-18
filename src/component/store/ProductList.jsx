import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import ProductCategories from "./ProductCategories";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategoryList(response));
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "1200px" }}>
        <ProductCategories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          categoryList={categoryList}
        />
        <ProductTable
          products={products}
          selectedCategories={selectedCategories}
        />
      </div>
    </div>
  );
}

export default ProductList;
