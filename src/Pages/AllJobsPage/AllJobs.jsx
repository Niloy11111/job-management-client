import { useLoaderData } from "react-router-dom";
import SingleJobInfo from "./SingleJobInfo";
import { BsSearch } from "react-icons/bs";


const AllJobs = () => {

    const alljobsInfos = useLoaderData() ;
    
    

    return (
        <div className="pb-20">



            <h2 className="text-center my-10 text-4xl font-medium font-serif">Explore Your Dream Job</h2>

            <div className='mt-6 rounded mb-5 border flex lg:mt-10  bg-[#FFF]  w-[300px] md:w-[300px] lg:w-[470px] border-[#1d2d5a]'>
                        <button type="submit" className='bg-[#feea59] flex items-center rounded-lg m-1 justify-center w-[100px] h-[50px]  text-lg font-semibold text-[#333F]'> <BsSearch></BsSearch></button>
                        <input name='category' id='field-id' className='pl-4 outline-none ' type="text" placeholder='Search jobs' />
                    </div>

            
   
           <div className="grid gap-6 grid-cols-2">
           {
                alljobsInfos.map(singlejobinfo => <SingleJobInfo
                    singlejobinfo={singlejobinfo}
                key={singlejobinfo._id}
                ></SingleJobInfo> )
            }
           </div>
            
        </div>
    );
};

export default AllJobs;