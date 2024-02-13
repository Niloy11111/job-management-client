import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex my-20 justify-around text-[#000000] font-Inter">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <img
            className="w-[50px] lg:w-[50px]"
            src="https://i.ibb.co/cwFBJD2/Untitled-design.png"
          ></img>
          <h2 className="text-xl font-extrabold font-Inter"> LeapPro</h2>
        </div>

        <h2 className="font-Inter font-bold mb-6 uppercase">Connect us on</h2>
        <ul className="flex gap-8 text-[#E9155B]">
          <a href="https:/facebook.com">
            {" "}
            <FaFacebook className="text-3xl"></FaFacebook>{" "}
          </a>
          <a href="https:/instagram.com">
            {" "}
            <FaInstagramSquare className="text-3xl"></FaInstagramSquare>{" "}
          </a>
          <a href="https:/twitter.com">
            {" "}
            <FaTwitterSquare className="text-3xl"></FaTwitterSquare>{" "}
          </a>
          <a href="https:/linkedin.com">
            {" "}
            <FaLinkedin className="text-3xl"></FaLinkedin>{" "}
          </a>
          <a href="https:/youtube.com">
            {" "}
            <FaYoutube className="text-3xl"></FaYoutube>{" "}
          </a>
        </ul>
      </div>

      <div>
        <h2 className="font-bold mb-3 uppercase">About LeepPro</h2>
        <ul>
          <li className="">About us</li>
          <li className="">Careers</li>
          <li className="">Contact Us</li>
          <li className="">Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold mb-3 uppercase">Popular Jobs</h2>
        <ul>
          <li className="">New Jobs</li>
          <li className="">Planner Jobs</li>
          <li className="">Engineering Jobs</li>
          <li className="">Marketing Jobs</li>
          <li className="">Researcher Jobs</li>
          <li className="">Salaries</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold mb-3">GET INVOLVED</h2>
        <div>
          <input
            className="outline-none py-2.5 pl-3 border-[#FF5CA4] w-full border rounded"
            placeholder="Enter email adress"
            type="email"
            name=""
            id=""
          />

          <button className=" hover:bg-[#FF5CA4] bg-[#E9155B] w-full py-2.5 transition-all text-white font-Inter duration-300  rounded mt-3">
            SUBSCRIBE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
