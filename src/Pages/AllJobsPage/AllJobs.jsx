import { useLoaderData } from "react-router-dom";
import SingleJobInfo from "./SingleJobInfo";


const AllJobs = () => {

    const alljobsInfos = useLoaderData() ;
    

    return (
        <div >
   
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