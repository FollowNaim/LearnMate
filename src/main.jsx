import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { routes } from "./routes/Routes";

const queryClient = new QueryClient();
axios.defaults.baseURL = "http://localhost:5000";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
