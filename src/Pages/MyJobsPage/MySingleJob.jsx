import {  BiBriefcase } from "react-icons/bi";


const MySingleJob = ({myjob}) => {

    const { PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants, logo, about} = myjob ;
    return (
        <div className="bg-[#FFF] hover:border-2 border-[#9adbf5] hover:shadow-xl p-6 rounded-lg  transition-all duration-150 cursor-pointer ">
           
           <div className="flex gap-1  items-center">
            <img className="w-[80px]" src={logo}></img>
            <p className="text-[#00788C] text-sm font-inter font-medium">NEW!</p>
           </div>

           <h3 className="mt-4 mb-2 text-[#230939] text-lg font-semibold font-inter">{jobTitle}</h3>
           <p className="text-[#666666] text-sm font-inter font-normal">Posted By {userName}</p>
           <p className="text-[#666666] text-sm font-inter font-normal">Posted On {jobPostingDate}</p>
           <p className="text-[#666666] text-sm font-inter font-normal">Last Date Of Application {applicationDeadline}</p>
           
           <div className="flex gap-2 mt-3">
            <p className="flex items-center gap-2 bg-[#F2F2F2] max-w-fit py-1 px-2 rounded text-sm font-Inter font-medium"> <BiBriefcase></BiBriefcase> {jobCategory}   </p>

            <p className="bg-[#F2F2F2] max-w-fit py-1 px-2 text-sm font-Inter font-medium rounded">  {salaryRange} Per Year</p>
            
           </div>

           <p className="mt-4 text-sm text-[#424242] font-normal font-inter">{description.slice(0,270)}</p>



        </div>
    );
};

export default MySingleJob;