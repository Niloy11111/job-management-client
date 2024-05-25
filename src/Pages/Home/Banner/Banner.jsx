import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col-reverse  items-center gap-12 lg:gap-20 lg:h-[70vh]  mt-10 lg:mt-0">
        <div className=" h-full flex-1  flex items-center">
          <div className=" ">
            <h2 className=" text-3xl  text-center lg:text-left lg:text-4xl font-Inter font-extrabold uppercase ">
              sdfsfsdfsdfsd find a job the{" "}
              <span className="text-[#E9155B] "> easy way</span>
            </h2>
            <p className="text-center lg:text-left mt-2 lg:mt-6 font-Inter text-[#494e5d]">
              Discover your ideal career fit where your skills, aspirations, and
              company culture sync perfectly. Find opportunities tailored to
              your preferences and values. Build your future with a job that
              resonates with who you are. Explore limitless possibilities and
              embark on a fulfilling career journey. Join us and find your
              perfect match today!
            </p>
            <div className="flex items-center mt-4 lg:mt-8 relative">
              <BsSearch className="absolute left-3 text-[#E9155B]"></BsSearch>

              <input
                name="category"
                id="field-id"
                className="pl-8 border-2 border-[#FF5CA4] rounded-full lg:w-2/4 w-3/5 py-2 outline-none bg-white"
                type="text"
                placeholder="Search jobs"
              />

              <button className="ml-2 lg:ml-4 hover:bg-[#C90044] bg-[#E9155B] px-7 py-2.5 transition-all text-white font-Inter duration-300  rounded-full">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="flex gap-2 lg:gap-6   ">
            <div
              className="bg-[#E9155B] flex justify-center items-center  w-[90px] lg:w-[200px] lg:h-[200px] h-[90px]  mt-12 ml-[40px] lg:ml-[100px] rounded-tl-full
            "
            >
              <img
                className=""
                src="https://i.ibb.co/8c5fcW7/promotion.png"
              ></img>
            </div>
            <div className="bg-[#FFCAFF]  rounded-tr-full w-[140px] lg:w-[280px] h-[140px] lg:h-[250px] ">
              <img
                className="w-[130px]  lg:w-[250px] mt-10 lg:mt-20"
                src="https://i.ibb.co/dg8GspM/wepik-export-20240211173005v-Re-J.png"
              ></img>
            </div>
          </div>

          <div className="flex ml-[-8px] lg:ml-5 gap-2 lg:gap-6  mt-2 lg:mt-6">
            <div className="bg-[#9BDEAC]  w-[140px] lg:w-[280px] h-[140px] lg:h-[250px]  rounded-bl-full">
              <img
                className=""
                src="https://i.ibb.co/F34MqNq/wepik-export-20240211184052dd-CU.png"
              ></img>
            </div>
            <div className="bg-[#747F00]  rounded-br-full  w-[90px] lg:w-[200px] lg:h-[200px] h-[90px]">
              <img
                className=""
                src="https://i.ibb.co/1Mn71mn/bar-chart.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
