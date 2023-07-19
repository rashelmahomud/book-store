import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Products from "../page/Products";
import App from "../App";
import PageNotFound from "../page/PageNotFound";
import ProductDetails from "../page/productDetails";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Cart from "../components/cart";
import Checkout from "../components/checkout";
import AddBook from "../page/AddBook";
import PrivateRoute from "./PrivetRoute";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
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
