import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleJob from "../SingleJob/SingleJob";
import OnSiteJob from "../OnSiteJob/OnSiteJob";
import RemoteJobs from "../RemoteJobs/RemoteJobs";
import HybridJob from "../HybridJob/HybridJob";
import PartTimeJobs from "../PartTimeJobs/PartTimeJobs";
import 'react-tabs/style/react-tabs.css';
import '../TabCss/Tab.css'

const JobByCategory = () => {

    const [allJobs , setAllJobs] = useState([]) ;

    useEffect( () => {
      fetch('https://job-management-server-eight.vercel.app/allJobs') 
      .then(res => res.json())
      .then(data => setAllJobs(data))
    }, [])

    const [onSiteJobs , setOnSiteJobs] = useState([]) ;

    useEffect( () => {
      fetch('https://job-management-server-eight.vercel.app/jobs/OnSite') 
      .then(res => res.json())
      .then(data => setOnSiteJobs(data))
    }, [])


    const [remoteJobs , setRemoteJobs] = useState([]) ;

    useEffect( () => {
      fetch('https://job-management-server-eight.vercel.app/jobs/Remote') 
      .then(res => res.json())
      .then(data => setRemoteJobs(data))
    }, [])

    const [hybridJobs , setHybridJobs] = useState([]) ;

    useEffect( () => {
      fetch('https://job-management-server-eight.vercel.app/jobs/Hybrid') 
      .then(res => res.json())
      .then(data => setHybridJobs(data))
    }, [])

    const [partTimeJobs , setPartTimeJobs] = useState([]) ;

    useEffect( () => {
      fetch('https://job-management-server-eight.vercel.app/jobs/Part-Time') 
      .then(res => res.json())
      .then(data => setPartTimeJobs(data))
    }, [])

    const [activeTab, setActiveTab] = useState(0);
   
    return (
        <div className="my-20">
            <h2 className="text-3xl mb-6 font-bold text-center font-inter">Job By Category</h2>

            <Tabs  className=''>
    <TabList className="flex  gap-6 justify-center">
      <Tab  className={`cursor-pointer px-6 py-2 rounded ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => setActiveTab(0)}>All Jobs</Tab>

      <Tab  className={`cursor-pointer px-6 py-2 rounded ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}>On Site Job</Tab>

      <Tab   className={`cursor-pointer px-6 py-2 rounded ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => setActiveTab(2)}>Remote Job
</Tab>
      <Tab className={`cursor-pointer px-6 py-2 rounded ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => setActiveTab(3)}>Hybrid</Tab>
      <Tab  className={`cursor-pointer px-6 py-2 rounded ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => setActiveTab(4)}>Part Time</Tab>


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