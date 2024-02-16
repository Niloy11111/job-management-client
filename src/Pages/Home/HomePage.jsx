import { Helmet } from "react-helmet";

import Banner from "./Banner/Banner";
import Company from "./Company";
import Connect from "./Connect";
import JobByCategory from "./JobByCategory/JobByCategory";
import LeverageTalent from "./LeverageTalent/LeverageTalent";
import Usage from "./Usage";

const HomePage = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | LeepPro </title>
      </Helmet>
      <Banner></Banner>

      <Usage></Usage>

      <Company></Company>

      <LeverageTalent></LeverageTalent>

      <Connect></Connect>

      <JobByCategory></JobByCategory>
    </div>
  );
};

export default HomePage;
