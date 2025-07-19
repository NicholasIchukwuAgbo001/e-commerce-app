import { createBrowserRouter } from "react-router";
import Home from "../pages/Home"
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import ProductPage from "../pages/ProductPage"


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
    path: "/",
    element: <Home />,
    children: [
      {
        index: true, 
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;