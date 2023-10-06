import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Products from "../pages/products/Products";

const mainRoutes = [
  {
    name: "Home",
    href: "/",
    element: <Home />,
  },
  {
    name: "product",
    href: "/product/:id",
    element: <Product />,
  },
  {
    name: "product",
    href: "/products",
    element: <Products />,
  },
];
export default mainRoutes;
