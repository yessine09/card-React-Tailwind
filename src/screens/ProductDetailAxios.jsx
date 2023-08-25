import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/Api";

const ProductDetailAxios = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProductById(id).then((data) => {
      console.log(" product Id in data", data);
      setProducts(data);
    });
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold mb-6 font-serif">
          Product details :{" "}
        </h1>

        <div className=" max-w-sm rounded overflow-hidden shadow-lg">
          {product.id !== undefined ? (
            <div className="dark:bg-gray-800 w-full mt-4">
              <img
                className="rounded-t-lg "
                src={product.img}
                width="100%"
                height="auto"
              />

              <div className="p-3">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product?.name}
                </h2>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>

                <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white">
                  Price : {product?.price} $
                </h6>

                <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white">
                  like : {product.like}
                </h6>
              </div>
            </div>
          ) : (
            <h1>Product does not exist </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailAxios;
