import { useLoaderData } from "react-router-dom";
import { BiBeenHere, BiBriefcase, BiBriefcaseAlt2 } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

import toast from 'react-hot-toast';
import { Helmet } from "react-helmet";

const SingleJobDetails = () => {

    const { user } = useContext(AuthContext) ;

    const singleJobDetails = useLoaderData() ;

    const {_id, email,  PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants, logo, about } = singleJobDetails ;

    const creatorEmail = email ;

    console.log(creatorEmail)

    // if(creatorEmail === user?.email){
    //   toast.error('sorry')
    // }

    const hanldeApplyJob = (e) => {
        e.preventDefault() ;
if(creatorEmail === user?.email){
      toast.error('Sorry you cannot apply on your own created job')
    }
      
       else{
        const form = e.target ;
        const userName = form.userName.value ;
        const email = form.email.value ;
        const resume = form.resume.value ;
        const photo = user.photoURL ;
        const jobID = _id ;
        const appliedJobInfo = {
            userName, email, resume, photo , jobCategory, logo, jobTitle, jobID
        }
        console.log(appliedJobInfo)

        axios.post('https://job-management-server-eight.vercel.app/appliedJob', appliedJobInfo)
        .then(data => {
          toast.success("WoW you have applied on this job successfully !");
         
          console.log(data.data)
        })
       }
        
    }


   
    return (

        <div className="pb-20 mt-20">
          <Helmet>
        <title>Job Details - The Muse </title>
      </Helmet>
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
                <p className="mt-3 text-base font-semibold font-inter">{about}</p>
                <p className="mt-3 font-Inter font-semibold text-sm text-[#1d2d5a]">SALARY RANGE<span className="bg-blue-200 p-1 ml-2 rounded-lg text-blue-600">{salaryRange}</span> </p>
                <p  className="mt-3 font-Inter font-semibold text-sm text-[#1d2d5a]">NUMBER OF APPLICANTS <span className="border px-2 py-1 border-[#1d2d5a] "> { applicants } </span> </p>

                <div className="absolute bg-gray-50 -top-8 right-12 border flex justify-center items-center w-[150px] rounded-full">
             <img className="w-[130px]" src={logo}></img>
             </div>
              </div>

              <div className="">
              <img className="w-full" src={PictureURL}></img>
              </div>

            </div>
           
           <div className="bg-[#FFF] shadow-md flex justify-center items-center  p-5">
            {/* <button onClick={hanldeApplyJob} className="bg-[#1d2d5a] px-10 py-2 rounded text-[#FFF] font-Inter font-medium text-sm"> APPLY ON COMPANY SITE </button> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className=" bg-[#1d2d5a] px-10 py-2 rounded text-[#FFF] font-Inter font-medium text-sm" onClick={()=>document.getElementById('my_modal_1').showModal()}>APPLY ON COMPANY SITE</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box rounded">

    <img className="mx-auto mb-7" src="https://www.monster.com/assets/profile/_next/static/media/cloud.44af2f8f.svg"></img>
    <h2 className="text-lg font-bold font-inter text-center mt-2">Add Your Resume</h2>
    <p className="mt-4 mb-3 text-center">Upload your resume to ensure employers can easily find you</p>
    
    <form action="" onSubmit={hanldeApplyJob}>
    <input type="text" className="py-3 block border mb-3 w-full outline-none rounded" defaultValue={user?.displayName} name="userName" id="" />
    <input type="email"className="py-3 block border mb-3 w-full outline-none rounded" defaultValue={user?.email} name="email" id="" />
    <input type="text"className=" py-3 block border mb-3 w-full outline-none rounded" required placeholder="Upload Your Resume"  name="resume" id="" />
    <button className="py-3 w-full border-2 gap-3 border-[#D9DBE9] hover:bg-[#D9DBE9] text-[#6E46AE] rounded font-semibold text-sm" >SUBMIT APPLICATION</button>
    </form>

   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="border-2  px-6 py-2 text-sm bg-[#6e46ae] font-semibold rounded text-[#FFF]">GO BACK</button>
      </form>
    </div>
  </div>
</dialog>
           </div>
            </div>

            <p className="text-lg w-2/4 font-serif mt-10"> {description}</p>
            <button className="transition duration-700 ease-in">Button C</button>
            
        </div>
    );
};

export default SingleJobDetails;