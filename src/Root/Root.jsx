import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <div className="  ">
      <NavBar className=" "></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
