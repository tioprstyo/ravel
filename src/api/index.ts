
import { baseUrl, Authorization, bearer } from "src/storage";
import { getRecoil } from 'recoil-nexus';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization
}

const get = async(url: string) => {
    if(!Authorization) {
        headers.Authorization = getRecoil(bearer);
    }

    return await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (resJson) {
        return resJson;
    });
}

const post = async (url: string, body: any) => {
    if (!Authorization) {
        headers.Authorization = getRecoil(bearer);
    }
    
    return await fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers,
        body
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (resJson) {
        return resJson;
    });
}


const api = {
    get,
    post
}

export default api;