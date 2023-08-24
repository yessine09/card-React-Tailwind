import React, { useState } from "react";
import productsData from "./products.json";
import Product from "./Product";

const Products = () => {
  const [listProducts, setListProducts] = useState(productsData);

  const handleLike = (index) => {
    const arr = listProducts.map((p, i) => {
      if (i === index) {
        return { ...p, like: p.like + 1 };
      } else {
        return p;
      }
    });
    setListProducts(arr);
  };

  return (
    <>
      <h1 className="text-4xl text-blue-500 ont-semibold mb-2">
        List of products
      </h1>
      <div>
        {/* {listProducts.map((list, index) => ( */}
        <Product
          productListall={listProducts}
          // key={index}
          onHandleLike={handleLike}
        />
        {/* ))} */}
      </div>
    </>
  );
};

export default Products;
