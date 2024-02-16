import { BiBriefcase } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySingleJob = ({ myjob, myJobs, setMyJobs }) => {
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
  } = myjob;

  const handleDeleteJob = (_id) => {
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
        fetch(`https://job-management-server-eight.vercel.app/allJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Job has been deleted.", "success");
              const remaining = myJobs.filter((cart) => cart._id !== _id);
              setMyJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className=" p-6 border rounded-lg  transition-all duration-150  ">
        <div className="flex gap-3">
          <div className="flex justify-center items-center bg-[#ffe3e8] max-w-max py-2 px-2 rounded h-[50px]">
            <img className="w-[70px] " src={logo}></img>
          </div>

          <div>
            <h3 className=" text-lg font-bold font-Inter">{jobTitle}</h3>
            <p className="-mt-1 text-sm font-Inter font-normal">
              Posted By {userName}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-[#424242] font-normal font-Inter">
          {description?.slice(0, 193)}.
        </p>

        <div className="flex justify-between mt-5">
          <p className=" text-sm font-Inter font-normal">
            Posted On {jobPostingDate}
          </p>
          <p className=" text-sm font-Inter font-normal">
            Last Date {applicationDeadline}
          </p>
        </div>

        <div className="flex justify-between mt-3">
          <p className="flex items-center gap-2 bg-[#ffe3e8]  max-w-fit py-1 px-3 rounded text-sm font-Inter font-medium">
            {" "}
            <BiBriefcase className="text-[#E9155B]"></BiBriefcase> {jobCategory}{" "}
          </p>

          <p className="bg-[#ffe3e8]  max-w-fit py-1 px-3 text-sm font-Inter font-medium rounded">
            {" "}
            {salaryRange}/{" "}
            <span className="text-[#E9155B] text-[12px]">Yearly</span>
          </p>
        </div>

        <div className="flex justify-center gap-5 mt-5">
          <Link to={`updateJobs/${_id}`} className="flex justify-center ">
            <button className="text-sm font-Inter  font-medium transition-all duration-200 pl-5  rounded bg-[#E9155B] text-white flex justify-center items-center">
              Update{" "}
              <button className="bg-white  m-0.5 text-[#E9155B] p-2 ml-2 rounded">
                <img
                  className="w-[15px]"
                  src="https://i.ibb.co/BnQ0Kmr/update.png"
                ></img>
              </button>
            </button>
          </Link>

          <Link>
            <button
              onClick={() => handleDeleteJob(_id)}
              className="text-sm font-Inter  font-medium transition-all duration-200 pl-5  rounded bg-[#E9155B] text-white flex justify-center items-center"
            >
              DELETE{" "}
              <button className="bg-white  m-0.5 text-[#E9155B] p-2 ml-2 rounded">
                <img
                  className="w-[15px]"
                  src="https://i.ibb.co/V2zWMry/delete.png"
                ></img>
              </button>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MySingleJob;
