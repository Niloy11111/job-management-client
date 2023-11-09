import { Helmet } from "react-helmet";
import Banner from "../../Banner/Banner";

import JobByCategory from "../../JobByCategory/JobByCategory";
import LeverageTalent from "../../LeverageTalent/LeverageTalent";
import WhatWeOffer from "../../WhatWeOffer/WhatWeOffer";


const HomePage = () => {
    return (
        <div>
             <Helmet>
        <title>Home Page - The Muse </title>
      </Helmet>
            <Banner></Banner>
            
            <WhatWeOffer></WhatWeOffer>
            <JobByCategory></JobByCategory>
            <LeverageTalent></LeverageTalent>
        </div>
    );
};

export default HomePage;