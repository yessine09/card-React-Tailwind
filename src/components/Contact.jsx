import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  //const location = useLocation();
  //bel destraction khir ->
  const { state } = useLocation();
  return (
    <div>
      <h1>bch tchouf fazet tab3th props state</h1>
      <h5 className="text-fuchsia-700">
        welcome to contact us {state.numero} page
      </h5>
    </div>
  );
};

export default Contact;
