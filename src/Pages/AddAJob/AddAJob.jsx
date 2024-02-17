import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { BiSolidAddToQueue } from "react-icons/bi";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "../../css/All.css";

const AddAJob = () => {
  const { user } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(new Date());

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const PictureURL = form.PictureURL.value;
    const jobTitle = form.jobTitle.value;
    const userName = user?.displayName;
    const jobCategory = form.jobCategory.value;
    const salaryRange = form.salaryRange.value;
    const description = form.description.value;
    const jobPostingDate = form.jobPostingDate.value;
    const applicationDeadline = form.applicationDeadline.value;
    const applicants = form.applicants.value;
    const email = user?.email;
    const hiringManager = user?.photoURL;
    const logo = form.logoURL.value;
    const about = form.about.value;

    const jobInfo = {
      PictureURL,
      jobTitle,
      userName,
      jobCategory,
      salaryRange,
      description,
      jobPostingDate,
      applicationDeadline,
      applicants,
      email,
      hiringManager,
      logo,
      about,
    };

    console.log("real", jobInfo);

    axios
      .post("https://job-management-server-eight.vercel.app/addJob", jobInfo)
      .then((data) => {
        Swal.fire({
          title: "Success!",
          text: "job Added Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        console.log(data.data);
      });
  };

  return (
    <div className="mt-32 lg:mt-0 font-Inter">
      <Helmet>
        <title>Add Job | LeepPro </title>
      </Helmet>

      <h2 className="text-center hidden lg:block my-14 text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
        add <span className="text-[#E9155B] "> job here</span>
      </h2>

      <div className="flex lg:flex-row flex-col  items-center gap-10 lg:gap-20 justify-between ">
        <div className="bg-[#E9155B] rounded-3xl shadow-xl h-[30vh] lg:w-[35%] mx-auto  threeDContainer">
          <div className=" -mt-20 rounded-3xl bg-[#ffe3e8] threeDimage mx-10  transition-all duration-500 shadow-2xl">
            <img
              className="w-[320px] h-[300px]  mx-auto"
              src="https://i.ibb.co/48MRTVx/2209-i201-035-S-m004-c13-mobile-app-development-isometric-removebg-preview.png"
            ></img>
          </div>
          <h2 className="title text-center my-20 text-2xl  font-Inter font-extrabold uppercase -mt-10 text-white hidden">
            <span className="hidden lg:block"> Hire Talent</span>
            <span className="block lg:hidden"> Add Job</span>
          </h2>
        </div>

        <div className="w-full lg:w-2/4 relative">
          <h2 className=" my-5 text-xl lg:text-2xl font-Inter font-extrabold uppercase">
            Required <span className="text-[#E9155B] "> information</span>
          </h2>
          <form className="" onSubmit={handleAddJob}>
            <div className="">
              <input
                className=" pl-5   rounded-full py-2 lg:py-3 outline-none w-full block border mb-3 lg:mb-4"
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                required
                id=""
              />

              <div className="flex lg:flex-row flex-col lg:gap-4">
                <input
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border mb-3 lg:mb-4"
                  type="text"
                  placeholder="Photo URL"
                  src=""
                  name="PictureURL"
                  required
                  alt=""
                />

                <input
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border mb-3 lg:mb-4"
                  type="text"
                  placeholder="Logo URL"
                  src=""
                  name="logoURL"
                  required
                  alt=""
                />
              </div>

              <div className=" flex lg:flex-row flex-col    lg:gap-4 relative">
                <input
                  className=" pl-5   rounded-full  py-2 lg:py-3 outline-none w-full  border  mb-3 lg:mb-4"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="User Name"
                  name="userName"
                  id=""
                />
                <input
                  className=" pl-5   rounded-full  py-2 lg:py-3 outline-none w-full  border  mb-3 lg:mb-4"
                  type="text"
                  placeholder="Salary"
                  required
                  name="salaryRange"
                  id=""
                />

                <select
                  className=" pl-5   rounded-full  py-2 lg:py-3 outline-none w-full  border  mb-3 lg:mb-4"
                  type="text"
                  placeholder="Product Type"
                  required
                  name="jobCategory"
                  id=""
                >
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="lg:flex lg:flex-row flex-col  lg:gap-3 ">
                <div className=" w-full">
                  <h2 className="text-sm ml-4 mb-1 font-bold">Post Date</h2>
                  <input
                    type="date"
                    className="pl-5 lg:pl-1    rounded-full py-2 lg:py-3 outline-none w-full block border  mb-3 lg:mb-4"
                    name="jobPostingDate"
                    id="birthday"
                    required
                  />
                </div>

                <div className="w-full">
                  <h2 className="text-sm ml-4 mb-1 font-bold">
                    Application Deadline
                  </h2>
                  <DatePicker
                    className=" pl-5   rounded-full py-2 lg:py-3 outline-none  block border  w-[320px] lg:w-[210px] mb-3 lg:mb-4"
                    name="applicationDeadline"
                    selected={startDate}
                    required
                    onChange={(date) => setStartDate(date)}
                  />
                </div>

                <div className="w-full">
                  <h2 className="text-sm ml-4 mb-1 font-bold">
                    Applicants Number
                  </h2>
                  <input
                    type="number"
                    defaultValue={0}
                    required
                    className="pl-2    rounded-full py-2 lg:py-3 outline-none w-full block border  mb-3 lg:mb-4"
                    name="applicants"
                  />
                </div>
              </div>

              <textarea
                className=" pl-5   rounded-3xl py-3 outline-none w-full block border  mb-3 lg:mb-4"
                type="text"
                placeholder="About Company"
                name="about"
                required
                id=""
                cols="50"
                rows="2"
              ></textarea>
              <textarea
                className=" pl-5 mb-8  rounded-3xl py-3 outline-none w-full block border  "
                type="text"
                placeholder="Job Description"
                name="description"
                required
                id=""
                cols="50"
                rows="5"
              ></textarea>

              <button className="px-4  bg-[#E9155B] hover:bg-[#C90044] py-2.5 rounded-full text-[#FFF] text-sm font-Inter font-medium flex items-center gap-2 justify-center">
                {" "}
                Add This Job{" "}
                <p className="text-white">
                  {" "}
                  <BiSolidAddToQueue className=" text-white"></BiSolidAddToQueue>
                </p>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAJob;
