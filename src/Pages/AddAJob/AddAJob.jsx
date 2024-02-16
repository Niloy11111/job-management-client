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

    console.log(jobInfo);

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
                className=" pl-5   rounded-full py-2 lg:py-3 outline-none w-full block border  mb-4"
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                id=""
              />

              <div className="flex gap-4">
                <input
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border mb-6"
                  type="text"
                  placeholder="Photo URL"
                  src=""
                  name="PictureURL"
                  alt=""
                />

                <input
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border mb-6"
                  type="text"
                  placeholder="Logo URL"
                  src=""
                  name="logoURL"
                  alt=""
                />
              </div>

              <div className="flex lg:hidden gap-4  ">
                <input
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border  mb-4"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="User Name"
                  name="userName"
                  id=""
                />
                <input
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border  mb-4"
                  type="text"
                  placeholder="Salary"
                  name="salaryRange"
                  id=""
                />
              </div>

              <div className="  lg:flex  hidden  gap-4 relative">
                <input
                  className=" pl-5   rounded-full py-3 outline-none w-full  border  mb-4"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="User Name"
                  name="userName"
                  id=""
                />
                <input
                  className=" pl-5   rounded-full py-3 outline-none w-full  border  mb-4"
                  type="text"
                  placeholder="Salary"
                  name="salaryRange"
                  id=""
                />

                <select
                  className=" pl-5   rounded-full py-3 outline-none w-full  border pb-3 mb-4"
                  type="text"
                  placeholder="Product Type"
                  name="jobCategory"
                  id=""
                >
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="flex gap-4 lg:hidden">
                <input
                  type="date"
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full  border  mb-4"
                  name="jobPostingDate"
                  id="birthday"
                />

                <DatePicker
                  className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full  border  mb-4"
                  name="applicationDeadline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div className="lg:hidden flex gap-4">
                <select
                  className="pl-2    rounded-full py-2 lg:py-3 outline-none w-full block border  mb-6"
                  type="text"
                  placeholder="Product Type"
                  name="jobCategory"
                  id=""
                >
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>

                <input
                  type="number"
                  defaultValue={0}
                  className="pl-2    rounded-full py-2 lg:py-3 outline-none w-full block border  mb-6"
                  name="applicants"
                />
              </div>

              <div className="lg:flex hidden gap-3 ">
                <input
                  type="date"
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-6"
                  name="jobPostingDate"
                  id="birthday"
                />

                <DatePicker
                  className=" pl-5   rounded-full py-3 outline-none  block border pb-3 mb-6"
                  name="applicationDeadline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />

                <input
                  type="number"
                  defaultValue={0}
                  className="pl-2    rounded-full py-3 outline-none w-full block border pb-3 mb-6"
                  name="applicants"
                />
              </div>

              <textarea
                className=" pl-5   rounded-3xl py-3 outline-none w-full block border pb-3 mb-4"
                type="text"
                placeholder="About Company"
                name="about"
                id=""
                cols="50"
                rows="2"
              ></textarea>
              <textarea
                className=" pl-5 mb-8  rounded-3xl py-3 outline-none w-full block border pb-3 "
                type="text"
                placeholder="Job Description"
                name="description"
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

              <h2 className="bottom-[347px] lg:text-base text-sm  right-2 font-Inter absolute">
                Applicants
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAJob;
