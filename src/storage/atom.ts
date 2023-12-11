import { atom, selector } from "recoil";

export const bearer = atom({
    key: 'bearer', 
    default: '', 
});

export const profile = atom({
    key: 'profile',
    default: {
        name: '',
        userId: ''
    }
})

export const setBearer = selector({
    key: "setBearer",
    get: ({ get }) => get(bearer),
    set: ({ set }, newVal) => {
        sessionStorage.setItem('Authorization', `Bearer ${newVal}`);
        set(bearer, `Bearer ${newVal}`);
    },
});

export const isLoggedIn = selector({
    key: "isLoggedIn",
    get: ({ get }) => {
        const tempState = get(bearer);
        const sessionsState = sessionStorage.getItem('Authorization');

        if (tempState || sessionsState) return true;
        return false
    },
});

export const setUserProfile = selector({
    key: "setUserProfile",
    get: ({ get }) => get(profile),
    set: ({ set }, user) => {
        sessionStorage.setItem('profile', JSON.stringify(user));
        set(profile, user);
    },
   
});