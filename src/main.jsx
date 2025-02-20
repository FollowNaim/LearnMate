import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import ThemeProvider from "./provider/ThemeProvider";
import { routes } from "./routes/Routes";

const queryClient = new QueryClient();
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const helmentcontext = {};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmentcontext}>
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
