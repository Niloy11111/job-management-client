import { useLoaderData } from "react-router-dom";
import { BiBeenHere, BiBriefcase, BiBriefcaseAlt2 } from "react-icons/bi";


const SingleJobDetails = () => {
    const singleJobDetails = useLoaderData() ;

    const { PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants, logo, about} = singleJobDetails ;

    // company logo, job Banner, job title,
// description, salary range, Number of Applicants, Apply Button
    return (
        <div className="pb-20">
            <h2 className="text-3xl font-serif font-bold">{jobTitle}</h2>
           <div className="flex gap-3 mt-2 mb-10">
           <p className="flex items-center gap-2 bg-[#FFF] max-w-fit py-1 px-2 rounded text-sm font-Inter font-medium"> <BiBriefcase></BiBriefcase> {jobCategory}   </p>
            <p className="flex items-center gap-2 bg-[#FFF] max-w-fit py-1 px-2 rounded text-sm font-Inter font-medium"> <BiBriefcaseAlt2></BiBriefcaseAlt2> Employee   </p>

            <p className="flex items-center gap-2 bg-[#FDE3DF] text-[#D20000] max-w-fit py-1 px-2 rounded text-sm font-Inter font-medium"> <BiBeenHere></BiBeenHere> Actively Hiring </p>

           </div>
            <div className="flex gap-10">
            <div className="flex justify-between shadow-md w-2/4 bg-[#FFF] border-t-8 rounded-t-lg border-[#1d2d5a] px-4 pt-12 pb-4 relative">
              <div className="">
              <p className="text-[#737478] text-sm font-sans font-medium">ABOUT US </p>
                <p className="mt-3 text-lg font-semibold font-inter">{about}</p>
                <p className="mt-3 font-Inter font-semibold text-sm text-[#1d2d5a]">SALARY RANGE<span className="bg-blue-200 p-1 ml-2 rounded-lg text-blue-600">{salaryRange}</span> </p>
                <p className="mt-3 font-Inter font-semibold text-sm text-[#1d2d5a]">NUMBER OF APPLICANTS <span className="border px-2 py-1 border-[#1d2d5a]">{applicants}</span> </p>

                <div className="absolute bg-gray-50 -top-8 right-12 border flex justify-center items-center w-[150px] rounded-full">
             <img className="w-[130px]" src={logo}></img>
             </div>
              </div>

              <div className="">
              <img className="" src={PictureURL}></img>
              </div>

            </div>
           
           <div className="bg-[#FFF] shadow-md flex justify-center items-center max-h-[70px] p-5">
            <button className="bg-[#1d2d5a] px-10 py-2 rounded text-[#FFF] font-Inter font-medium text-sm"> APPLY ON COMPANY SITE </button>
           </div>
            </div>

            <p className="text-lg w-2/4 font-serif mt-10"> {description}</p>
            
        </div>
    );
};

export default SingleJobDetails;