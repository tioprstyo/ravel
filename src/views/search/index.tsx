import React, { useEffect, useState } from 'react';
import SearchIcon from 'src/assets/img/search.png';
import { getUserProfile, profile } from 'src/storage';
import api from 'src/api';
import { ToursProps, UserProfile } from 'src/type';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { toursList } from 'src/data';

const Review = () => {
    const profiles = useRecoilValue(profile);
    const [profil, setProfil] = useState<UserProfile>(profiles);
    const [tours, setTours] = useState<ToursProps[]>([]);
    const [searchTours, setSearchTours] = useState<string>('');

    useEffect(() => {
        const getNewTours = () => {
            return api.get(`/api/v1/tours?search=${searchTours}`)
                .then(function (result) {
                    setTours(result?.data)
                }, function (err) {
                    console.log(err);
                });
        }
        getNewTours();
        setProfil(Object.keys(getUserProfile).length > 0 ? getUserProfile : profiles);
        setTours(toursList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //include to trigger update search key and the results */searchTours/*

    const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTours(e.currentTarget.value);
        let updateList = [...toursList].filter((e: ToursProps) => e.name.toLowerCase().includes(searchTours.toLowerCase()));
        setTours(updateList);
    }

    
    return (
        <div className='md:px-16 md:py-14 px-3 py-3'>
            <div className='flex flex-col items-center font-semibold mx-auto w-full'>
                <h1 data-cy='h-search-page' className='md:text-4xl text-xl'>Halo, <span className='text-ravel-green-400'>{profil.name}</span></h1>
                <div className='md:text-3xl text-lg md:mt-3 mt-1'>Kemana Kau Ingin Pergi?</div>
                <div className='w-full border border-ravel-gray-200 rounded-md px-2 max-w-[400px] mt-8 flex py-2'>
                    <input type='text' placeholder='Masukan Tujuanmu' data-cy='input-search-tour' className='mr-1 text-base outline-none w-full font-thin' value={searchTours} onChange={onChangeSearch} />
                    <button className='w-[15px] h-[14px] self-center'>
                        <img src={SearchIcon} alt='' />
                    </button>
                </div>
            </div>
            <div className='font-bold text-ravel-gray-700 text-xl mt-16'>
                <h2>Hasil Pencarian mu:</h2>
            </div>
            <div className='divide-y-2 divide-ravel-gray-100'>
                {
                    tours && tours.map((e: ToursProps, i: number) => (
                        <Link to={`/search/detail/${e._id}`}  className='flex md:flex-nowrap flex-wrap py-10' key={i}>
                            <img src={e.image} alt={`${e.name} is Broken`} data-cy={`tour-image-${i}`} className='md:w-[242px] md:h-[198px] w-full h-auto object-cover md:mr-5 rounded-3xl' />
                                <div className='text-sm md:mt-0 mt-5'>
                                    <h3 className='font-bold' data-cy={`tour-title-${i}`}>{e.name}, <span className='text-ravel-green-400'>{e.slug}!</span></h3>
                                    <p className='mt-3' data-cy={`tour-desc-${i}`}>{e.description}</p>
                                <p className='mt-3 font-bold' data-cy={`tour-price-${i}`}>Mulai dari : Rp.{e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                </div>
                        </Link>
                        
                    ))
                }
                
            </div>
        </div>
    )
};

export default Review;