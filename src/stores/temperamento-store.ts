//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const useTemperamentoStore = defineStore('temperamento', () => {
    const userStore = useUserStore();

    const temperamento = ref('');
    const allTemperamentos = ref('');
    const isTemperamentoTest = ref('');

    const getAllTemperamentos = async (uid: any) => {
        try {
            const res = await api({
                url: '/temper-test/temper/' + uid,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            allTemperamentos.value = res.data.temperTest.map((item: any) => {
                return {
                    date: new Date(item.date),
                    sanguine: item.sanguine,
                    choleric: item.choleric,
                    phlegmatic: item.phlegmatic,
                    melancholic: item.melancholic,
                    uid: item.uid,
                };
            });
            console.log('AllTemperamentos done');
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createTemperamento = async (
        sanguine: number,
        choleric: number,
        phlegmatic: number,
        melancholic: number
    ) => {
        try {
            const res = await api({
                url: '/temper-test/temper',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    sanguine,
                    choleric,
                    phlegmatic,
                    melancholic,
                },
            });

            temperamento.value = res.data.register;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const findTemperamentoTest = async () => {
        await userStore.self();
        await getAllTemperamentos(userStore.selfUid);
        console.log(userStore.selfUid);
        if (allTemperamentos.value != '') {
            isTemperamentoTest.value = '1';
        } else {
            isTemperamentoTest.value = '2';
        }
    };

    return {
        createTemperamento,
        allTemperamentos,
        getAllTemperamentos,
        findTemperamentoTest,
        isTemperamentoTest,
    };
});
