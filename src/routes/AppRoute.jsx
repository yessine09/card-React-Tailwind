import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import Home from "../components/Home";
import TestSearch from "../components/TestSearch";
import NotFound from "../components/NotFound";
import ErrorPage from "../components/Description";
import Description from "../components/Description";
import About from "../components/About";
import DescriptionLayout from "../components/DescriptionLayout";
import DescriptionById from "../components/DescriptionById";
import NewDescription from "../components/NewDescription";
import ChildAbout from "../components/ChildAbout";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import UnderHome from "../components/UnderHome";
import { StickyNavbar } from "../components/NavBar";
import ProductsDetails from "../components/ProductsDetails";
import ProductsLayout from "../components/ProductsLayout";

//declariw path taa lazy
const LazyLoadedHome = React.lazy(() => import("../components/Home"));
const LazyLoadedProduct = React.lazy(() =>
  import("../components/ProductsDetails")
);
const AppRoute = () => {
  // const About = React.lazy(() => import("/About"));

  return (
    <>
      {/* <Suspense fallback={<p>Loading.....</p>}>
        <Routes>
          <Route path="/home" element={<LazyHome />} />
        </Routes>
      </Suspense> */}
      <Routes>
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/" element={<StickyNavbar />} />

        <Route path="/products" element={<ProductsLayout />}>
          <Route index exact={true} element={<Products />} />
          <Route
            path="details"
            element={
              <Suspense fallback={<p>Loading.....</p>}>
                <LazyLoadedProduct />
              </Suspense>
            }
          />
        </Route>
        <Route path="/home/:name" element={<UnderHome />} />
        {/* useSearch : parametre de recherche-> ? TestSearch */}
        <Route path="/test" element={<TestSearch />} />

        {/* Route imbrique -template partage */}
        <Route path="/description" element={<DescriptionLayout />}>
          {/* index for take the same path as the parent description layout */}
          <Route index element={<Description />} />
          <Route path=":id" element={<DescriptionById />} />
          <Route path="add" element={<NewDescription />} />
          <Route path="contact" element={<Contact />} />

          <Route path="about" element={<About />}>
            <Route path="childabout" element={<ChildAbout />} />
          </Route>
        </Route>
        {/* //using lazyLoad */}
        <Route
          path="/home"
          element={
            <Suspense fallback={<p>Loading.....</p>}>
              <LazyLoadedHome />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoute;
