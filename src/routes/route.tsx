import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Products from "../page/Products";
import App from "../App";
import PageNotFound from "../page/PageNotFound";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
