import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import { Link } from "react-router-dom";
const OnSiteJob = ({onsitejob}) => {

    const {_id, PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants} = onsitejob ;
    return (
        <div className="space-y-2  duration-150 p-4 transition-all bg-[#FFF] hover:border-2 border-purple-300 rounded">

            
        <h2 className="font-serif text-2xl font-normal"> {jobTitle}</h2>
        <p className="bg-gray-200 max-w-fit rounded p-1 text-sm font-normal font-Inter"> Hiring Manager  {userName}  </p>


        <p className="text-sm pb-2 font-inter pt-4 font-semibold">POSTED ON <span className="ml-3 py-1 px-1 border-2 border-[#D9DBE9] hover:bg-[#D9DBE9] text-[#6E46AE] rounded font-semibold text-sm">{jobPostingDate}</span></p>


        <p className="text-sm font-inter font-semibold pt-1 ">VALID TILL <span className="py-1 px-1 w-full rounded border-2 border-[#6E46AE] text-sm hover:bg-[#6E46AE] text-[#6E46AE] hover:text-[#FFF] font-semibold bg-[#FFF] ml-5">{applicationDeadline}</span></p>
        <p className='text-sm font-medium font-Inter pt-2'> SALARY <span className='font-bold'>{salaryRange}</span> YEARLY</p>
        <p className="text-sm font-inter font-medium pb-2"> {applicants} APPLICANTS APPLIED</p>
        <Link to={`details/${_id}`}>
        <AwesomeButton
  cssModule={AwesomeButtonStyles}
  type="secondary"
  size='large'
  onPress={() => {
  }}>
VIEW JOB
</AwesomeButton>
    </Link>

    </div>
    );
};

export default OnSiteJob;