import React from 'react';
import { NewDestination, OtherDestination, Review } from 'src/components';
import HomeBanner from 'src/assets/img/home-banner.png';

const Home = () => {
    return (
        <div className='md:px-16 md:pb-16 px-3 pb-3'>
            <div className='md:-mx-[64px] -mx-3 w-auto'>
                <img src={HomeBanner} className='w-full object-cover max-h-[471px] md:h-auto h-[300px]' alt='' />
            </div>
            <NewDestination />
            <OtherDestination />
            <Review />
        </div>
    )
};

export default Home;