import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MySingleJob from "./MySingleJob";
import { Helmet } from "react-helmet";


const MyJobs = () => {
    const {user} = useContext(AuthContext) ;

    const url = `https://job-management-server-eight.vercel.app/allJobs?email=${user.email}`

    const [myJobs, setMyJobs] = useState([]) ;

    useEffect(() => {
        axios.get(url)
        .then(data => setMyJobs(data.data))
    }, [])

    
    return (
        <div>
            <Helmet>
        <title>My Jobs - The Muse </title>
      </Helmet>
            <h2 className="text-4xl my-12 font-medium font-serif text-center"> You have Posted {myJobs.length} jobs </h2>

            <div className="grid grid-cols-3 gap-6 mb-20">
                {
                    myJobs.map(myjob => <MySingleJob
                    key={myjob._id}
                    setMyJobs={setMyJobs}
                    myJobs={myJobs}
                    myjob={myjob}
                    ></MySingleJob> )
                }
            </div>
           
        </div>
    );
};

export default MyJobs;