import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Phone - home";
    } else {
      document.title = `Phone ${location.pathname.replace("/", "- ")}`;
    }

    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname, location.state]);

  return (
    <div className="max-w-[1300px] mx-auto px-2 md:px-10 lg:px-20  ">
      <Navbar></Navbar>
      <Outlet context={{ user: "Mizan" }}></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
