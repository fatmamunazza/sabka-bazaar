import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
// import Form from "../pages/Form/Form";
// import NotFound from "../pages/NotFound";
// import ProtectedRoute from "../config/ProtectedRoute";

const keys = {
  root: "/",
  product: "/product/:category",
  // notfound: "*",
};

const router = createBrowserRouter([
  {
    path: keys.root,
    element: <Home />,
  },
  {
    path: keys.product,
    element: <Product />,
  },
  // {
  //   path: keys.home,
  //   element: <ProtectedRoute component={Home} />,
  // },
]);

export { router, keys };
