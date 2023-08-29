import React, { Children, createContext, useEffect, useState } from "react";
import productsData from "./products.json";
import Product from "./Product";
import { deleteProduct, getAllProducts } from "../service/Api";
import AddProduct from "../screens/AddProduct";

const Products = () => {
  //const [listProducts, setListProducts] = useState(productsData);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsDataApi = await getAllProducts();
      setListProducts(productsDataApi);
    } catch (error) {
      console.log("Error of fetching data !", error);
    }
  };

  // "hedhy mghir try catch b then"
  // getAllProducts().then((myProducts) => setListProducts(myProducts));

  const handleLike = (index) => {
    const arr = listProducts.map((p, i) => {
      if (p.id === index) {
        return { ...p, like: p.like + 1 };
      } else {
        return p;
      }
    });
    setListProducts(arr);
  };

  // const deleteProduct = (itemId) => {
  //   const newArr = listProducts.filter((item) => item.id !== itemId);
  //   setListProducts(newArr);
  // };

  const HandledeleteProduct = async (itemId) => {
    const result = window.confirm("Are u sure you want to delete ?");
    console.log("here we go", itemId);
    if (result) {
      try {
        await deleteProduct(itemId);
        fetchProducts();
        //getAllProducts().then((myProducts) => setListProducts(myProducts));
      } catch (error) {
        console.log("error of deleting data", error);
      }
    }
  };

  return (
    <>
      {/* <h1 className="text-4xl font-bold text-center text-blue-600 mt-8 font-mono">
        List of products
      </h1> */}

      <div class="text-5xl font-bold text-center">
        <div class="bg-purple-100 p-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-b from-pink-300 to-indigo-800  font-mono">
            List of products{" "}
          </span>
        </div>
      </div>
      <div>
        <Product
          productListall={listProducts}
          // key={index}
          onHandleLike={handleLike}
          onDeleteItem={HandledeleteProduct}
        />

        {/* ))} */}
      </div>
    </>
  );
};

export default Products;
