import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import SingleAppliedJob from "./SingleAppliedJob";


const AppliedJob = () => {
    const categories = ['Remote', 'On Site', 'Hybrid', 'Part-Time'];

    const [category, setCategory] = useState('');

    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const urlCategory = `http://localhost:5000/appliedJobs?email=${user?.email}&jobCategory=${category}`;

    const url = 'http://localhost:5000/allAppliedJobs' ;

    useEffect(() => {
        if (category) {
            axios.get(urlCategory).then((res) => {
                setAppliedJobs(res.data);
            });
        }
        else(
            axios.get(url)
            .then(res => setAppliedJobs(res.data))
        )
    }, [category, urlCategory]);

    return (
        <div className="mb-24">
            <div className="my-10 text-center">
                <form action="">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-1/3 outline-none rounded py-3"
                        name=""
                        id=""
                    >
                        <option value="">All</option>
                        {categories.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </form>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {appliedJobs.map((appliedjob) => (
                    <SingleAppliedJob key={appliedjob._id} appliedjob={appliedjob}></SingleAppliedJob>
                ))}
            </div>
        </div>
    );
};

export default AppliedJob;