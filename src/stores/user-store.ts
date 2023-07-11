//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const token = ref(null);
    const expiresIn = ref(0);
    const allUsers = ref();
    const selfUid = ref('');
    const userRole = ref('');
    const userName = ref('');

    //Global cath auth form
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const password = ref('');
    const politiquesAccepted = ref(false);

    const access = async (email: string, password: string) => {
        try {
            const res = await api.post('/login', {
                email: email,
                password: password,
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            userRole.value = res.data.userRole;
            userName.value = res.data.userName;
            localStorage.setItem('user', res.data.userRole);
            localStorage.setItem('userT', res.data.refreshToken);
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

    const register = async (
        name: string,
        email: string,
        password: string,
        phone: string,
        politiquesAccepted: boolean
    ) => {
        try {
            const res = await api.post('/register', {
                name,
                email,
                phone,
                password,
                politiquesAccepted,
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            userRole.value = res.data.userRole;
            userName.value = res.data.userName;
            localStorage.setItem('user', res.data.userRole);
            localStorage.setItem('userT', res.data.refreshToken);
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
            cleanStoreData();
        } catch (error: any) {
            console.log(error);
        } finally {
            resetStore();
            localStorage.removeItem('user');
            localStorage.removeItem('cookies');
            localStorage.removeItem('userT');
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
        const refreshToken = localStorage.getItem('userT');

        try {
            const res = await api.get('/refresh', {
                headers: { Authorization: `Bearer ${refreshToken}` },
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            userRole.value = res.data.userRole;
            userName.value = res.data.userName;
            localStorage.setItem('userT', res.data.refreshToken);
            setTime();
        } catch (error: any) {
            console.log(error);
            localStorage.removeItem('userT');
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

    const getUserByEmail = async (email: string) => {
        try {
            const res = await api({
                url: '/user/' + email,
                method: 'GET',
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
    const cleanStoreData = () => {
        allUsers.value = null;
        selfUid.value = '';
        userRole.value = '';
        userName.value = '';
    };

    return {
        token,
        expiresIn,
        access,
        refreshToken,
        logout,
        register,
        getUser,
        getUserByEmail,
        getAllUsers,
        allUsers,
        self,
        selfUid,
        name,
        email,
        phone,
        password,
        politiquesAccepted,
        userRole,
        userName,
    };
});
