import RootLayout from "@/layout/RootLayout";
import AllTutors from "@/pages/AllTutors";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-tutors",
        element: <AllTutors />,
      },
      {
        path: "/find-tutors/:category",
        element: <Home />,
      },
    ],
  },
]);
