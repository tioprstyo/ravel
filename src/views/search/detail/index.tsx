import React from 'react';
import Item from 'src/assets/img/item.png';

const SearchDetail = () => {
    return (
        <div className='text-center md:p-16 p-3'>
            <h1 className='md:text-5xl text-3xl font-semibold text-ravel-green-400'>Surabaya</h1>
            <h1 className='font-semibold md:text-4xl text-2xl'>Mencari Perlawanan Dari Sura dan Buaya</h1>
            <div className='mt-10 text-left'>
                <div className='mt-10'>
                    <div className='md:-mx-24 -mx-3 w-auto'>
                        <img src={Item} className='w-full object-cover max-h-[380px]' alt='destinations' />
                    </div>
                    <div className='text-center md:mt-10 mt-5'>
                        <div className='font-semibold'>
                            Surabaya, <span className='text-ravel-green-400'>Sura dan Buaya!</span>
                        </div>
                        <p className='font-light w-full max-w-[791px] mt-5 mx-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus, vitae vestibulum erat tempus quis. Maecenas suscipit porta ligula, ut mattis lacus ultrices sit amet. In scelerisque nibh at odio lobortis, ut venenatis eros cursus. Sed molestie purus ut eros pretium, et auctor tellus accumsan. Etiam posuere suscipit mi ac aliquet.
                        </p>
                        <p className='font-semibold mt-5'>
                            Mulai dari : Rp. 1.500.000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchDetail;
