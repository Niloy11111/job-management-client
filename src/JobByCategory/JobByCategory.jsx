import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleJob from "../SingleJob/SingleJob";
import OnSiteJob from "../OnSiteJob/OnSiteJob";
import RemoteJobs from "../RemoteJobs/RemoteJobs";
import HybridJob from "../HybridJob/HybridJob";
import PartTimeJobs from "../PartTimeJobs/PartTimeJobs";


const JobByCategory = () => {

    const [allJobs , setAllJobs] = useState([]) ;

    useEffect( () => {
      fetch('http://localhost:5000/allJobs') 
      .then(res => res.json())
      .then(data => setAllJobs(data))
    }, [])

    const [onSiteJobs , setOnSiteJobs] = useState([]) ;

    useEffect( () => {
      fetch('http://localhost:5000/jobs/OnSite') 
      .then(res => res.json())
      .then(data => setOnSiteJobs(data))
    }, [])


    const [remoteJobs , setRemoteJobs] = useState([]) ;

    useEffect( () => {
      fetch('http://localhost:5000/jobs/Remote') 
      .then(res => res.json())
      .then(data => setRemoteJobs(data))
    }, [])

    const [hybridJobs , setHybridJobs] = useState([]) ;

    useEffect( () => {
      fetch('http://localhost:5000/jobs/Hybrid') 
      .then(res => res.json())
      .then(data => setHybridJobs(data))
    }, [])

    const [partTimeJobs , setPartTimeJobs] = useState([]) ;

    useEffect( () => {
      fetch('http://localhost:5000/jobs/Part-Time') 
      .then(res => res.json())
      .then(data => setPartTimeJobs(data))
    }, [])

   
    return (
        <div className="my-20">
            <h2 className="text-3xl mb-6 font-bold text-center font-inter">Job By Category</h2>

            <Tabs className=''>
    <TabList className="flex gap-6 justify-center">
      <Tab className="bg-green-300 cursor-pointer px-6 py-2 rounded">All Jobs</Tab>

      <Tab className='bg-red-100 cursor-pointer px-6 py-2 rounded'>On Site Job</Tab>

      <Tab className='bg-blue-400 cursor-pointer px-6 py-2 rounded'>Remote Job
</Tab>
      <Tab className='bg-purple-400 cursor-pointer px-6 py-2 rounded'>Hybrid</Tab>
      <Tab className='bg-sky-300 cursor-pointer px-6 py-2 rounded'>Part Time</Tab>


    </TabList>

    <TabPanel>
       
       <div className="mt-16 grid gap-7 grid-cols-3">
     
      {
        allJobs.map(job => <SingleJob
        key={job._id}
        job={job}
        ></SingleJob>)
      }
       
       </div>

    </TabPanel>

    <TabPanel>
    <div className="mt-16 grid gap-7 grid-cols-3">
      {
        onSiteJobs.map(onsitejob =><OnSiteJob
        key={onsitejob._id}
        onsitejob={onsitejob}
        ></OnSiteJob> )
      }
     
    </div>
    </TabPanel>


   <TabPanel>
    <div  className="mt-16 grid gap-7 grid-cols-3">
      {
        remoteJobs.map(remotejob => <RemoteJobs
        key={remotejob._id}
        remotejob={remotejob}
        ></RemoteJobs>)
      }
    </div>
   </TabPanel>

   <TabPanel>
    <div className="mt-16 grid gap-7 grid-cols-3">
      {
        hybridJobs.map(hybridjob => <HybridJob
        key={hybridjob._id}
        hybridjob={hybridjob}
        > 
        </HybridJob> )
      }
    </div>
   </TabPanel>

   <TabPanel>
    <div className="mt-16 grid gap-7 grid-cols-3">
      {
        partTimeJobs.map(parttimejob => <PartTimeJobs
        parttimejob={parttimejob}
        key={parttimejob._id}
        ></PartTimeJobs>)
      }
    </div>
   </TabPanel>



  </Tabs>
        </div>
    );
};

export default JobByCategory;