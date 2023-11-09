import Banner from "../../Banner/Banner";

import JobByCategory from "../../JobByCategory/JobByCategory";
import LeverageTalent from "../../LeverageTalent/LeverageTalent";
import WhatWeOffer from "../../WhatWeOffer/WhatWeOffer";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            
            <WhatWeOffer></WhatWeOffer>
            <JobByCategory></JobByCategory>
            <LeverageTalent></LeverageTalent>
        </div>
    );
};

export default HomePage;