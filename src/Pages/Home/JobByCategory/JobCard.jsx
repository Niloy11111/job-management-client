import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ SingleJob }) => {
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
    hiringManager,
  } = SingleJob;

  return (
    <div className="rounded-3xl  duration-150 p-6 transition-all bg-[#F7F7F7]  ">
      <h2 className="font-Inter text-xl font-semibold">
        {" "}
        {jobTitle?.split(" ")[0]} {jobTitle?.split(" ")[1]}{" "}
        {jobTitle?.split(" ")[2]} {jobTitle?.split(" ")[3]}
      </h2>
      <div className=" max-w-fit px-2 py-1  my-4 flex items-center gap-2">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={hiringManager}
        ></img>
        <p className=" text-sm  font-Inter "> {userName}, Hiring Manager</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-sm font-semibold font-Inter  flex items-center gap-2 mb-3">
            {" "}
            <img
              className="w-[20px]"
              src="https://i.ibb.co/sWbZsPW/add.png"
            ></img>{" "}
            {jobPostingDate}
          </p>
          <p className="text-sm font-semibold font-Inter  flex items-center gap-2">
            {" "}
            <img
              className="w-[20px]"
              src="https://i.ibb.co/fqrgX6T/coin.png"
            ></img>{" "}
            {salaryRange}
          </p>
        </div>

        <div className="">
          <p className="text-sm font-Inter font-semibold  flex items-center gap-2 mb-3">
            {" "}
            <img
              className="w-[20px]"
              src="https://i.ibb.co/j5RG9R3/expired.png"
            ></img>{" "}
            {applicationDeadline}
          </p>
          <p className="text-sm font-Inter font-semibold  flex items-center gap-2">
            {" "}
            <img
              className="w-[20px]"
              src="https://i.ibb.co/FnNWvXM/selection.png"
            ></img>{" "}
            {applicants} APPLICANTS
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Link className="w-full" to={`details/${_id}`}>
          <button className="border border-[#E9155B] hover:bg-white hover:text-[#E9155B]  flex justify-center mt-4 px-8 py-1.5 font-Inter  text-sm font-medium  transition-all duration-300 rounded bg-[#E9155B] text-white ">
            VIEW JOB
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
