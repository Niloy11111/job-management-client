import { Link } from "react-router-dom";


const SingleJobInfo = ({ singlejobinfo }) => {

    const {_id, PictureURL, jobTitle, userName, jobCategory, salaryRange, description, jobPostingDate, applicationDeadline, applicants, logo, about } = singlejobinfo;
    return (
        <div>
            <div className="bg-[#FFF] flex items-center justify-between pb-3 border-b pr-4 hover:bg-[#ebf8fd] border-[#9adbf5] rounded">

                <div className="flex gap-5 pt-7 ">
                    <div className="ml-3 flex justify-center rounded items-center w-[100px] bg-[FFF] border h-[100px]">
                        <img className="" src={logo}></img>
                    </div>

                    <div className="">
                        <h2 className="text-xl mb-1 font-medium font-inter ">{jobTitle}</h2>
                        <p className="text-[#53565f]text-sm font-normal font-inter">Hiring Manager <span className="bg-[#ebf8fd] hover:bg-[#9adbf5] ml-1 p-1 rounded">{userName}</span> </p>
                        <p className="text-[#737478] text-sm">Posted on {jobPostingDate}</p>
                    </div>
                </div>

                <div>
                    <p>{applicationDeadline}</p>
                    <p>{salaryRange}</p>
                  <Link to={`details/${_id}`}>  <button className="border border-[#1d2d5a] text-[#1d2d5a] text-sm hover:text-[#FFF] px-10 py-3 font-inter font-normal rounded hover:bg-[#1d2d5a]">VIEW JOB</button></Link>
                </div>


            </div>

        </div>
    );

};

export default SingleJobInfo;