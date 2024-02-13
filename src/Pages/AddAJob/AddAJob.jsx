import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

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
    <div className="mb-20 font-Inter">
      <Helmet>
        <title>Add Job -LeepPro </title>
      </Helmet>

      <h2 className="text-center my-20 text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
        you can add <span className="text-[#E9155B] "> the job here</span>
      </h2>

      <div className="flex items-center gap-20 justify-between">
        <div>
          <img
            className="rounded-3xl 
          "
            src="https://i.ibb.co/LzZPFWf/c3e93b9535b3689c4230cc1672691483.jpg"
          ></img>
        </div>

        <div className="w-2/4 relative">
          <h2 className=" my-5 text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
            Required <span className="text-[#E9155B] "> information</span>
          </h2>
          <form className="" onSubmit={handleAddJob}>
            <div className="">
              <input
                className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-4"
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                id=""
              />

              <div className="flex gap-4">
                <input
                  className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-6"
                  type="text"
                  placeholder="Photo URL"
                  src=""
                  name="PictureURL"
                  alt=""
                />

                <input
                  className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-6"
                  type="text"
                  placeholder="Logo URL"
                  src=""
                  name="logoURL"
                  alt=""
                />
              </div>

              <div className="flex gap-4 relative">
                <input
                  className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-4"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="User Name"
                  name="userName"
                  id=""
                />

                <select
                  className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-4"
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
              <div className="flex gap-3 ">
                <input
                  type="date"
                  className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-6"
                  name="jobPostingDate"
                  id="birthday"
                />

                <DatePicker
                  className=" pl-5   rounded py-3 outline-none  block border pb-3 mb-6"
                  name="applicationDeadline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />

                <input
                  type="number"
                  defaultValue={0}
                  className="pl-2    rounded py-3 outline-none w-full block border pb-3 mb-6"
                  name="applicants"
                />
              </div>

              <textarea
                className=" pl-5   rounded py-3 outline-none w-full block border pb-3 mb-4"
                type="text"
                placeholder="Job Description"
                name="description"
                id=""
                cols="50"
                rows="5"
              ></textarea>

              <button className="w-full bg-[#E9155B] py-3 rounded text-[#FFF] text-base font-Inter font-medium">
                {" "}
                Add This Job{" "}
              </button>

              <h2 className="bottom-[250px] right-4 font-Inter absolute">
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
