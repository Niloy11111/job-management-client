import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import JobCard from "./JobCard";
const JobTab = ({ jobs }) => {
  const [jobsLength, setJobsLength] = useState(9);

  const handleLoadMore = () => {
    setJobsLength(jobs?.length);
  };

  const handleLessJobs = () => {
    setJobsLength(9);
  };

  return (
    <>
      <div className="mt-16 grid gap-7 grid-cols-3">
        {jobs?.slice(0, jobsLength).map((SingleJob) => (
          <JobCard key={SingleJob._id} SingleJob={SingleJob}></JobCard>
        ))}
      </div>
      <div className="flex justify-center my-10">
        {jobsLength < jobs?.length ? (
          <button
            onClick={handleLoadMore}
            className="text-sm font-Inter  font-medium transition-all duration-200 pl-4  rounded-full bg-[#E9155B] text-white "
          >
            <button className="bg-white  m-0.5 text-[#E9155B] p-3 ml-4 rounded-full">
              <FaArrowDown></FaArrowDown>{" "}
            </button>
          </button>
        ) : (
          <button
            onClick={handleLessJobs}
            className="text-sm font-Inter  font-medium transition-all duration-200 pr-7  rounded-full bg-[#E9155B] text-white "
          >
            <button className="bg-white  m-0.5 text-[#E9155B] p-3  rounded-full">
              <FaArrowUp></FaArrowUp>{" "}
            </button>
          </button>
        )}
      </div>
    </>
  );
};

export default JobTab;
