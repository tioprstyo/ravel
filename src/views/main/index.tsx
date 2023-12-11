import React from 'react';
import { useRecoilValue } from 'recoil';
import { RouteElement } from 'src/route';
import { Header, Footer } from 'src/components';
import { Toaster } from 'react-hot-toast';
import { isLoggedIn } from 'src/storage';

const Main = () => {
    const isLogin = useRecoilValue(isLoggedIn)

    return (
        <div className='max-w-[1440px] mx-auto relative min-h-screen'>
            {
                isLogin ? (
                    <>
                        <Header />
                        <div className='pb-20'>
                            <RouteElement />
                        </div>
                        <Footer />
                    </>
                ) : (
                    <RouteElement />
                )
            }
            <Toaster
                position="top-center"
            />
        </div>
    )
};

export default Main;