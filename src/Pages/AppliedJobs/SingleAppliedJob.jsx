import { BiBriefcase } from "react-icons/bi";
const SingleAppliedJob = ({ item }) => {
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
    hiringManagerName,
    hiringManagerImage,
  } = item;

  console.log("from applied job", item);

  return (
    <div className=" bg-[#F7F7F7] rounded p-4">
      <div className=" justify-between">
        <div className=" max-w-fit px-2 py-1  mt-4  flex items-center gap-2">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={hiringManagerImage}
          ></img>
          <div>
            <p className=" text-sm mb-1  font-Inter ">
              {" "}
              {hiringManagerName}, Hiring Manager
            </p>
            <p className="bg-[#ffe3e8]  max-w-fit py-1 px-3 text-sm font-Inter font-medium rounded">
              {" "}
              {jobCreatorEmail}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-2">
          <p className="flex items-center gap-2 bg-[#ffe3e8]  max-w-fit py-1 px-3 rounded text-sm font-Inter font-medium">
            {" "}
            <BiBriefcase className="text-[#E9155B]"></BiBriefcase> {jobCategory}{" "}
          </p>

          <button
            className="text-sm font-Inter  
        font-medium transition-all duration-300  rounded-full bg-[#E9155B] hover:bg-[#C90044] text-white flex gap-1 justify-center items-center pl-2"
          >
            Your Resume{" "}
            <button className="bg-white p-1 m-0.5 text-[#E9155B]  rounded-full">
              <img
                className="w-[15px]"
                src="https://i.ibb.co/Jvk6tTQ/resume.png"
              ></img>
            </button>
          </button>
        </div>

        <div className="w-5/6 mt-3  flex justify-center  mx-auto rounded items-center  bg-[FFF] border h-[70px]">
          <img className="w-[100px]" src={logo}></img>
        </div>
      </div>
    </div>
  );
};

export default SingleAppliedJob;
