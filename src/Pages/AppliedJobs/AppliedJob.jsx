import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Select from "react-select";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import banner from "../../assets/BannerAnimation/gD2yU5HZhR.json";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import SingleAppliedJob from "./SingleAppliedJob";

const AppliedJob = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [selectedOption, setSelectedOption] = useState("Dinner");
  const categoryValue = selectedOption.value;

  const options = [
    { value: "Remote", label: "Remote" },
    { value: "On Site", label: "On Site" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  const filteredJobs = appliedJobs?.filter(
    (item) => item.jobCategory === selectedOption.value
  );

  const url = `https://job-management-server-eight.vercel.app/appliedJobsEmail?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setAppliedJobs(res.data));
  }, [url]);

  return (
    <div className="mb-24">
      <Helmet>
        <title>Applied Job -LeepPro </title>
      </Helmet>

      <div className=" flex gap-4  flex-col-reverse lg:flex-row justify-center ">
        <div className="flex  items-center">
          <div className="w-3/4">
            <h2 className="text-3xl uppercase lg:text-3xl text-center  font-Inter font-extrabold">
              You have applied{" "}
              <span className=" text-[#EB3656] ">
                to {appliedJobs?.length} Jobs
              </span>
            </h2>
            <p className=" text-center font-Inter  ">
              Easily monitor your applied jobs, keeping track of all your
              applications in one convenient location. Stay organized and
              informed throughout your job search journey.
            </p>
            <div className="flex justify-center mt-3">
              <Link
                to={`/allJobs`}
                className="flex text-sm font-Inter   font-medium transition-all duration-200   rounded-full bg-[#E9155B] text-white   justify-center items-center "
              >
                <div className=" ml-3    flex items-center gap-3">
                  Apply Job{" "}
                  <button className="bg-white m-0.5 mt-0.5 p-3  text-[#E9155B] rounded-full">
                    <FaArrowRightLong></FaArrowRightLong>{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          {" "}
          <Lottie className="w-[550px]" animationData={banner} loop={true} />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="w-1/4">
          <h2 className="text-xl text-center mb-2 font-Inter font-extrabold uppercase">
            Select by <span className="text-[#E9155B] "> category</span>
          </h2>
          <form action="">
            <Select
              className=" rounded-lg p-2 "
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </form>
        </div>

        <div className="w-full">
          {categoryValue ? (
            <div className="grid grid-cols-3 gap-6">
              {filteredJobs.map((item) => (
                <SingleAppliedJob key={item._id} item={item}></SingleAppliedJob>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {appliedJobs.map((item) => (
                <SingleAppliedJob key={item._id} item={item}></SingleAppliedJob>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
