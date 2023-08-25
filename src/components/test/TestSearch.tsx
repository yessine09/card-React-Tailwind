import React from "react";
import { useSearchParams } from "react-router-dom";

const TestSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const food = searchParams.get("mekla");
  const dog = searchParams.get("kalb");
  return (
    <div>
      <h5 className="dark:text-lime-700">
        Route parametres de recherche ? : exp test?mekla=chniatheb bech selon
        path mekla bch yhot chnia da5let //test?kalb=rex&phone=android
      </h5>
      {food && <b>My favorit food is : {food} and </b>}
      {dog && <b>My dog is : {dog}</b>}
      {<p>my phone : {searchParams.get("phone")} </p>}
    </div>
  );
};

export default TestSearch;
