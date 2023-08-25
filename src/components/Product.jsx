import { data } from "autoprefixer";
import { list } from "postcss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductsDetails from "../screens/ProductsDetails";

const Product = ({ productListall, onHandleLike }) => {
  //console.log("list", productList);
  const navigate = useNavigate();

  let dataP;

  const background =
    "max-w-xs space-y-1 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700";
  const backgroundfinal = background.concat(" ", "dark:bg-gray-800");

  return (
    <div className="flex flex-wrap space-x-3 space-y-2 mr-1	ml-5 my-7  ">
      {productListall.map((productList, index) => (
        <div
          className={
            productList.like >= 5
              ? background.concat(" ", "dark:bg-pink-500")
              : backgroundfinal
          }
          key={index}
        >
          {/* //dark:bg-teal-600 */}
          <div className="bg-sky-300">
            <a href="#">
              <img className="object-fill h-48 w-96" src={productList.img} />
            </a>
          </div>
          <div className="p-3">
            <a href="#">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {productList.name}
              </h2>
            </a>
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-red-500">
              {` Quantity left: ${productList.quantity}`}
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {productList.description}
            </p>

            <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white">
              Price : {productList.price} $
            </h6>

            <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white">
              like : {productList.like}
            </h6>
            <div className="flex flex-wrap">
              <button
                onClick={() => {
                  onHandleLike(index);
                  {
                    console.log("product1 : ", index);
                  }
                }}
                className=" px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Like
              </button>
              <div>
                {productList.quantity === 0 ? (
                  <div>
                    {" "}
                    <button
                      disabled
                      className=" ml-2 px-4 py-1 text-sm text-red-600 cursor-not-allowed font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    >
                      buy
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setTimeout(() => {
                          alert(" you bought an Item");
                        }, 2000)
                      }
                      className=" ml-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    >
                      Buy
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* {console.log("name", productList.price)} */}
            {/* {
              (dataP = [
                productList.name,
                productList.img,
                productList.description,
              ])
            } */}
            {console.log("productLIst", productList)}
            <Link
              // to={{
              //   pathname: "/products/details",
              //   state: {
              //     name: productList.name,
              //     // Other properties if needed
              //   },
              // }}
              to="/products/details"
              state={{
                dataP: productList,
              }}
              className="ml-6 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Detail
              {console.log("dataaaa1", dataP)}
              {/* {console.log("data", data)} Details */}
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
