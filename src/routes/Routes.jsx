import RootLayout from "@/layout/RootLayout";
import AllTutors from "@/pages/AllTutors";
import DetailsTutors from "@/pages/DetailsTutors";
import Home from "@/pages/Home";
import MyBooksList from "@/pages/MyBooksList";
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
        path: "/my-tutors",
        element: <MyBooksList />,
      },
      {
        path: "/tutors/:details",
        element: <DetailsTutors />,
      },
      {
        path: "/find-tutors/:category",
        element: <Home />,
      },
    ],
  },
]);
