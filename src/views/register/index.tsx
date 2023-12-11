import React, { FormEvent, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import toast from 'react-hot-toast';
import api from 'src/api';

const Register = () => {
    const navigate = useNavigate();
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [hidePasswordConfirm, setHidePasswordConfirm] = useState<boolean>(true);
    const [errorUserId, setErrorUserId] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const onChangeUserId = (e: React.FormEvent<HTMLInputElement>) => {
        const regex = /^[0-9a-zA-Z(\-) .]+$/; 
        if (e.currentTarget.value.match(regex) || e.currentTarget.value === "") {
            setUserId(e.currentTarget.value.replace(/ /g, "."));
        }
        
    }

    const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    const onChangeConfirmPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
    }

    const submitRegister = async(e: FormEvent) => {
        e.preventDefault();
        if (userId && name && password && confirmPassword && (password === confirmPassword)) {
            const register = await api.post('/api/v1/auam/register', JSON.stringify({ userId, name, password }));
            if (register && register.data) {
                console.log(register);
                toast(`Hai ${name}>, anda telah terdaftar!`, {
                    style: {
                        border: '1px solid #0CC03E',
                        padding: '16px',
                        color: '#FFFFFF',
                        backgroundColor: '#0CC03E',
                        width: '400px'
                    }
                });
                navigate("/login");
            } else {
                toast(register.message, {
                    style: {
                        border: '1px solid #E5111E',
                        padding: '16px',
                        color: '#FFFFFF',
                        backgroundColor: '#E5111E',
                        width: '400px'
                    }
                });
            }
        }else {
            if (!userId) setErrorUserId(true);
            if (!name) setErrorName(true);
            if (!password) setErrorPassword(true);
            if (!confirmPassword) setErrorConfirmPassword(true);
            if (password !== confirmPassword) {
                toast('Password dan Konfirmasi Password tidak sama', {
                    style: {
                        border: '1px solid #E5111E',
                        padding: '16px',
                        color: '#FFFFFF',
                        backgroundColor: '#E5111E',
                        width: '400px'
                    }
                });
            }
        }
    }

    return (
        <div className='bg-no-repeat bg-center md:bg-[url("src/assets/img/banner-register.png")]'>
            <div className='h-screen align-middle flex w-full justify-center'>
                <div className='w-full max-w-[500px] self-center'>
                    <div className='md:shadow-lg md:rounded-[49px] md:p-10 p-5 w-full bg-white h-[588px]'>
                        <div className='font-semibold text-2xl'>Daftar</div>
                        <div className='mt-3'>
                                <div className='mt-5 text-base font-semibold'>
                                    <label className='text-base'>
                                        User ID
                                        <input type='text' name='user-id' pattern="[a-zA-Z0-9 ]+" data-cy='input-userId' className={`w-full rounded-md p-1.5 text-sm outline-none ${errorUserId ? 'border border-ravel-red-500' : 'border border-ravel-gray-200'}`} placeholder='Masukan User Id' value={userId} onChange={onChangeUserId} />
                                    </label>
                                    {errorUserId && (<p className='text-ravel-red-500 text-xs mt-1'>User ID harus diisi</p>)}
                                </div>
                                <div className='mt-5 text-base font-semibold'>
                                    <label className='text-base'>
                                        Nama
                                        <input type='text' name='user-id' data-cy='input-name' className={`w-full rounded-md p-1.5 text-sm outline-none ${errorName ? 'border border-ravel-red-500' : 'border border-ravel-gray-200'}`} placeholder='Masukan Nama' value={name} onChange={onChangeName} />
                                    </label>
                                    {errorName && (<p className='text-ravel-red-500 text-xs mt-1'>Nama harus diisi</p>)}
                                </div>
                                <div className='mt-5 text-base font-semibold'>
                                    <label className='text-base'>
                                        Password
                                        <div className={`w-full rounded-md px-1 flex ${errorPassword ? 'border border-ravel-red-500' : 'border border-ravel-gray-200'}`}>
                                            <input type={hidePassword ? 'password' : 'text'} name='password' data-cy='input-password' className='w-full p-1.5 text-sm outline-none' placeholder='Masukan Password' value={password} onChange={onChangePassword} />
                                            <button className='p-1' onClick={() => setHidePassword(!hidePassword)}>
                                                {
                                                    hidePassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='w-3.5 h-3.5'>
                                                            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                                                        </svg>
                                                    ): (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='w-3.5 h-3.5'>
                                                            <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
                                                        </svg>
                                                    )
                                                }
                                                
                                            </button>
                                        </div>
                                    </label>
                                    {errorPassword && (<p className='text-ravel-red-500 text-xs mt-1'>Password harus diisi</p>)}
                                </div>
                                <div className='mt-5 text-base font-semibold'>
                                    <label className='text-base'>
                                        Konfirmasi Password
                                        <div className={`rounded-md w-full px-1 flex ${errorName ? 'border border-ravel-red-500' : 'border border-ravel-gray-200'}`}>
                                            <input type={hidePasswordConfirm ? 'password' : 'text'} name='confirmation-password' data-cy='input-confirmation_password' className='w-full p-1.5 text-sm outline-none' placeholder='Masukan Konfirmasi Password' value={confirmPassword} onChange={onChangeConfirmPassword} />
                                            <button className='p-1' onClick={() => setHidePasswordConfirm(!hidePasswordConfirm)}>
                                                {
                                                hidePasswordConfirm ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='w-3.5 h-3.5'>
                                                            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='w-3.5 h-3.5'>
                                                            <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
                                                        </svg>
                                                    )
                                                }

                                            </button>
                                        </div>
                                    </label>
                                    {errorConfirmPassword && (<p className='text-ravel-red-500 text-xs mt-1'>Konfirmasi Password harus diisi</p>)}
                                </div>
                                <div className='w-full md:mt-5 mt-10'>
                                <button data-cy='btn-register' className='cursor-pointer w-full bg-ravel-green-500 p-3 text-white rounded-xl font-semibold' onClick={submitRegister}>Daftar</button>
                                </div>
                                <div className='text-center'>
                                    <p className='font-semibold text-md text-ravel-gray-400 mt-5'>Sudah punya akun? <Link to='/login' data-cy='btn-login' className='text-ravel-green-400'>Masuk</Link></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;