import img1 from "../../../../src/assets/icons/accounting.png";
import img2 from "../../../../src/assets/icons/developer.png";
import img3 from "../../../../src/assets/icons/digital-marketing.png";
import img4 from "../../../../src/assets/icons/research-and-development.png";
import img5 from "../../../../src/assets/icons/setting.png";
import img6 from "../../../../src/assets/icons/social-media.png";
import img7 from "../../../../src/assets/icons/support.png";
import img8 from "../../../../src/assets/icons/system.png";
import "../../../css/All.css";
const LeverageTalent = () => {
  return (
    <div className="my-20 ">
      <h2 className="  text-center text-3xl lg:text-4xl font-Inter font-extrabold uppercase">
        Popular <span className="text-[#E9155B]">Categories</span>
      </h2>
      <p className=" mb-10 lg:mb-16 mt-1 text-center  text-[#333] font-medium font-Inter text-sm lg:text-base">
        Find the ultimate hub for top business, design, and tech talent, set to
        tackle global initiatives.
      </p>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-[#F7F7F7] popularContainer hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="w-[40px]   mb-6" src={img1}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Accounting Experts
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Find skilled professionals for all your financial needs, from
            bookkeeping to tax preparation.
          </p>
        </div>

        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  p-5 rounded transition duration-300 ">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto " src={img2}></img>
          </div>
          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Development
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Discover talented developers proficient in various programming
            languages for your projects.
          </p>
        </div>

        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto" src={img3}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Marketing
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Connect with savvy marketers to boost your brand's visibility and
            reach your target audience.
          </p>
        </div>

        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto" src={img4}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Research
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Access experienced researchers to gather valuable insights and data
            for your projects.
          </p>
        </div>
        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto" src={img5}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Production
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Hire efficient production specialists to streamline your
            manufacturing processes.
          </p>
        </div>
        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto" src={img6}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Media{" "}
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Engage creative media professionals to craft compelling content for
            your digital presence.
          </p>
        </div>
        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto" src={img7}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Customer Support
          </h2>
          <p
            className="font-Inter mb-4 font-normal text-center
            "
          >
            Ensure top-notch customer satisfaction with expert support
            professionals ready to assist.
          </p>
        </div>
        <div className="bg-[#F7F7F7] popularContainer  hover:bg-[#E9155B]  transition duration-300 p-5 rounded">
          <div className="bg-[#ffe3e8] max-w-max px-7 mx-auto rounded-full pt-6 pb-2">
            <img className="mb-6 w-[40px] mx-auto" src={img8}></img>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-1 font-Inter text-center">
            Management{" "}
          </h2>
          <p
            className="font-Inter  mb-4 font-normal text-center
            "
          >
            Secure effective leaders to oversee operations and drive success in
            your organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeverageTalent;
