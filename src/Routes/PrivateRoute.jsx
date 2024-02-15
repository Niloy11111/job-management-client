import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Lottie from "lottie-react";
import banner from "../assets/BannerAnimation/kJf7VPLhza.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center lg:h-[70vh]">
        {" "}
        <Lottie className="w-[300px]" animationData={banner} loop={true} />{" "}
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
