import { createBrowserRouter } from "react-router";
import Home from "../pages/Home"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: ""
    }

]);

export default router