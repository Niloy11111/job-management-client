import Lottie from "lottie-react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner from "../../../src/assets/BannerAnimation/L9p9n2PT1e.json";
const Connect = () => {
  return (
    <div className=" ">
      <h2 className="text-center text-3xl lg:text-4xl font-Inter font-extrabold uppercase mb-10">
        What we <span className="text-[#E9155B] ">do</span>
      </h2>

      <div className="flex lg:flex-row flex-col-reverse justify-center gap-10 lg:gap-20  items-center">
        <div className="flex-1">
          <h2 className="text-2xl uppercase    font-Inter font-extrabold">
            WE help you to connect with
            <span className=" text-[#EB3656]"> the organization</span>
          </h2>
          <p className=" font-Inter my-6 ">
            At LeapPro, our goal is simple: to connect you with the right
            organization. Whether you're a seasoned professional or just
            starting out, we're here to make your job search easier. Our
            platform streamlines the process, so you can spend less time
            searching and more time connecting.
          </p>
          <p className=" font-Inter">
            We know that finding the perfect job can be tough, but with LeapPro,
            it doesn't have to be. Our team provides personalized support and
            resources to help you succeed. From resume assistance to interview
            tips, we've got you covered. Sign up today and take the leap to a
            brighter future with LeapPro.
          </p>

          <div className="mt-5">
            <Link to={`/login`}>
              <button className="text-sm font-Inter  font-medium transition-all duration-200 pl-5  rounded-full bg-[#E9155B] text-white ">
                Get Started{" "}
                <button className="bg-white  m-0.5 text-[#E9155B] p-3 ml-4 rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>{" "}
                </button>
              </button>
            </Link>

            <Link className="ml-5" to={`/`}>
              <button className="hover:bg-[#E9155B] hover:text-white  text-sm font-Inter  font-medium transition-all duration-300 px-5 py-2  rounded-full border border-[#E9155B] text-[#E9155B] ">
                Upload Resume{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Lottie animationData={banner} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Connect;
