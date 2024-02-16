import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const navlinksBeforeLogin = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4 "
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4 "
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          JOBS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          BLOGS
        </NavLink>
      </li>
    </>
  );

  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "   text-sm transition-all duration-200 text-[#E9155B]  font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4 "
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          HOME
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "    text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          JOBS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "    text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          BLOGS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addAJob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "    text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]  font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          ADD JOB
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "    text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]  font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          MY JOBS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/appliedJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "    text-sm transition-all duration-200  text-[#E9155B] font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm transition-all duration-200 hover:bg-[#FFF5F8]  font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          APPLIED JOBS
        </NavLink>
      </li>

      {/* <li>
        <div className="dropdown hidden lg:block dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-[60px] rounded">
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-sm  btn-ghost">
                {user?.displayName}
              </button>
            </li>
            <li>
              <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </li> */}
    </>
  );

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className=" py-4 flex lg:flex-row flex-row-reverse  justify-between border-b-[2px] border-[#FF5CA4] pb-5 mb-5">
      <div className="flex  items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <FaBars className="text-2xl text-[#E9155B]"></FaBars>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] shadow  rounded-box bg-[#FF5CA4] w-52 text-[#E9155B] absolute -right-[30px] -top-5"
          >
            {user ? navLinks : navlinksBeforeLogin}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-[50px] lg:w-[50px]"
            src="https://i.ibb.co/cwFBJD2/Untitled-design.png"
          ></img>
          <h2 className="text-xl hidden lg:block font-extrabold font-Inter">
            {" "}
            LeapPro
          </h2>
        </div>
      </div>

      <div className="flex  items-center hidden lg:block bg-[#ffe3e8]   p-3 rounded">
        <ul className=" lg:flex gap-3 ">
          {user ? navLinks : navlinksBeforeLogin}
        </ul>
      </div>

      <div className="">
        {user ? (
          <div className="dropdown  lg:block dropdown-end">
            <div className="flex gap-3 items-center">
              <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
                <div className="w-[40px] rounded-full text-white">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <div>
                <button
                  onClick={handleLogOut}
                  className="text-sm flex items-center gap-1 font-Inter font-semibold  text-[#E9155B]"
                >
                  Logout <HiOutlineLogout className="text-xl"></HiOutlineLogout>
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-[#2C2C2C]  "
            >
              <li className=" hover:bg-[#161515] py-1 px-1 rounded-xl text-white font-Inter text-center">
                {user?.displayName}
              </li>
            </ul>
          </div>
        ) : (
          <button className="mt-1">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-sm bg-[#FF5CA4] text-white font-Inter rounded  font-semibold py-2 px-4"
                  : " text-sm hover:bg-[#FF5CA4] bg-[#E9155B] text-white  font-Inter rounded  font-semibold py-2 px-4"
              }
            >
              Log in
            </NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
