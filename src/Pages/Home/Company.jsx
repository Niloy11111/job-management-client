import React from "react";
import UseJobs from "../../hooks/UseJobs";

const Company = () => {
  const [allJobs, loading, refetch] = UseJobs();
  return (
    <div className="">
      <div className=" lg:w-2/3 lg:mx-auto mt-20 lg:mt-32 ">
        <h2 className="text-center text-3xl lg:text-4xl font-Inter font-extrabold uppercase mb-10">
          <span className="text-[#E9155B]  "> Company </span> we work with
        </h2>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
          {allJobs.slice(0, 12).map((item) => (
            <div
              key={item._id}
              className="bg-[#F7F7F7] rounded  flex justify-center items-center p-3 rounded"
            >
              {" "}
              <div className="">
                <img
                  className="w-[90px] lg:w-[100px]  lg:h-[50px]"
                  src={item.logo}
                ></img>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
