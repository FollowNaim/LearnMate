import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
      <Header />
      <div className="min-h-[calc(100vh_-_100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
