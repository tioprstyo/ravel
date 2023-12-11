import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from 'src/assets/img/banner-register.png';
import UserLogo from 'src/assets/img/users.png';
import Menu from 'src/assets/img/menu.png';
import { getUserProfile, setSessionRemove, profile } from 'src/storage';
import { UserProfile } from 'src/type';
import { useLocation } from 'react-router-dom';
import api from 'src/api';
import { useRecoilValue } from 'recoil';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const profiles = useRecoilValue(profile);
    const [profil, setProfil] = useState<UserProfile>(profiles);
    const [dropdown, setDropdown] = useState<boolean>(false);

    useEffect(() => {
        const getNewTours = () => {
            return api.get('/api/v1/tours/new-tour')
                .then(function (result) {
                    if (result.status !== 'success' && result.message === 'Token Tidak Valid') {
                        setSessionRemove();
                        navigate('/login')
                    }
                }, function (err) {
                    console.log(err);
                });
        }
        getNewTours();
        setProfil(Object.keys(getUserProfile).length > 0 ? getUserProfile: profiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLogout = () => {
        setSessionRemove();
        setDropdown(false);
        navigate('/login');
    }

    return (
        <>
        <div className='md:grid-cols-3 grid-cols-2 grid md:gap-10 md:py-3 md:px-10 p-3 shadow-lg sticky w-full bg-white top-0 left-0'>
            <Link to='/' className='flex cursor-pointer'>
                <img src={Logo} alt='ravel-logo' className='md:w-[45px] md:h-[40px] w-[30px] h-[25px] self-center' data-cy='h-logo' />
                <div className='ml-3'>
                    <div className='md:text-lg text-sm font-bold'>Ravel</div>
                    <p className='text-xs font-light'>Travel Solution by Randy</p>
                </div>
            </Link>
            <div className='md:grid-cols-3 md:grid md:gap-1 text-center self-center hidden'>
                <Link to='/' className={`text-md font-semibold ${location.pathname === '/' ? 'text-ravel-green-400' : ''}`} data-cy='h-nav-home'>Home</Link>
                <Link to='/search' className={`text-md font-semibold ${location.pathname === '/search' ? 'text-ravel-green-400' : ''}`} data-cy='h-other-place'>Tempat Lain</Link>
                <Link to='/testimoni' className={`text-md font-semibold ${location.pathname === '/testimoni' ? 'text-ravel-green-400' : ''}`} data-cy='h-testimoni'>Testimoni</Link>
            </div>
            {
                profile && (
                    <div className='self-center ml-auto' data-cy='h-profile' onClick={() => setDropdown(!dropdown)}>
                        <div className='md:flex hidden'>
                            <p className='font-thin text-md self-center'>Halo, {profil.name}</p>
                            <img src={UserLogo} alt='' className='w-[30px] h-[30px] ml-3' />
                        </div>
                        <div className='md:hidden'>
                            <img src={Menu} className='w-[30px] h-[25px]' alt='menu' />
                        </div>
                    </div>
                )
            }
        </div>
        {
            dropdown && (
                <div className='fixed right-4 md:top-16 top-14 p-3 bg-white border border-ravel-gray-200 rounded-md w-[150px] text-center text-sm cursor-pointer' onClick={() => onLogout()}>
                    Logout
                </div>
            )
        }
        </>
    )
}
export default Header;