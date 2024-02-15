import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import banner from "../assets/BannerAnimation/KBOjc2uJx9.json";
import useApplicants from "../hooks/UseApplicants";

const SingleJobDetails = () => {
  const { user } = useContext(AuthContext);
  const [applicantsInfo, loading, refetch] = useApplicants();

  const singleJobDetails = useLoaderData();

  const {
    _id,
    email,
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
    hiringManager,
  } = singleJobDetails;

  console.log("single from details", singleJobDetails);

  const creatorEmail = email;

  const [resume, setResume] = useState([]);

  const url = `https://job-management-server-eight.vercel.app/myEmployees`;

  useEffect(() => {
    axios.get(url).then((data) => setResume(data.data));
  }, []);

  const isApplicant = applicantsInfo.some(
    (item) => item?.jobTitle === jobTitle && item?.email === user?.email
  );

  const hanldeApplyJob = (e) => {
    e.preventDefault();
    if (creatorEmail === user?.email) {
      toast.error("Sorry you cannot apply on your own created job");
      return;
    }
    if (isApplicant) {
      toast.error("Sorry you already applied on this job");
    } else {
      const form = e.target;
      const applicantName = user?.displayName;
      const email = form.email.value;
      const resume = form.resume.value;
      const photo = user.photoURL;
      const jobID = _id;
      const jobCreatorEmail = creatorEmail;
      const candidatesImage = user?.photoURL;
      const hiringManagerImage = hiringManager;
      const hiringManagerName = userName;
      const appliedJobInfo = {
        applicantName,
        email,
        resume,
        photo,
        jobCategory,
        logo,
        jobTitle,
        jobID,
        jobCreatorEmail,
        candidatesImage,
        hiringManagerImage,
        hiringManagerName,
      };

      axios
        .post(
          "https://job-management-server-eight.vercel.app/appliedJob",
          appliedJobInfo
        )
        .then((data) => {
          toast.success("WoW you have applied on this job successfully !");
          refetch();

          console.log(data.data);
        });
    }
  };

  return (
    <div className=" my-32">
      <Helmet>
        <title>Job Details -LeepPro </title>
      </Helmet>
      <div className="flex h-[45vh] gap-20  items-center ">
        <div className="flex-1">
          <div className=" bg-gray-50 mb-5 border flex justify-center items-center w-[170px] h-[80px] mx-auto rounded">
            <img className="w-[130px]" src={logo}></img>
          </div>
          <h2 className="text-center text-[#E9155B]  text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
            {jobTitle}
          </h2>
          <p className="mt-1 text-center">{about}</p>
          <div className="flex justify-center items-center  mt-3">
            <div
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="flex justify-center "
            >
              <Link className="flex text-sm font-Inter   font-medium transition-all duration-200   rounded-full bg-[#E9155B] text-white   justify-center items-center ">
                <div className=" ml-3    flex items-center gap-3">
                  Apply Here{" "}
                  <button className="bg-white m-0.5 mt-0.5 p-3  text-[#E9155B] rounded-full">
                    <FaArrowRightLong></FaArrowRightLong>{" "}
                  </button>
                </div>
              </Link>
            </div>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box rounded">
                <img
                  className="mx-auto mb-7"
                  src="https://www.monster.com/assets/profile/_next/static/media/cloud.44af2f8f.svg"
                ></img>
                <h2 className="text-lg font-bold font-Inter text-center mt-2">
                  Add Your Resume
                </h2>
                <p className="mt-4 mb-3 text-center">
                  Upload your resume to ensure employers can easily find you
                </p>

                <form action="" onSubmit={hanldeApplyJob}>
                  <input
                    type="text"
                    className="py-3 block border mb-3 w-full outline-none rounded"
                    defaultValue={user?.displayName}
                    name="userName"
                    id=""
                  />
                  <input
                    type="email"
                    className="py-3 block border mb-3 w-full outline-none rounded"
                    defaultValue={user?.email}
                    name="email"
                    id=""
                  />
                  <input
                    type="text"
                    className=" py-3 block border mb-3 w-full outline-none rounded"
                    required
                    placeholder="Upload Your Resume"
                    name="resume"
                    id=""
                  />
                  <button className="py-3 w-full border-2 gap-3 border-[#D9DBE9] hover:bg-[#D9DBE9] text-[#6E46AE] rounded font-semibold text-sm">
                    SUBMIT APPLICATION
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="border-2  px-6 py-2 text-sm bg-[#6e46ae] font-semibold rounded text-[#FFF]">
                      GO BACK
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <div className="flex-1">
          <Lottie className=" " animationData={banner} loop={true} />
        </div>
      </div>

      <div className="flex gap-20 mt-32  items-center justify-center">
        <div className="flex-1">
          <div className="   rounded-3xl ">
            <img
              className="w-[550px] h-[350px]  border-4 rounded-3xl border-[#E9155B]"
              src={PictureURL}
            ></img>
          </div>
        </div>

        <div className="flex-1">
          <div className="  grid grid-cols-2 gap-6 ">
            <div className="bg-[#F7F7F7] h-[10vh] rounded flex items-center justify-center">
              <div>
                <img
                  className="w-[30px] mx-auto"
                  src="https://i.ibb.co/D57bXD1/part-time.png"
                ></img>
                <p className="mt-2 font-Inter font-semibold text-lg ">
                  {" "}
                  {jobCategory}{" "}
                </p>
              </div>
            </div>
            <div className="bg-[#F7F7F7] h-[10vh] rounded flex items-center justify-center">
              <div>
                <img
                  className="mx-auto w-[30px]"
                  src="https://i.ibb.co/CHX9xRQ/payment.png"
                ></img>
                <p className="mt-2 font-Inter font-semibold text-lg ">
                  {salaryRange}
                </p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] h-[10vh] rounded flex items-center justify-center">
              <div>
                <img
                  className="mx-auto w-[30px]"
                  src="https://i.ibb.co/FnNWvXM/selection.png"
                ></img>
                <p className="mt-3 font-Inter font-semibold text-lg ">
                  {applicants} Applicants
                </p>
              </div>
            </div>
            <div className="bg-[#F7F7F7] h-[10vh] rounded flex items-center justify-center">
              <div>
                <img
                  className="mx-auto w-[30px]"
                  src="https://i.ibb.co/F36CDm3/approved.png"
                ></img>
                <p className="mt-3 font-Inter font-semibold text-lg ">
                  Actively Hiring
                </p>
              </div>
            </div>
          </div>
          <p className="font-Inter mt-5"> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleJobDetails;
