import RootLayout from "@/layout/RootLayout";
import AddTutorials from "@/pages/AddTutorials";
import AllTutors from "@/pages/AllTutors";
import DetailsTutors from "@/pages/DetailsTutors";
import Home from "@/pages/Home";
import MyBooksList from "@/pages/MyBooksList";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
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
        path: "/add-tutorials",
        element: <AddTutorials />,
      },
      {
        path: "/tutor/:details",
        element: <DetailsTutors />,
      },
      {
        path: "/find-tutors/:category",
        element: <AllTutors />,
      },
      {
        path: "/auth/signin",
        element: <Signin />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
]);
