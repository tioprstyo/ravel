import React, { useEffect, useState } from 'react';
import api from 'src/api';
import { Link } from 'react-router-dom';
import { OtherTours } from 'src/type';

const OtherDestination = () => {
    const [otherTours, setOtherTours] = useState<OtherTours[]>([]);

    useEffect(() => {
        const getOtherTours = () => {
            return api.get('/api/v1/tours/top-5-tour')
                .then(function (result) {
                    setOtherTours(result?.data);
                }, function (err) {
                    console.log(err);
                });
        }
        getOtherTours();
    }, []);

    return (
        <div>
            <h2 className='text-center font-bold md:text-4xl text-xl md: my-20'><span className='text-ravel-green-400'>Explore</span> Tempat Lainnya</h2>
            <div className='md:grid-cols-5 md:grid md:gap-10 bg-ravel-gray-50 md:py-20 md:-mx-[64px] -mx-3 md:px-24 px-3'>
                {
                    otherTours && otherTours.map((e: OtherTours, i: number) => (
                        <Link to='/search/detail' className='text-md text-center cursor-pointer md:mt-0 mt-14' key={i}>
                            <div data-cy={`header-top-tour-${i}`}>
                                <img src={e.image} className='w-full h-[160px] object-cover rounded-xl' alt='' />
                                <div className='font-bold'>{e.name}</div>
                                <p className='text-elipsis font-light line-clamp-3'>{e.description}</p>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
};

export default OtherDestination;