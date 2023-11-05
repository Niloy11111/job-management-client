import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {

    const {user , logOut} = useContext(AuthContext) ;

    console.log(user?.photoURL)

    const navlinksBeforeLogin = <>
     <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">Home</li></NavLink>
         <NavLink to="/allJobs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">All Jobs</li></NavLink>

<NavLink to="/blogs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">Blogs</li></NavLink>

<NavLink to='/login' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
        }><li>Login</li></NavLink>
    
    </>

    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">Home</li></NavLink>

        <NavLink to="/allJobs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">All Jobs</li></NavLink>

        <NavLink to="/addAJob" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">Add A Job</li></NavLink>

        <NavLink to="/myJobs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">My Jobs</li></NavLink>

        <NavLink to="/blogs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
        }><li className="">Blogs</li></NavLink>

       {/* <img className="w-[55px] rounded-full" src={user?.photoURL}></img> */}

       <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-[60px] rounded-full">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>

      
    </>
    return (
        <div className="flex  items-center flex-col lg:flex-row  justify-between mb-14 ">

            <div className="flex items-center">
               <h2 className="text-3xl font-bold font-serif"> Job Portal</h2>
            </div>

            <div className="flex justify-center">
                <ul className="flex justify-center items-center text-[#0B0B0B]  flex-col lg:flex-row gap-1 lg:gap-8 text-lg font-Inter font-normal">


                  {
                    user ? navLinks : navlinksBeforeLogin
                  }

                    {/* <NavLink to="/addProduct" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
}><li>Add Product</li></NavLink>

        <NavLink to="/myCart" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
}><li>My Cart</li></NavLink> */}




                </ul>
            </div>



        </div>

    );
};

export default NavBar;