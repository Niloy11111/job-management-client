import { Link } from "react-router-dom";

const SingleJobInfo = ({ singlejobinfo }) => {
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
  } = singlejobinfo;
  return (
    <div>
      <div className="border-t-4 b border-l-4 border-[#E9155B] rounded-t-xl rounded-l-xl p-4 border-b-2 rounded-b-xl">
        <h2 className="text-xl  mt-4 font-medium font-Inter ">{jobTitle}</h2>
        <p className="mb-3 text-sm  font-Inter">Hiring Manager {userName}</p>

        <div className="flex mb-5 justify-between items-center">
          <p className="text-sm font-Inter font-semibold  flex items-center gap-2 ">
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
            {jobPostingDate} APPLICANTS
          </p>
        </div>

        <div className="w-5/6  flex justify-center  mx-auto rounded items-center  bg-[FFF] border h-[90px]">
          <img className="w-[150px]" src={logo}></img>
        </div>

        <div className="flex justify-center  border-t mt-8 -mx-4">
          <Link className="" to={`details/${_id}`}>
            <button className="mt-3 text-sm font-Inter  font-medium transition-all duration-200 px-5 py-2  rounded  border border-[#E9155B] hover:bg-[#E9155B] hover:text-white  text-[#E9155B] ">
              View Details{" "}
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="bg-[#FFF]  pb-3 border-b pr-4 rounded">
        <div className="">
          <div className="ml-3 flex justify-center rounded items-center w-[100px] bg-[FFF] border h-[100px]">
            <img className="" src={logo}></img>
          </div>

          <div className="">
            <h2 className="text-xl mb-1 font-medium font-Inter ">{jobTitle}</h2>
            <p className="text-[#53565f]text-sm font-normal font-Inter">
              Hiring Manager{" "}
              <span className="bg-[#ebf8fd] hover:bg-[#9adbf5] ml-1 p-1 rounded">
                {userName}
              </span>{" "}
            </p>
            <p className="text-[#737478] text-sm">Posted on {jobPostingDate}</p>
          </div>
        </div>

        <div>
          <p>Deadline {applicationDeadline}</p>
          <p>{salaryRange}</p>
          <Link to={`details/${_id}`}>
            {" "}
            <button className="border border-[#1d2d5a] text-[#1d2d5a] text-sm hover:text-[#FFF] px-10 py-3 font-Inter font-normal rounded hover:bg-[#1d2d5a]">
              VIEW JOB
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default SingleJobInfo;
