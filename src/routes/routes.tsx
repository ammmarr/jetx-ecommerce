import Home from "../pages/home/Home";
import Product from "../pages/product/Product";

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
];
export default mainRoutes;
