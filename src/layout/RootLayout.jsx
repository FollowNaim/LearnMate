import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
      <Toaster />
      <Header />
      <div className="mt-14 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
