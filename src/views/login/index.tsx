import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import Banner from 'src/assets/img/img-login.png';
import Logo from 'src/assets/img/logo-ravel.png';
import api from 'src/api';
import { getIsRememberMe, setIsRememberMe, setUserProfile, setBearer } from 'src/storage';
import { useSetRecoilState } from 'recoil';

const Login = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorUserId, setErrorUserId] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const setIsLogin = useSetRecoilState(setBearer);
    const setProfile = useSetRecoilState(setUserProfile)


    useEffect(() => {
        const isRemberData = getIsRememberMe;
        if (Object.keys(isRemberData).length > 0) {
            setUserId(isRemberData.userId);
            setPassword(isRemberData.password);
            setRememberMe(true);
        }
    }, [setUserId, setPassword]);

    const onChangeUserId = (e: React.FormEvent<HTMLInputElement>) => {
        setUserId(e.currentTarget.value);
        if (e.currentTarget.value) {
            setErrorUserId(false);
        }
    }

    const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        if (e.currentTarget.value) {
            setErrorPassword(false);
        }
    }

    const SubmitLogin = async (e: FormEvent) => {
        e.preventDefault();

        if(userId && password) {
            const logIn = await api.post('/api/v1/auam/login', JSON.stringify({ userId, password }));
            if (logIn && logIn.data) {
                if (rememberMe) {
                    setIsRememberMe({ userId, password });
                }
                toast(`Selamat Datang, ${logIn.data.name}!`, {
                    style: {
                        border: '1px solid #0CC03E',
                        padding: '16px',
                        color: '#FFFFFF',
                        backgroundColor: '#0CC03E',
                        width: '400px'
                    }
                });
                setIsLogin(logIn.data.accessToken);
                setProfile({ name: logIn.data.name, userId });
                navigate('/');
            } else {
                toast(logIn.message, {
                    style: {
                        border: '1px solid #E5111E',
                        padding: '16px',
                        color: '#FFFFFF',
                        backgroundColor: '#E5111E',
                        width: '400px'
                    }
                });
            }
        } else {
            if(!userId) {
                setErrorUserId(true);
            }
            if (!password) {
                setErrorPassword(true);
            }
        }        
    }
    
    return (
        <div className='md:grid-cols-2 md:grid gap-2'>
            <div className='md:block hidden'><img src={Banner} alt='Banner Login' className='h-full max-h-[100vh] w-full' /></div>
            <div className='h-screen align-middle flex w-full'>
                <div className='md:p-10 w-full w-max-[600px] self-center'>
                    <div className='md:shadow-lg md:rounded-[49px] md:p-10 p-5 w-full'>
                        <div className='flex justify-center'>
                            <img src={Logo} alt='logo' />
                        </div>
                        <>
                            <div className='font-semibold text-2xl mt-5'>Masuk</div>
                            <div className='mt-3'>
                                <form onSubmit={SubmitLogin}>
                                    <div className='mt-5 text-base font-semibold'>
                                        <label className='text-ravel-gray-500'>
                                            User ID
                                            <input type='text' name='user-id' data-cy='input-userId' className={`w-full rounded-md p-1.5 text-sm ${errorUserId ? 'border border-ravel-red-500' : 'border border-ravel-gray-200'}`} placeholder='Masukan User Id' value={userId} onChange={onChangeUserId} />
                                        </label>
                                        {errorUserId && (<p className='text-ravel-red-500 text-xs mt-1'>User ID harus diisi</p>)}
                                    </div>
                                    <div className='mt-5 text-base font-semibold'>
                                        <label className='text-ravel-gray-500'>
                                            Password
                                            <input type='password' name='password' data-cy='input-password' className={`w-full rounded-md p-1.5 text-sm ${errorPassword ? 'border border-ravel-red-500' : 'border border-ravel-gray-200'}`} placeholder='Masukan Password' value={password} onChange={onChangePassword}  />
                                        </label>
                                        {errorPassword && (<p className='text-ravel-red-500 text-xs mt-1'>Password harus diisi</p>)}
                                    </div>
                                    <div className='mt-5 text-sm font-semibold'>
                                        <label className='text-ravel-gray-500'>
                                            <input type='checkbox' checked={rememberMe} name='remember-me' data-cy='input-remember_me' onChange={() => setRememberMe(!rememberMe)} />
                                            &nbsp; Ingat saya!
                                        </label>
                                    </div>
                                    <div className='w-full mt-5'>
                                        <input type='submit' value='Login' data-cy='btn-login' className='cursor-pointer w-full bg-ravel-green-500 md:p-3 p-1 text-white rounded-xl font-semibold md:text-xl text-md' />
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className='font-semibold text-md'>atau</p>
                                        <p className='font-semibold text-md text-ravel-gray-400 mt-5'>Belum punya akun? <Link to='/register' data-cy='btn-register' className='text-ravel-green-400'>Daftar</Link></p>
                                    </div>
                                </form>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;