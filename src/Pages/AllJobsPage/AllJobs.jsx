import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../css/All.css";
import SingleJobInfo from "./SingleJobInfo";

const AllJobs = () => {
  // const [allJobs, loading, refetch] = UseJobs();

  const [allJobs, setAllJobs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const titleUrl = `https://job-management-server-eight.vercel.app/titleBaseJob?jobTitle=${inputValue}`;

  const url = "https://job-management-server-eight.vercel.app/allJobs";

  useEffect(() => {
    if (inputValue) {
      axios.get(titleUrl).then((data) => setAllJobs(data.data));
    } else {
      axios.get(url).then((data) => setAllJobs(data.data));
    }
  }, [inputValue, titleUrl]);

  console.log(inputValue);

  // const handleInputChange = (e) => {
  //     setInputValue(e.target.value);
  //   };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    setInputValue(title);
  };

  return (
    <div className="mt-20 font-Inter  mb-32">
      <Helmet>
        <title>All Jobs -LeepPro </title>
      </Helmet>

      <div className="my-20 flex items-center justify-center">
        <div className="flex-1 flex gap-6">
          <div>
            <img
              className="ml-24 mt-20 w-[140px] rounded-xl mb-4"
              src="https://i.ibb.co/q9ynSqj/4ad80ce869c32901e89738d16c0d3be4.jpg"
            ></img>
            <img
              className=" w-[236px] rounded-3xl"
              src="https://i.ibb.co/16fPpSq/144dfd1512e7e0ea09f471d7a3a8378f.jpg"
            ></img>
          </div>
          <div className="mt-8">
            <img
              className="rounded-t-3xl rounded-bl-3xl  rounded-br-[999px]"
              src="https://i.ibb.co/wYT5yf2/ab5963fca54c755c399d1fed0540d133.jpg"
            ></img>
          </div>
        </div>

        <div className="flex-1">
          <h2 className=" text-3xl text-center lg:text-4xl font-Inter font-extrabold uppercase">
            Grow your career{" "}
            <span className="text-[#E9155B] ">
              through <span className="normal-case">LeepPro</span>{" "}
            </span>
          </h2>
          <p className=" mt-2 text-center  font-Inter text-[#494e5d]">
            Elevate your professional journey with LeepPro's comprehensive job
            listings. Explore diverse opportunities in accounting, development,
            marketing, research, production, media, customer support, and
            management. Let LeepPro be your gateway to growth, connecting you
            with top-tier talent and career-defining roles. Empower your career
            trajectory today.
          </p>
          <div className="flex justify-center mt-8">
            <Link className="ml-5" to={`/login`}>
              <button className="text-sm font-Inter  font-medium transition-all duration-200 px-5 py-2  rounded-full border border-[#E9155B] hover:bg-[#E9155B] hover:text-white  text-[#E9155B] ">
                Upload Resume{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mb-16 text-center text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
        Explore Your <span className="text-[#E9155B] ">Dream Job</span>
      </h2>

      <div className="mt-6 bg-[#E9155B] rounded-xl mb-16 lg:mt-10 w-2/6  border-[#1d2d5a] text-white searchContainer ">
        <form onSubmit={handleButtonClick} className="flex rounded " action="">
          <button
            type="submit"
            className="border hover:bg-white transition-all duration-300 hover:text-[#E9155B] border-white text-white flex items-center  m-1 justify-center w-[100px] rounded-xl h-[50px]  text-lg font-semibold text-[#333F]"
          >
            {" "}
            <BsSearch></BsSearch>
          </button>
          <input
            name="title"
            id="field-id"
            className="pl-4 text-white rounded-r-xl w-full outline-none bg-[#E9155B]"
            type="text"
            placeholder="Search jobs"
          />
        </form>
      </div>

      <div className="grid gap-6 grid-cols-3 ">
        {allJobs?.map((singlejobinfo) => (
          <SingleJobInfo
            singlejobinfo={singlejobinfo}
            key={singlejobinfo._id}
          ></SingleJobInfo>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
