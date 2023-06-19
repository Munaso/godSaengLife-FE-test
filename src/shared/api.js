import axios from 'axios';
import { api } from './apiConfig';

export const AuthApi = {
    signup: payload => {
        console.log(payload);
        const url = '/signup';
        api.post(url, payload)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    signin: async payload => {
        const response = await api.post('/login', payload);
        return response.data;
    },
    signout: token => {
        api.post('/logout', {
            headers: {
                'Content-Type': 'application/json', // 필요한 헤더를 여기에 추가하세요
                Authorization: token, // 필요한 인증 헤더를 여기에 추가하세요
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
};

export const MainApi = {
    getMain: token => {
        console.log(token);
        api.get('/main', {
            headers: {
                'Content-Type': 'application/json', // 필요한 헤더를 여기에 추가하세요
                Authorization: token, // 필요한 인증 헤더를 여기에 추가하세요
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
};

export const PostApi = {
    getAllMeal: token => {
        api.get('/allmeal', {
            headers: {
                'Content-Type': 'application/json', // 필요한 헤더를 여기에 추가하세요
                Authorization: token, // 필요한 인증 헤더를 여기에 추가하세요
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    saveData: (token, data) => {
        console.log('token', token, data);
        api.post('/feed/write', data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    // saveData: (token, data) => {
    //     console.log('token', token, data);

    //     const formData = new FormData();
    //     formData.append('emotion', data.emotion);
    //     formData.append('howEat', data.howEat);
    //     formData.append('didGym', data.didGym);
    //     formData.append('goodSleep', data.goodSleep);

    //     data.imagePaths.forEach(image => {
    //         formData.append('images', image);
    //     });

    //     PostApi.saveData(token, formData);
    // },
};
