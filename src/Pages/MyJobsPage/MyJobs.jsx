import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import MySingleJob from "./MySingleJob";
import SingleCandidate from "./SingleCandidate";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = UseAxiosSecure();

  const url = `https://job-management-server-eight.vercel.app/myjobs?email=${user?.email}`;

  const [myJobs, setMyJobs] = useState([]);
  const [myJobsCandidate, setMyJobsCandidate] = useState([]);

  useEffect(() => {
    axiosSecure.get(url).then((data) => setMyJobs(data.data));
  }, [url]);

  const myJobsUrl = `https://job-management-server-eight.vercel.app/myEmployees`;

  useEffect(() => {
    axiosSecure.get(myJobsUrl).then((data) => setMyJobsCandidate(data.data));
  }, [myJobsUrl]);

  const creatorJobCandidate = myJobsCandidate.filter(
    (item) => item.jobCreatorEmail === user?.email
  );

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to restore this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-management-server-eight.vercel.app/myJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Application has been deleted.", "success");
              const remaining = myJobsCandidate.filter(
                (cart) => cart._id !== _id
              );
              setMyJobsCandidate(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>My Jobs | LeepPro </title>
      </Helmet>

      <div className="flex lg:flex-row flex-col gap-14 lg:gap-32 items-center my-20">
        <div className="bg-[#E9155B] flex justify-center  rounded-3xl flex-1">
          <img src="https://i.ibb.co/k57k8QT/Free-Photo-Surprised-unshaven-man-holds-phone-shows-empty-space-above-points-index-finger-wears-spec.png"></img>
        </div>

        <div className="flex-1">
          <h2 className="text-center  text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
            You have Posted{" "}
            <span className="text-[#E9155B] "> {myJobs.length} jobs</span>
          </h2>
          <p className="mt-1 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            repudiandae. Qui architecto officia inventore corrupti?
          </p>
          <div className="flex justify-center mt-5">
            <Link
              to={`/addAJob`}
              className="flex text-sm font-Inter   font-medium transition-all duration-200   rounded-full bg-[#E9155B] text-white   justify-center items-center "
            >
              <div className=" ml-3    flex items-center gap-3">
                Post Job{" "}
                <button className="bg-white m-0.5 mt-0.5 p-3  text-[#E9155B] rounded-full">
                  <FaArrowRightLong></FaArrowRightLong>{" "}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        {myJobs.map((myjob) => (
          <MySingleJob
            key={myjob._id}
            setMyJobs={setMyJobs}
            myJobs={myJobs}
            myjob={myjob}
          ></MySingleJob>
        ))}
      </div>

      <div>
        <h2
          className="text-center text-3xl lg:text-4xl font-Inter 
        font-extrabold uppercase mb-10"
        >
          Application from
          <span className="text-[#E9155B] "> Candidates </span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {creatorJobCandidate.map((item) => (
            <SingleCandidate
              item={item}
              key={item._id}
              handleDelete={handleDelete}
            ></SingleCandidate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
