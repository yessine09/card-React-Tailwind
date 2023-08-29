import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>home page</h1>
      <b>when click to button nvavigate manuelle to the path in the function</b>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/description/add")}
        // navigate(-1) yarja3 f history lel path eli 9bal
      >
        Button
      </button>
      {/* <Navigate to="/test" /> */}
    </div>
  );
};

export default Home;
