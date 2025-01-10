import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
      <div className="relative z-[99999999]">
        <Toaster />
      </div>
      <Header />
      <div className="mt-14 min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
