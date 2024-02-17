import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { BiSolidAddToQueue } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const UpdateJob = () => {
  const { user } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(new Date());

  const jobs = useLoaderData();

  const {
    _id,
    PictureURL,
    jobTitle,
    userName,
    jobCategory,
    salaryRange,
    description,
    jobPostingDate,
    applicationDeadline,
    applicants,
    logo,
    about,
  } = jobs;

  console.log("applicants string", applicants);

  const handleUpdateJob = (e) => {
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
    const logo = form.logoURL.value;

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
      logo,
    };
    console.log("jobinfo from update", jobInfo);

    fetch(`https://job-management-server-eight.vercel.app/allJobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "job Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="mt-44 lg:mt-0 font-Inter">
        <Helmet>
          <title>Add Job | LeepPro </title>
        </Helmet>

        <h2 className="text-center hidden lg:block my-14 text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
          Update <span className="text-[#E9155B] "> job </span>
        </h2>

        <div className="flex lg:flex-row flex-col  items-center gap-10 lg:gap-20 justify-between ">
          <div className="bg-[#E9155B] rounded-3xl shadow-xl h-[30vh] lg:w-[35%] mx-auto  threeDContainer">
            <div className=" -mt-20 rounded-3xl bg-[#ffe3e8] threeDimage   transition-all duration-500 shadow-2xl">
              <img
                className="w-[320px] h-[300px]  mx-auto"
                src="https://i.ibb.co/48MRTVx/2209-i201-035-S-m004-c13-mobile-app-development-isometric-removebg-preview.png"
              ></img>
            </div>
            <h2 className="title text-center my-20 text-2xl  font-Inter font-extrabold uppercase -mt-10 text-white hidden">
              <span className=""> Edit Job</span>
            </h2>
          </div>

          <div className="w-full lg:w-2/4 relative">
            <h2 className=" mt-5 mb-2 text-center  text-xl lg:text-2xl font-Inter font-extrabold uppercase">
              Edit job <span className="text-[#E9155B] "> information</span>
            </h2>
            <form className="" onSubmit={handleUpdateJob}>
              <div className="">
                <input
                  className=" pl-5   rounded-full py-2 lg:py-3 outline-none w-full block border mb-3 lg:mb-4"
                  type="text"
                  placeholder="Job Title"
                  defaultValue={jobTitle}
                  name="jobTitle"
                  id=""
                />

                <div className="flex lg:flex-row flex-col lg:gap-4">
                  <input
                    className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border mb-3 lg:mb-4"
                    type="text"
                    placeholder="Photo URL"
                    defaultValue={PictureURL}
                    src=""
                    name="PictureURL"
                    alt=""
                  />

                  <input
                    className=" pl-5   rounded-full py-2 lg:py-3  outline-none w-full block border mb-3 lg:mb-4"
                    type="text"
                    placeholder="Logo URL"
                    defaultValue={logo}
                    src=""
                    name="logoURL"
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
                    defaultValue={salaryRange}
                    name="salaryRange"
                    id=""
                  />

                  <select
                    className=" pl-5   rounded-full  py-2 lg:py-3 outline-none w-full  border  mb-3 lg:mb-4"
                    type="text"
                    placeholder="Product Type"
                    defaultValue={jobCategory}
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
                      defaultValue={jobPostingDate}
                      id="birthday"
                    />
                  </div>

                  <div className="w-full">
                    <h2 className="text-sm ml-4 mb-1 font-bold">
                      Application Deadline
                    </h2>
                    <DatePicker
                      className=" pl-5   rounded-full py-2 lg:py-3 outline-none  block border  w-[320px] lg:w-[210px] mb-3 lg:mb-4"
                      name="applicationDeadline"
                      defaultValue={applicationDeadline}
                      selected={startDate}
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
                      className="pl-2    rounded-full py-2 lg:py-3 outline-none w-full block border  mb-3 lg:mb-4"
                      name="applicants"
                    />
                  </div>
                </div>

                <textarea
                  className=" pl-5   rounded-3xl py-3 outline-none w-full block border  mb-3 lg:mb-4"
                  type="text"
                  placeholder="About Company"
                  defaultValue={about}
                  name="about"
                  id=""
                  cols="50"
                  rows="2"
                ></textarea>
                <textarea
                  className=" pl-5 mb-8  rounded-3xl py-3 outline-none w-full block border  "
                  type="text"
                  placeholder="Job Description"
                  defaultValue={description}
                  name="description"
                  id=""
                  cols="50"
                  rows="5"
                ></textarea>

                <button className="px-4  bg-[#E9155B] hover:bg-[#C90044] py-2.5 rounded-full text-[#FFF] text-sm font-Inter font-medium flex items-center gap-2 justify-center">
                  {" "}
                  Update Job{" "}
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
    </>
  );
};

export default UpdateJob;
