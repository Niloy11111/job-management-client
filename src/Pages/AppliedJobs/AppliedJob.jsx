import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleAppliedJob from "./SingleAppliedJob";

import Select from "react-select";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

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
      <div className="my-10 text-center w-1/3 ">
        <form action="">
          <Select
            className="w-full rounded-lg p-2 "
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </form>
      </div>

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
  );
};

export default AppliedJob;
