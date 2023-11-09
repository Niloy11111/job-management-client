import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleAppliedJob from "./SingleAppliedJob";
import { Helmet } from "react-helmet";


const AppliedJob = () => {
    const categories = ['Remote', 'On Site', 'Hybrid', 'Part-Time'];

    const [category, setCategory] = useState('');

    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);

    // console.log(appliedJobs)

    const urlCategory = `https://job-management-server-eight.vercel.app/appliedJobs?email=${user?.email}&jobCategory=${category}`;

    const url = `https://job-management-server-eight.vercel.app/appliedJobsEmail?email=${user?.email}` ;

    useEffect(() => {
        if (category) {
            fetch(urlCategory)
            .then(res => res.json())
            .then( data => {
                setAppliedJobs(data)
            })
        }
        else(
            fetch(url)
            .then(res => res.json())
            .then( data => {
                setAppliedJobs(data)
            })
        )
    }, [category, urlCategory]);

    return (
        <div className="mb-24">
            <Helmet>
        <title>Applied Job - The Muse </title>
      </Helmet>
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