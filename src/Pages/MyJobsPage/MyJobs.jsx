import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import MySingleJob from "./MySingleJob";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = UseAxiosSecure();

  const url = `https://job-management-server-eight.vercel.app/myjobs?email=${user?.email}`;

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    axiosSecure.get(url).then((data) => setMyJobs(data.data));
  }, [url]);

  console.log("myJobs now", myJobs);
  return (
    <div>
      <Helmet>
        <title>My Jobs -LeepPro </title>
      </Helmet>
      <h2 className="text-4xl my-12 font-medium font-Inter text-center">
        {" "}
        You have Posted {myJobs.length} jobs{" "}
      </h2>

      <div className="grid grid-cols-3 gap-6 mb-20">
        {myJobs.map((myjob) => (
          <MySingleJob
            key={myjob._id}
            setMyJobs={setMyJobs}
            myJobs={myJobs}
            myjob={myjob}
          ></MySingleJob>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
