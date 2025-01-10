import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { ToastBar, Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
      <Toaster />
      <Header />
      <div className="mt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
