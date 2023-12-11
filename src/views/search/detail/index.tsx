import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import api from 'src/api';
import { ToursProps } from 'src/type';
import { toursList } from 'src/data';

const SearchDetail = () => {
    const params = useParams();
    const [detailTour, setDetailTour] = useState<ToursProps>();

    useEffect(() => {
        const getToursDetail = () => {
            return api.get(`/api/v1/tours/${params.id}`)
                .then(function (result) {
                    console.log(result)
                    if(result && result.data) {
                        setDetailTour(result?.data);
                    } 
                    
                }, function (err) {
                    console.log(err);
                });
        }
        getToursDetail();
        if (!detailTour) {
            setDetailTour(toursList.find((e: ToursProps) => e._id === params.id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='text-center md:p-16 p-3'>
            <h1 className='md:text-5xl text-3xl font-semibold text-ravel-green-400'>{detailTour?.name}</h1>
            <h1 className='font-semibold md:text-4xl text-2xl'>{detailTour?.slug}</h1>
            <div className='mt-10 text-left'>
                <div className='mt-10'>
                    <div className='md:-mx-[65px] md:-mx-3 w-auto'>
                        <img src={detailTour?.image} className='w-full object-cover max-h-[380px]' alt='destinations' />
                    </div>
                    <div className='text-center md:mt-10 mt-5'>
                        <div className='font-semibold'>
                            {detailTour?.name}, <span className='text-ravel-green-400'>{detailTour?.slug}</span>
                        </div>
                        <p className='font-light w-full max-w-[791px] mt-5 mx-auto'>
                            {detailTour?.description}
                        </p>
                        <p className='font-semibold mt-5'>
                            Mulai dari : Rp. {detailTour?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchDetail;
