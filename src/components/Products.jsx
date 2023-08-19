import React, { useState } from "react";
import productsData from "./products.json";
import Product from "./Product";

const Products = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const handleLike = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 className="text-4xl text-blue-500 ont-semibold mb-2">
        List of products
      </h1>
      <div className="flex flex-wrap space-x-3 space-y-2 mr-1	ml-5 my-7">
        {productsData.map((list, index) => (
          <Product productList={list} key={index} likeFn={handleLike} />
        ))}
      </div>
    </>
  );
};

export default Products;
