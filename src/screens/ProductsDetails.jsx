import React from "react";
import { useLocation } from "react-router-dom";

const ProductsDetails = () => {
  //  method1: with destraction
  const { state } = useLocation();

  console.log("Received state:", state);

  //method 2 :
  // const location = useLocation();

  // const { name, description } = location.state;

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white">
        <h1 className="text-6xl font-semibold mb-6 font-serif	">
          Product details :{" "}
        </h1>
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

        <p className="text-lg font-sans">
          This page utilizes state, which is then accessed using the useLocation
          hook.
        </p>
      </div>
    </>
  );
};

export default ProductsDetails;
