import React, { useEffect, useState } from 'react';
import api from 'src/api';
import { ToursProps } from 'src/type';

const NewDestionation = () => {
    const [newTours, setNewTours] = useState<ToursProps | null>(null);

    useEffect(() => {
        const getNewTours = () => {
            return api.get('/api/v1/tours/new-tour')
                .then(function (result) {
                    setNewTours(result?.data);
                }, function (err) {
                    console.log(err);
                });
        }
        getNewTours();
    }, []);

    return (
        <div className='flex md:flex-nowrap flex-wrap md:mt-24 mt-10' data-cy='header-new-tour'>
            {
                newTours && (
                    <>
                        <div className='md:mr-5 md:flex-none md:w-fit w-full'>
                            <img src={newTours.image} className='w-full md:w-[448px] h-auto md:h-[318px] object-cover rounded-3xl' alt='' />
                        </div>
                        <div className='md:flex md:flex-col md:mt-0 mt-5'>
                            <h2 className='font-bold text-4xl'>Tujuan <span className='text-ravel-green-400'>Baru</span>!</h2>
                            <div className='text-md font-bold my-5'>{`${newTours.name},`} <span className='text-ravel-green-400'>{newTours.slug}</span></div>
                            <p className='text-md'>{newTours.description}</p>
                        </div>
                    </>
                )
            }
            
        </div>
    )
};

export default NewDestionation;