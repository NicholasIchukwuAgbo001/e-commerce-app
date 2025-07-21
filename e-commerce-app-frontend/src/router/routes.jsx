import { createBrowserRouter } from "react-router";
import Home from "../pages/Home"
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import ProductPage from "../pages/ProductPage"
import PageNotFound from "../pages/PageNotFund";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/cartpage",
    element: <CartPage />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true, 
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />
  }
]);

export default router;