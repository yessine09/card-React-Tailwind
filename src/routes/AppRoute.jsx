import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import Home from "../components/test/Home";
import TestSearch from "../components/test/TestSearch";
import ErrorPage from "../components/test/Description";
import Description from "../components/test/Description";
import About from "../components/test/About";
import DescriptionLayout from "../components/test/DescriptionLayout";
import DescriptionById from "../components/test/DescriptionById";
import NewDescription from "../components/test/NewDescription";
import ChildAbout from "../components/test/ChildAbout";
import Contact from "../components/test/Contact";
import Menu from "../components/test/Menu";
import UnderHome from "../components/test/UnderHome";
import ProductsDetails from "../screens/ProductsDetails";
import ProductsLayout from "../components/test/ProductsLayout";
import ProductDetailAxios from "../screens/ProductDetailAxios";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import AboutScreen from "../screens/AboutScreen";
import NotFound from "../screens/NotFound";

//declariw path taa lazy
const LazyLoadedHome = React.lazy(() => import("../components/test/Home"));
const LazyLoadedProduct = React.lazy(() =>
  import("../screens/ProductsDetails")
);

const LazyLoadedAddProduct = React.lazy(() =>
  import("/src/screens/AddProduct")
);

const LazyLoadedUpdateProduct = React.lazy(() =>
  import("../screens/UpdateProduct")
);

const AppRoute = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/products" element={<ProductsLayout />}> */}
        {/* ---------------------------------------------------------------- */}
        {/* //hedhy route test bch thzek lel product parent :D */}
        <Route path="/products" element={<Products />} />

        {/* -------------------------------------------------------- */}
        <Route path="/myproducts" element={<ProductsScreen />} />
        <Route path="/myAbout" element={<AboutScreen />} />
        <Route
          path="/addProduct"
          element={
            <Suspense fallback={<p>Loading :D</p>}>
              <LazyLoadedAddProduct />
            </Suspense>
          }
        />
        {/* // using lazyLoading test home */}
        <Route
          path="/home"
          element={
            <Suspense fallback={<p>Loading.....</p>}>
              <LazyLoadedHome />
            </Suspense>
          }
        >
          {/* //route parametre,dynamic ! prendre en compte des paramètres dans son URL ,
           nous avons besoin useParams() pour accee a /:name */}

          <Route path="/home/:name" element={<UnderHome />} />
        </Route>
        {/* // Route imbrique- products/details+ lazyloading/ nb:route imbrique mghir  mghir element lezem  */}
        <Route path="/myproducts">
          <Route
            path="details"
            element={
              <Suspense fallback={<p>Loading.....</p>}>
                <LazyLoadedProduct />
              </Suspense>
            }
          />

          <Route
            path="update/:id"
            element={
              <Suspense fallback={<p>Loading.....</p>}>
                <LazyLoadedUpdateProduct />
              </Suspense>
            }
          />
        </Route>
        {/* //Test how to use Outlet-Route imbrique -template-partage  */}
        <Route path="/description" element={<DescriptionLayout />}>
          {/* index for take the same path as the parent "/description" */}
          <Route index exact={true} element={<Description />} />

          <Route path=":id" element={<DescriptionById />} />
          <Route path="add" element={<NewDescription />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />}>
            <Route path="childabout" element={<ChildAbout />} />
          </Route>
        </Route>
        {/* // route paramtere */}
        <Route path="products/:id" element={<ProductDetailAxios />} />
        {/* // route parametre de recherche :useSearch : parametre de recherche-> ? TestSearch */}
        <Route path="/test" element={<TestSearch />} />
        {/* //using notfound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoute;
