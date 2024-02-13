import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import UseJobs from "../../../hooks/UseJobs";
import JobTab from "./JobTab";
import "./TabCss/Tab.css";

const JobByCategory = () => {
  const [allJobs, loading, refetch] = UseJobs();

  const onSiteJobs = allJobs.filter((item) => item.jobCategory === "On Site");
  const remoteJobs = allJobs.filter((item) => item.jobCategory === "Remote");
  const partTimeJobs = allJobs.filter(
    (item) => item.jobCategory === "Part-Time"
  );
  const hybridJobs = allJobs.filter((item) => item.jobCategory === "Hybrid");

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mb-20 mt-10">
      <h2 className="  text-3xl lg:text-4xl font-Inter font-extrabold uppercase mb-12 text-center">
        Browse <span className="text-[#E9155B]">popular </span> Job
      </h2>

      <Tabs className="">
        <TabList className="flex -mb-6  gap-3  ">
          <Tab
            className={`cursor-pointer  py-2 px-4 rounded-full lg:py-2 ${
              activeTab === 0 ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab(0)}
          >
            All Jobs
          </Tab>

          <Tab
            className={`cursor-pointer rounded-full   py-2 px-3 lg:py-2 ${
              activeTab === 1 ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab(1)}
          >
            On Site Job
          </Tab>

          <Tab
            className={`cursor-pointer   py-2 px-3 rounded-full lg:py-2 ${
              activeTab === 2 ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Remote Job
          </Tab>
          <Tab
            className={`cursor-pointer  py-2 px-3 rounded-full lg:py-2 ${
              activeTab === 3 ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Hybrid
          </Tab>
          <Tab
            className={`cursor-pointer  py-2 px-3 rounded-full lg:py-2 ${
              activeTab === 4 ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab(4)}
          >
            Part Time
          </Tab>
        </TabList>

        <TabPanel>
          <JobTab jobs={allJobs}></JobTab>
        </TabPanel>

        <TabPanel>
          <JobTab jobs={onSiteJobs}></JobTab>
        </TabPanel>

        <TabPanel>
          <JobTab jobs={remoteJobs}></JobTab>
        </TabPanel>

        <TabPanel>
          <JobTab jobs={hybridJobs}></JobTab>
        </TabPanel>

        <TabPanel>
          <JobTab jobs={partTimeJobs}></JobTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobByCategory;
