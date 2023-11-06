import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


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
            <h2>myJobs {myJobs.length}</h2>
        </div>
    );
};

export default MyJobs;