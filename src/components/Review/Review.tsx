import React, {useEffect, useState} from 'react';
import ReviewProfile from 'src/assets/img/main-review.png';
import api from 'src/api';
import { TestimoniProps } from 'src/type';
import { Link } from 'react-router-dom';

const Review = () => {
    const [testimoni, setTestimoni] = useState<TestimoniProps>();

    useEffect(() => {
        const getOtherTours = () => {
            return api.get('/api/v1/testimonies')
                .then(function (result) {
                    setTestimoni(result?.data[0]);
                }, function (err) {
                    console.log(err);
                });
        }
        getOtherTours();
    }, []);
    return (
        <div className='flex md:flex-nowrap flex-wrap md:mt-24 mt-10'>
            <div className='md:mr-5 md:flex-none md:w-fit w-full'>
                <img src={ReviewProfile} className='w-full md:w-[448px] h-auto object-cover' alt='' />
            </div>
            <div>
                <h2 className='font-bold text-4xl'>
                    Experience Nomor <span className='text-ravel-green-400'>Satu</span>!
                </h2>
                <div className='text-md font-bold'>
                    Dipercaya Seluruh Dunia
                </div>
                <p className='text-md mt-4'>
                    {testimoni?.rateComment}
                </p>
                <Link to='/testimoni'>
                    <button className='flex bg-ravel-green-400 text-white font-bold text-xl py-4 px-6 rounded-2xl mt-14'>
                        Testimoni 
                        <span className='self-center ml-3 mt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="#FFFFFF" />
                        </svg>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Review;