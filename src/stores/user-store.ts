//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const token = ref(null);
    const expiresIn = ref(0);
    const allUsers = ref('');
    const selfUid = ref('');

    const access = async (email: any, password: any) => {
        try {
            const res = await api.post('/login', {
                email: email,
                password: password,
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem('user', res.data.role);
            setTime();
        } catch (error: any) {
            if (error.response) {
                // console.log(error.response.data);
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const register = async (name: any, email: any, password: any) => {
        try {
            const res = await api.post('/register', {
                name: name,
                email: email,
                password: password,
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem('user', res.data.role);
            setTime();
        } catch (error: any) {
            if (error.response) {
                // console.log(error.response.data);
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const logout = async () => {
        try {
            await api.get('/logout');
        } catch (error: any) {
            console.log(error);
        } finally {
            resetStore();
            sessionStorage.removeItem('user');
        }
    };

    const self = async () => {
        try {
            const resp = await api({
                url: '/self',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token.value,
                },
            });
            if (resp) {
                selfUid.value = resp.data.uid;
                console.log('Self did it');
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const setTime = () => {
        setTimeout(() => {
            console.log('se refrescó');
            refreshToken();
        }, expiresIn.value * 1000 - 6000);
    };

    const refreshToken = async () => {
        console.log('RefreshToken');
        try {
            const res = await api.get('/refresh');
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem('user', 'usuario cualquiera');
            setTime();
        } catch (error: any) {
            console.log(error);
            sessionStorage.removeItem('user');
        }
    };

    const resetStore = () => {
        token.value = null;
        expiresIn.value = 0;
    };

    const getAllUsers = async () => {
        try {
            const res = await api({
                url: '/',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token.value,
                },
            });

            allUsers.value = res.data.user;
        } catch (error: any) {
            if (error.response) {
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const getUser = async (id: any) => {
        try {
            const res = await api({
                url: '/' + id,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token.value,
                },
            });
            return res.data.name;
        } catch (error: any) {
            if (error.response) {
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    return {
        token,
        expiresIn,
        access,
        refreshToken,
        logout,
        register,
        getUser,
        getAllUsers,
        allUsers,
        self,
        selfUid,
    };
});
