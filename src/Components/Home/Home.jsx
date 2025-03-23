import React from 'react';
import Banner from './Banner/Banner';
import AnimatedImages from './AnimatedImages/AnimatedImages';

const Home = () => {
    return (
        <div>
           <div>
            <Banner></Banner>
            </div> 
            <div>
                <AnimatedImages></AnimatedImages>
            </div>
        </div>
    );
};

export default Home;