// AppContext1.js
import React from "react";
import AddProduct from "../../screens/AddProduct";

//Test useContext
export const ThemeContext1 = React.createContext();

const AppContext1 = () => {
  let x = "yessine";
  return (
    <div>
      <ThemeContext1.Provider value="">
        <AddProduct />
      </ThemeContext1.Provider>
    </div>
  );
};

export default AppContext1;
