//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

//Define Stores
export const useBestDadStore = defineStore('bestDad', () => {
    const userStore = useUserStore();

    //Use Pinia States
    const bestDad = ref('');

    //Logics
    const createBestDad = async (formData: any) => {
        try {
            const res = await api({
                url: '/best-dad',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });

            bestDad.value = res.data.arte;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        createBestDad,
    };
});
