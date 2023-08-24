import React from "react";
import { useLocation } from "react-router-dom";

const ProductsDetails = () => {
  //  method1: with destraction
  const { state } = useLocation();
  console.log("data", state);
  //console.log("Received state:", state);

  //method 2 :
  // const location = useLocation();

  // const { name, description } = location.state;

  return (
    <>
      <h1 className="text-4xl text-cyan-400	">Product details : </h1>
      <div className=" max-w-sm rounded overflow-hidden shadow-lg">
        <div className="dark:bg-gray-800 w-full">
          <img
            className="rounded-t-lg "
            src={state.dataP.img}
            width="100%"
            height="auto"
          />

          <div className="p-3">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {state.dataP.name}
            </h2>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {state.dataP.description}
            </p>

            <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white">
              Price : {state.dataP.price} $
            </h6>

            <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white">
              like : {state.dataP.like}
            </h6>
          </div>
        </div>

        {/* <h5>Name : {location.state?.name}</h5> */}
        {/* <h5>name : {name}</h5> */}
      </div>
    </>
  );
};

export default ProductsDetails;
