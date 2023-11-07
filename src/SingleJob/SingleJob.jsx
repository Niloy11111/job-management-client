import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import { Link } from 'react-router-dom';

const SingleJob = ({job}) => {

    const {_id,  PictureURL, jobTitle, userName, jobCategory, salaryRange,description, jobPostingDate, applicationDeadline, applicants} = job ;

    return (
        <div className="space-y-2  duration-150 p-4 transition-all bg-[#FFF] hover:border-2 border-purple-300 rounded">

            
            <h2 className="font-serif text-2xl font-normal"> {jobTitle}</h2>
            <p className="bg-gray-200 max-w-fit rounded p-1 text-sm font-normal font-Inter"> Hiring Manager  {userName}  </p>
            <p className="text-sm font-inter pt-4 font-semibold">POSTED ON <span className="text-green-500 bg-green-200 ml-1 p-1 rounded">{jobPostingDate}</span></p>
            <p className="text-sm font-inter font-semibold pt-1 ">VALID TILL <span className="text-red-400 bg-red-200 p-1 ml-3 rounded">{applicationDeadline}</span></p>
            <p className='text-sm font-medium font-Inter'> SALARY <span className='font-bold'>{salaryRange}</span> YEARLY</p>
            <p className="text-sm font-inter font-medium"> {applicants} APPLICANTS APPLIED</p>
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

export default SingleJob;