import { useLoaderData } from "react-router-dom";
import SingleJobInfo from "./SingleJobInfo";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const AllJobs = () => {
    const [allJobs, setAllJobs] = useState() ;
    const [inputValue, setInputValue] = useState('');

    const titleUrl = `https://job-management-server-eight.vercel.app/titleBaseJob?jobTitle=${inputValue}`

    const url = 'https://job-management-server-eight.vercel.app/allJobs'

    useEffect( () => {
        if(inputValue ){
            axios.get(titleUrl)
            .then(data => setAllJobs(data.data))
        }
        else{
            axios.get(url)
            .then(data => setAllJobs(data.data))
        }
    },[inputValue, titleUrl])
   
    console.log(inputValue)

    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    //   };

      const handleButtonClick = (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const title = form.title.value 
        setInputValue(title)
      };
  
    
    

    return (
        <div className="pb-20">
            <Helmet>
        <title>All Jobs - The Muse </title>
      </Helmet>

            <h2 className="text-center my-10 text-4xl font-medium font-serif">Explore Your Dream Job</h2>

            <div className='mt-6 bg-[#FFF] rounded mb-5 border lg:mt-10 w-2/6  border-[#1d2d5a]'>
                       <form onSubmit={handleButtonClick} className="flex" action="">
                       <button  type="submit" className='bg-[#feea59] flex items-center rounded-lg m-1 justify-center w-[100px] h-[50px]  text-lg font-semibold text-[#333F]'> <BsSearch></BsSearch></button>
                        <input  name='title' id='field-id' className='pl-4 w-full outline-none ' type="text" placeholder='Search jobs' />
                       </form>
                    </div>

            
   
           <div className="grid gap-6 grid-cols-2">
           {
                allJobs?.map(singlejobinfo => <SingleJobInfo
                    singlejobinfo={singlejobinfo}
                    
                key={singlejobinfo._id}
                ></SingleJobInfo> )
            }
           </div>
            
        </div>
    );
};

export default AllJobs;