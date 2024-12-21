import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh_-_100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
