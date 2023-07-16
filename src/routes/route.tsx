import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Products from "../page/Products";
import App from "../App";
import PageNotFound from "../page/PageNotFound";
import ProductDetails from "../page/productDetails";
import Login from "../page/Login";
import SignUp from "../page/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
