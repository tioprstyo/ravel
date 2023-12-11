import { UserCredentialProps, UserProfile } from "src/type";

const baseUrl = 'https://bio-code.cyclic.app';
const Authorization = sessionStorage.getItem('Authorization') || '';
const getIsRememberMe: UserCredentialProps = JSON.parse(sessionStorage.getItem('isRememberMe') || '{}') || null;
const getUserProfile: UserProfile = JSON.parse(sessionStorage.getItem('profile') || '{}') || null;

const setIsRememberMe = (users: UserCredentialProps) => {
    sessionStorage.setItem('isRememberMe', JSON.stringify(users));
};

const setSessionRemove = () => {
    sessionStorage.removeItem('Authorization');
    sessionStorage.removeItem('profile');
};


export {
    baseUrl,
    Authorization,
    getIsRememberMe,
    getUserProfile,
    setIsRememberMe,
    setSessionRemove,
}