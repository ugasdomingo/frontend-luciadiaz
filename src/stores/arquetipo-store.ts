//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const useArquetipoStore = defineStore('arquetipo', () => {
    const userStore = useUserStore();

    const arquetipo = ref('');
    const allArquetipos = ref('');
    const isArqueTypeTest = ref('');

    const getAllArquetipos = async (uid: any) => {
        try {
            const res = await api({
                url: '/archetype-test/archetype/' + uid,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            allArquetipos.value = res.data.archetypeTest.map((item: any) => {
                return {
                    date: new Date(item.date),
                    wise: item.wise,
                    warrior: item.warrior,
                    wizard: item.wizard,
                    lover: item.lover,
                    uid: item.uid,
                };
            });
            console.log('AllArquetipos done');
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createArquetipo = async (
        wise: number,
        warrior: number,
        wizard: number,
        lover: number
    ) => {
        try {
            const res = await api({
                url: '/archetype-test/archetype',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    wise,
                    warrior,
                    wizard,
                    lover,
                },
            });

            arquetipo.value = res.data.register;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const findArchetypeTest = async () => {
        await userStore.self();
        await getAllArquetipos(userStore.selfUid);
        console.log(userStore.selfUid);
        if (allArquetipos.value != '') {
            isArqueTypeTest.value = '1';
        } else {
            isArqueTypeTest.value = '2';
        }
    };

    return {
        createArquetipo,
        allArquetipos,
        getAllArquetipos,
        findArchetypeTest,
        isArqueTypeTest,
    };
});
