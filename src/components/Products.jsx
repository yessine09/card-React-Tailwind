import React, { useEffect, useState } from "react";
import productsData from "./products.json";
import Product from "./Product";
import { getAllProducts } from "../service/Api";

const Products = () => {
  //const [listProducts, setListProducts] = useState(productsData);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((Products) => setListProducts(Products));
  }, []);

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
      <h1 className="text-4xl font-bold text-center text-blue-600 mt-8 font-mono">
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
