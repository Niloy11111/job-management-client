import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Usage = () => {
  return (
    <div className="mt-14 lg:mt-0 flex gap-5 lg:gap-10  lg:flex-row flex-col-reverse   ">
      <div className="bg-[#9BDEAC] flex lg:flex-row flex-col-reverse  gap-5 items-center w-full rounded-3xl p-5">
        <div>
          <h2 className="  text-2xl mb-1  font-Inter font-extrabold uppercase">
            For Employers
          </h2>
          <p className="text-sm lg:text-base font-Inter text-[#494e5d]">
            Connect with top talent effortlessly. Post jobs now to find the
            perfect candidates for your team
          </p>
          <div className="max-w-max  mt-3">
            <Link
              to={`/addAJob`}
              className="flex text-sm font-Inter   font-medium transition-all duration-200   rounded-full text-[#9BDEAC]  bg-white  justify-center items-center "
            >
              <div className=" ml-3    flex items-center gap-3">
                Post Jobs{" "}
                <button className="bg-white border  border-[#9BDEAC] hover:bg-[#9BDEAC] hover:text-white  text-[#9BDEAC]  m-0.5 mt-0.5 p-3   rounded-full transition-all duration-300">
                  <FaArrowRightLong></FaArrowRightLong>{" "}
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-[200px] lg:w-[500px]"
            src="https://i.ibb.co/sK2BrtG/Designer-girl-cuate.png"
          ></img>
        </div>
      </div>

      <div className="bg-[#FFCAFF] flex lg:flex-row flex-col-reverse  gap-5 items-center w-full rounded-3xl p-5">
        <div>
          <h2 className="  text-2xl  font-Inter font-extrabold uppercase">
            For Employee
          </h2>
          <p className="text-sm lg:text-base font-Inter text-[#494e5d]">
            Discover exciting career opportunities. Upload your CV today and
            take the next step towards your dream job.
          </p>

          <div className="max-w-max  mt-3">
            <Link
              to={`/addAJob`}
              className="flex text-sm font-Inter   font-medium transition-all duration-200   rounded-full text-[#E9155B]  bg-white  justify-center items-center "
            >
              <div className=" ml-3    flex items-center gap-3">
                Apply Jobs{" "}
                <button className="bg-white border  border-[#E9155B] hover:bg-[#E9155B] hover:text-white  text-[#E9155B]  m-0.5 mt-0.5 p-3   rounded-full transition-all duration-300">
                  <FaArrowRightLong></FaArrowRightLong>{" "}
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-[200px] lg:w-[500px]"
            src="https://i.ibb.co/XpFW1Yx/Design-inspiration-bro.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Usage;
