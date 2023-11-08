import {  BiBriefcase } from "react-icons/bi";
import {  RiDeleteBin6Line } from "react-icons/ri";
import {  MdOutlineTipsAndUpdates } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MySingleJob = ({myjob, myJobs, setMyJobs}) => {

    const {_id, PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants, logo, about} = myjob ;


    const handleDeleteProduct = _id => {

        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to restore this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/allJobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = myJobs.filter(cart => cart._id !== _id);
                            setMyJobs(remaining);
                        }
                    })

            }
        })
    }

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

           <p className="mt-4 text-sm text-[#424242] font-normal font-inter">{description?.slice(0, 270)}</p>

           <div className="flex gap-3 mt-5">
          <Link className="flex-1 " to={`updateJobs/${_id}`}> <button className="gap-3 flex items-center justify-center py-2 w-full rounded border-2 border-[#6E46AE] text-sm hover:bg-[#6E46AE] text-[#6E46AE] hover:text-[#FFF] font-semibold bg-[#FFF] "><MdOutlineTipsAndUpdates></MdOutlineTipsAndUpdates> UPDATE</button></Link>
           <button onClick={() => handleDeleteProduct(_id)} className="flex-1 flex items-center justify-center py-2 border-2 gap-3 border-[#D9DBE9] hover:bg-[#D9DBE9] text-[#6E46AE] rounded font-semibold text-sm"><RiDeleteBin6Line></RiDeleteBin6Line> DELETE</button>
           </div>



        </div>
    );
};

export default MySingleJob;