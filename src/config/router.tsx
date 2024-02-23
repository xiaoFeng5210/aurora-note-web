import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cards from '@/components/cards'
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "home",
        element: <Cards />,
      },
    ]
  },
]);

export default router
