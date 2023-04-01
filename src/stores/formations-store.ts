//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

//Define Stores
export const useFormationsStore = defineStore('Formations', () => {
    const userStore = useUserStore();

    //Serve Formations data
    const allFormations = ref('');
    const oneFormation = ref('');

    //Logics
    const createFormation = async (formData: any) => {
        try {
            const res = await api({
                url: '/formations',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });

            oneFormation.value = res.data.arte;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getAllFormations = async () => {
        try {
            const res = await api({
                url: '/formations',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            allFormations.value = res.data.Formations;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getFormationByID = async (id: string) => {
        try {
            const res = await api({
                url: '/formations/' + id,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            oneFormation.value = res.data.Formation;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allFormations,
        oneFormation,
        createFormation,
        getAllFormations,
        getFormationByID,
    };
});
