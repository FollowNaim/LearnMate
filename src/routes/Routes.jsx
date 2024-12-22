import RootLayout from "@/layout/RootLayout";
import AddTutorials from "@/pages/AddTutorials";
import AllTutors from "@/pages/AllTutors";
import DetailsTutors from "@/pages/DetailsTutors";
import Home from "@/pages/Home";
import MyBooksList from "@/pages/MyBooksList";
import MyTutorials from "@/pages/MyTutorials";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
import UpdateTutorial from "@/pages/UpdateTutorial";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <MyBooksList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoutes>
            <AddTutorials />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoutes>
            <MyTutorials />
          </PrivateRoutes>
        ),
      },
      {
        path: "/tutor/:details",
        element: (
          <PrivateRoutes>
            <DetailsTutors />
          </PrivateRoutes>
        ),
      },
      {
        path: "/tutor/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateTutorial />
          </PrivateRoutes>
        ),
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
