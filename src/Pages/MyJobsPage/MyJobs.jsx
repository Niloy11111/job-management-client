import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MySingleJob from "./MySingleJob";


const MyJobs = () => {
    const {user} = useContext(AuthContext) ;

    const url = `http://localhost:5000/allJobs?email=${user.email}`

    const [myJobs, setMyJobs] = useState([]) ;

    useEffect(() => {
        axios.get(url)
        .then(data => setMyJobs(data.data))
    }, [])

    
    return (
        <div>
            <h2 className="text-2xl text-center"> You have created {myJobs.length} jobs </h2>

            <div className="grid grid-cols-3 gap-6">
                {
                    myJobs.map(myjob => <MySingleJob
                    key={myjob._id}
                    myjob={myjob}
                    ></MySingleJob> )
                }
            </div>
           
        </div>
    );
};

export default MyJobs;