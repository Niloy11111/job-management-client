import { CgMail } from "react-icons/cg";
import { FcBusinessman } from "react-icons/fc";
import { RxResume } from "react-icons/rx";

const SingleAppliedJob = ({appliedjob}) => {
    const {userName, email, resume , photo, logo, jobTitle , jobCategory} = appliedjob ;
    

    return (
        <div className="border bg-[#FFF] rounded p-4">

            <div className="flex r justify-between">
            <div>
            <h2 className="flex items-center gap-2"> <FcBusinessman className="text-2xl"></FcBusinessman> {userName}</h2>
            <h2 className="mt-2 flex gap-2 items-center">  <CgMail className="text-2xl"></CgMail> {email}</h2>
            <h2 className="mt-2 flex gap-2 items-center">  <RxResume className="text-2xl"></RxResume> {jobCategory}  . </h2>
             
             {/* <h2 className="block">Your resume here link {resume}</h2> */}
            </div>
            <div className="ml-3 flex justify-center rounded items-center w-[100px] bg-[FFF] border h-[100px]">
                        <img className="" src={logo}></img>
                    </div>
            </div>
           
        </div>
    );
};

export default SingleAppliedJob;