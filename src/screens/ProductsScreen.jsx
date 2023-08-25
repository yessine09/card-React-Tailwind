import React from "react";
import { StickyNavbar } from "./NavBar";
import Products from "../components/Products";

const ProductsScreen = () => {
  return (
    <div>
      <StickyNavbar />
      <Products />
    </div>
  );
};

export default ProductsScreen;
