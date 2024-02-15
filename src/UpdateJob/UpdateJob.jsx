import { useContext, useState } from "react";
import { default as DatePicker } from "react-datepicker";
import { BiSolidAddToQueue } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

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
    };

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
    <div className="mb-20">
      <h2 className="text-center my-20 text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
        update <span className="text-[#E9155B] "> job here</span>
      </h2>

      <div className="flex items-center  gap-20 justify-between">
        <div className="bg-[#E9155B] shadow-xl h-[30vh] w-[35%] mx-auto  threeDContainer rounded-3xl">
          <div className=" -mt-20 bg-[#ffe3e8] threeDimage mx-10  transition-all duration-500 shadow-2xl rounded-3xl ">
            <img
              className="w-[320px] h-[300px] mx-auto"
              src="https://i.ibb.co/48MRTVx/2209-i201-035-S-m004-c13-mobile-app-development-isometric-removebg-preview.png"
            ></img>
          </div>
          <h2 className="title text-center my-20 text-2xl  font-Inter font-extrabold uppercase -mt-10 text-white hidden">
            Update Job
          </h2>
        </div>

        <div className="w-2/4 relative">
          <h2 className=" my-5 text-xl lg:text-2xl font-Inter font-extrabold uppercase">
            Required <span className="text-[#E9155B] "> information</span>
          </h2>
          <form onSubmit={handleUpdateJob} className="">
            <div className="">
              <input
                className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-4"
                type="text"
                placeholder="Job Title"
                defaultValue={jobTitle}
                name="jobTitle"
                id=""
              />

              <div className="flex gap-4">
                <input
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-6"
                  type="text"
                  placeholder="Photo URL"
                  defaultValue={PictureURL}
                  src=""
                  name="PictureURL"
                  alt=""
                />

                <input
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-6"
                  type="text"
                  placeholder="Logo URL"
                  defaultValue={logo}
                  src=""
                  name="logoURL"
                  alt=""
                />
              </div>

              <div className="flex gap-4 relative">
                <input
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-4"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="User Name"
                  name="userName"
                  id=""
                />
                <input
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-4"
                  type="text"
                  placeholder="Salary"
                  defaultValue={salaryRange}
                  name="salaryRange"
                  id=""
                />

                <select
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-4"
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
              <div className="flex gap-3 ">
                <input
                  type="date"
                  className=" pl-5   rounded-full py-3 outline-none w-full block border pb-3 mb-6"
                  name="jobPostingDate"
                  defaultValue={jobPostingDate}
                  id="birthday"
                />

                <DatePicker
                  className=" pl-5   rounded-full py-3 outline-none  block border pb-3 mb-6"
                  name="applicationDeadline"
                  defaultValue={applicationDeadline}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />

                <input
                  type="number"
                  defaultValue={0}
                  className="pl-4  rounded-full py-3 outline-none w-full block border pb-3 mb-6"
                  name="applicants"
                />
              </div>
              <textarea
                className=" pl-5   rounded-3xl py-3 outline-none w-full block border pb-3 mb-4"
                type="text"
                defaultValue={about}
                placeholder="About Company"
                name="about"
                id=""
                cols="50"
                rows="2"
              ></textarea>

              <textarea
                className=" pl-5   rounded-3xl py-3 outline-none w-full block border pb-3 mb-6"
                type="text"
                placeholder="Job Description"
                name="description"
                defaultValue={description}
                id=""
                cols="50"
                rows="5"
              ></textarea>

              <button className="px-4 text-sm bg-[#E9155B] hover:bg-[#C90044] py-2.5 rounded-full text-[#FFF]  font-Inter font-medium flex items-center gap-2 justify-center">
                {" "}
                Update Job{" "}
                <p className="text-white">
                  {" "}
                  <BiSolidAddToQueue className=" text-white"></BiSolidAddToQueue>
                </p>{" "}
              </button>

              <h2 className="bottom-[335px] right-2 font-Inter absolute">
                Applicants
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
