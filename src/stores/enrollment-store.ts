//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const useEnrollmentStore = defineStore('arquetipo', () => {
    const userStore = useUserStore();

    const enrollements = ref('');
    const allEnrollments = ref('');
    const showReport = ref(false);
    const anamnesis = ref('');

    const getAllEnrollments = async () => {
        try {
            const res = await api({
                url: '/enrollment',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            allEnrollments.value = res.data.enrollments.map((item: any) => {
                return {
                    date: new Date(item.date),
                    formationID: item.formationID,
                    payed: item.payment,
                    numberProof: item.numberProof,
                    paymentMethod: item.paymentMethod,
                    uid: item.uid,
                };
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createEnrollments = async (
        formationID: string,
        paymentMethod: string,
        numberProof: string
    ) => {
        try {
            const res = await api({
                url: '/enrollment',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    formationID,
                    paymentMethod,
                    numberProof,
                },
            });

            enrollements.value = res.data.register;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createAnamnesis = async (respuestas: string[]) => {
        try {
            const res = await api({
                url: '/anamnesis',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: { respuestas },
            });

            anamnesis.value = res.data.response;
            console.log('Anamnesis created');
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        enrollements,
        allEnrollments,
        showReport,
        getAllEnrollments,
        createEnrollments,
        createAnamnesis,
    };
});
