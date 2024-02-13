import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser, createUser, googleSignIn, handleUpdateProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  //   console.log(user)
  const [toogle, setToogle] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo-url");
    const accepted = e.target.terms.checked;

    if (!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
      new Swal(
        "Sorry !",
        "Password Should be minimum 6 characters and should have one Capital and Special letter!",
        "error"
      );
    } else if (!accepted) {
      new Swal("Sorry !", " please accept our terms and conditions !", "error");
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          new Swal(
            "Thank you!",
            "You have successfully completed your registration!",
            "success"
          );
          navigate("/");
          handleUpdateProfile(name, photo).then(() => {
            console.log("user created");
          });
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        navigate("/");
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        navigate("/");
        console.log(res.user);
        new Swal("Login Successful!", "Welcome back!", "success");
      })
      .catch((error) => console.log(error));
  };

  if (toogle) {
    return (
      <>
        <div className="rounded mt-5 mb-10 -mx-14 flex lg:justify-center lg:items-center h-full lg:h-[84vh]">
          <div className="lg:border border-[#5fa2bf] lg:p-6">
            <div className="">
              <form
                onSubmit={handleLogin}
                className="px-7 lg:px-14 rounded  lg:w-[570px]"
              >
                <h2 className="mb-10 text-[#009EE2] pt-7 font-Inter text-4xl font-bold text-center">
                  Register Here
                </h2>

                <div>
                  <input
                    className="border-[#009EE2] pl-5 bg-[#FFF]  rounded-lg py-3 outline-none w-full block border pb-3 mb-8"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />

                  <input
                    className="border-[#009EE2] bg-[#FFF] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8"
                    type="email"
                    placeholder="Username or Email"
                    name="email"
                    required
                  />

                  <div className="relative mb-8">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered border-[#009EE2] rounded-lg py-3 outline-none block pl-5 pb-3  bg-[#FFF] w-full"
                      name="password"
                      required
                    />

                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xl cursor-pointer absolute top-3 right-2"
                    >
                      {showPassword ? (
                        <AiFillEye></AiFillEye>
                      ) : (
                        <AiFillEyeInvisible></AiFillEyeInvisible>
                      )}
                    </span>
                  </div>

                  <input
                    className="border-[#009EE2] bg-[#FFF] border  pl-5 rounded-lg py-3 outline-none w-full block border-b pb-3 mb-4"
                    type="text"
                    placeholder="Photo URL"
                    name="photo-url"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input type="checkbox" name="terms" id="terms" />
                  <label className="mt-2 text-[#00000080] font-Inter">
                    {" "}
                    Accept our{" "}
                  </label>
                  <a className="text-blue-500">Terms and Conditions</a>
                </div>

                <button className="rounded-lg py-4 mx-auto w-full bg-[#009EE2]  mb-4 text-[#FFF] font-Inter font-semibold">
                  Register
                </button>

                <p className="text-center text-base font-Inter text-[#00000080]">
                  Already have an account?{" "}
                  <a
                    onClick={() => setToogle(!toogle)}
                    className="text-blue-600 cursor-pointer"
                  >
                    {" "}
                    Login{" "}
                  </a>{" "}
                </p>
              </form>

              <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
                <p className="text-xl text-[#191A48]">Or</p>
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
              </div>

              <div
                onClick={handleGoogleLogin}
                className="rounded-full cursor-pointer w-4/5 mx-auto justify-center flex items-center gap-2 mb-7 mt-2 py-3 text-base border border-[#009EE2] bg-[#FFF]"
              >
                <div className="flex items-center gap-2">
                  <FcGoogle className="text-2xl"></FcGoogle>
                  <h2 className="font-semibold text-[#00000080] font-Inter">
                    Continue with Google
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" rounded flex justify-center items-center h-[83vh]">
          <div className="lg:border border-[#5fa2bf]  -mt-20 lg:p-6">
            <div>
              <form
                onSubmit={handleSignInUser}
                className="px-8 lg:px-14 rounded lg:w-[570px]"
              >
                <h2 className="mb-14 text-[#009EE2] pt-9 font-Inter text-4xl font-bold text-center">
                  Login Here
                </h2>

                <div>
                  <input
                    className="border-[#009EE2] bg-[#FAFAFB] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8"
                    type="emial"
                    placeholder="Username or Email"
                    name="email"
                    required
                  />

                  <input
                    className="border-[#009EE2] bg-[#FAFAFB] border  rounded-lg py-3 outline-none w-full block pl-5 pb-3 mb-10"
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                  />
                </div>

                <button className="rounded-lg py-4 mx-auto w-full bg-[#009EE2]  mb-4 text-[#FFF] font-Inter font-semibold">
                  Login
                </button>

                <p className="text-center text-base font-Inter text-[#191A48]">
                  Don't have an account?{" "}
                  <a
                    onClick={() => setToogle(!toogle)}
                    className="text-blue-600 cursor-pointer"
                  >
                    {" "}
                    Create an Account
                  </a>{" "}
                </p>
              </form>

              <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
                <p className="text-xl text-[#191A48]">Or</p>
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
              </div>

              <div
                onClick={handleGoogleLogin}
                className=" rounded-full cursor-pointer w-4/5 mx-auto justify-center flex items-center gap-2 mb-12 mt-2 py-3 text-base border border-[#009EE2] bg-[#FFF]"
              >
                <div className="flex items-center gap-2">
                  <FcGoogle className="text-2xl"></FcGoogle>
                  <h2 className="font-semibold text-[#191A48] font-Inter">
                    Continue with Google
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
