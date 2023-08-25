import React from "react";
import { useParams } from "react-router-dom";

const UnderHome = () => {
  const params = useParams();
  // const {name} = useParams();
  return (
    <div>
      <h4 className="dark:text-red-500">Route parametre exp home/:name </h4>
      <b>heyy {params.name}</b>
    </div>
  );
};

export default UnderHome;
