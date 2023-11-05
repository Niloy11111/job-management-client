import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const AddAJob = () => {

    const {user} = useContext(AuthContext) ;

    const [startDate, setStartDate] = useState(new Date());


    const handleAddJob = e => {
        e.preventDefault() ;
        const form = e.target ;
        const PictureURL = form.PictureURL.value ;
        const jobTitle = form.jobTitle.value ;
        const userName = user?.displayName ;
        const jobCategory = form.jobCategory.value ;
        const salaryRange = form.salaryRange.value ;
        const description = form.description.value ;
        const jobPostingDate = form.jobPostingDate.value ;
        const applicationDeadline = form.applicationDeadline.value ;
        const applicants = form.applicants.value ;

       
        const jobInfo = {
            PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants
        }
        console.log(jobInfo)

        axios.post('http://localhost:5000/addJob', jobInfo)
        .then(data => {
          console.log(data.data)
        })

        // fetch(' https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/addProduct', {
        //     method : 'POST',
        //     headers : {
        //         'content-type' : 'application/json'
        //     },
        //     body : JSON.stringify(productInfo)
        // })

        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
        
    }

    return (

        <div className="mb-20">

            <h2 className="text-4xl font-inter font-bold text-center mb-7  ">Let's Add a Job</h2>
            <form className="" onSubmit={handleAddJob}>

                <div className="lg:w-2/4 mx-auto">
                 
                    
              <label htmlFor="">
                <h4 className="mb-2 text-lg  font-bold">Job Banner</h4>
              <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" type="text" placeholder="Picture URL" src="" name="PictureURL" alt="" />
              </label>

                <label htmlFor="">
                <h4 className="mb-2 text-lg  font-bold">Job Title</h4>
                <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Job Title" name="jobTitle" id="" />
                </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">User Name</h4>
               <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" defaultValue={user?.displayName} placeholder="User Name" name="userName" id="" />
               </label>

               

             <label htmlFor="">
             <h4 className="mb-2 text-lg font-inter font-bold">Job Category</h4>
             <select className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Product Type" name="jobCategory" id="">
                
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
             </select>

             {/* <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Product Type" name="productType" id="" /> */}
             </label>
              
             <label htmlFor="">
             <h4 className="mb-2 text-lg  font-bold">Salary Range</h4>
             <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Salary Range" name="salaryRange" id="" />
             </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Job Description</h4>
                 {/* <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Job Description" name="description" id="" /> */}
                 <textarea className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Job Description" name="description" id=""cols="50" rows="5"></textarea>
               </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Job Posting Date</h4>
               <input type="date" className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" name="jobPostingDate" id="birthday" />
               </label>
               
               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Application DeadLine</h4>
               <DatePicker className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-[380px] block border pb-3 mb-6" name="applicationDeadline"  selected={startDate} onChange={(date) => setStartDate(date)} />
               </label>
            
               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Job Applicants Number</h4>
               <input type="text" defaultValue={0} className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" placeholder="Applicants Number"  name="applicants"  />
               </label>

                <button className="w-full bg-[#009EE2] py-3 rounded text-[#FFF] text-base font-inter font-medium"> Add This Job </button>
              
                </div>
            </form>
        </div>
    );
};

export default AddAJob;