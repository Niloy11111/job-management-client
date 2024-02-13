import React from "react";

const Usage = () => {
  return (
    <div className="flex gap-10  ">
      <div className="bg-[#9BDEAC] flex gap-5 items-center w-full rounded-3xl p-5">
        <div>
          <h2 className="  text-2xl mb-3  font-Inter font-extrabold uppercase">
            For Employers
          </h2>
          <p className=" mt-4 lg:mt-6 font-Inter text-[#494e5d]">
            Connect with top talent effortlessly. Post jobs now to find the
            perfect candidates for your team
          </p>
          <button className="mt-2 hover:bg-[#588300] bg-[#747F00] px-9 py-2 transition-all text-white font-Inter duration-300  rounded-full">
            Post Jobs
          </button>
        </div>
        <div>
          <img
            className="w-[500px]"
            src="https://i.ibb.co/sK2BrtG/Designer-girl-cuate.png"
          ></img>
        </div>
      </div>

      <div className="bg-[#FFCAFF] flex gap-5 items-center w-full rounded-3xl p-5">
        <div>
          <h2 className="  text-2xl mb-3  font-Inter font-extrabold uppercase">
            For Employee
          </h2>
          <p className=" mt-4 lg:mt-6 font-Inter text-[#494e5d]">
            Discover exciting career opportunities. Upload your CV today and
            take the next step towards your dream job.
          </p>
          <button className="mt-2 hover:bg-[#588300] bg-[#747F00] px-9 py-2 transition-all text-white font-Inter duration-300  rounded-full">
            Upload CV
          </button>
        </div>
        <div>
          <img
            className="w-[500px]"
            src="https://i.ibb.co/XpFW1Yx/Design-inspiration-bro.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Usage;
