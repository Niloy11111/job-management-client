import React from "react";
import { Link } from "react-router-dom";
import "../../css/All.css";

const SingleCandidate = ({ item, handleDelete }) => {
  const {
    _id,
    userName,
    email,
    jobCreatorEmail,
    jobTitle,
    jobCategory,
    resume,
    photo,
    logo,
    candidatesImage,
  } = item;

  const hiringManager =
    "https://lh3.googleusercontent.com/a/ACg8ocKQxBCeEdpU5BZXjspCiKXY5BBCz24Lh3CtrX0CB_8Cqt4=s96-c";

  return (
    <div className="candidateContainer   p-3 rounded-xl bg-[#F7F7F7]    transition-all duration-300">
      <div className="flex justify-center ">
        <img
          className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full"
          src={candidatesImage}
        ></img>
      </div>
      <p className=" text-xl  font-Inter font-bold text-center mt-3 ">
        {" "}
        {userName}
      </p>
      <h2 className="h-[40px] lg:h-[30px] font-Inter text-center font-medium text-sm ">
        {jobTitle}
      </h2>
      <div className="flex  lg:flex-row flex-col gap-2 lg:gap-5">
        <Link to={resume}>
          <div className="flex justify-center mt-4">
            <button
              className="text-sm font-Inter  
        font-medium transition-all duration-300  rounded-full bg-[#E9155B] hover:bg-[#C90044] text-white flex gap-1 justify-center items-center pl-2"
            >
              Resume{" "}
              <button className="bg-white p-1 m-0.5 text-[#E9155B]  rounded-full">
                <img
                  className="w-[15px]"
                  src="https://i.ibb.co/Jvk6tTQ/resume.png"
                ></img>
              </button>
            </button>
          </div>
        </Link>
        <Link>
          <div className="flex justify-center lg:mt-4">
            <button
              onClick={() => handleDelete(_id)}
              className="text-sm font-Inter  
        font-medium transition-all duration-300  rounded-full bg-[#E9155B] hover:bg-[#C90044] text-white flex justify-center items-center gap-1 pl-4"
            >
              Delete{" "}
              <button className="bg-white m-0.5  p-1 text-[#E9155B]   rounded-full">
                <img
                  className="w-[15px]"
                  src="https://i.ibb.co/V2zWMry/delete.png"
                ></img>
              </button>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleCandidate;
