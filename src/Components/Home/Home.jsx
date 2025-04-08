import React from 'react';
import Banner from './Banner/Banner';
import JobCard from './Job/JobCard';

const Home = () => {
    return (
        <div>
           <div>
            <Banner></Banner>
            </div> 
           {/*  <div>
                <AnimatedImages></AnimatedImages>
            </div> */}
            <div>
                <JobCard></JobCard>
            </div>
        </div>
    );
};

export default Home;