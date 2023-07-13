//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const useTestStore = defineStore('test', () => {
    const userStore = useUserStore();

    const createdTestResults = ref('');
    const allTestResults = ref();
    const userTestResults = ref();
    const userArchetype = ref('');
    const userTemper = ref('');

    //Funtions to set archetype title

    //Order User testResults
    const anamnesis = ref([]);
    const arquetipo = ref([]);
    const autoregistro = ref([]);
    const metas = ref([]);
    const temperamento = ref([]);
    const historial = ref([]);

    const createTestResults = async (testTitle: string, answers: object) => {
        try {
            const res = await api({
                url: '/test',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    testTitle,
                    answers,
                },
            });

            createdTestResults.value = res.data.testResults;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getAllTestResults = async () => {
        try {
            const res = await api({
                url: '/test/all',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            allTestResults.value = res.data.testsResults;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getAllUserTestResults = async (id: string) => {
        try {
            const res = await api({
                url: '/test/' + id,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            res.data.testsResults.map((item: any) => {
                if (item.testTitle == 'Anamnesis') {
                    anamnesis.value.push(item);
                } else if (item.testTitle == 'Arquetipo') {
                    arquetipo.value.push(item);
                    const bigNumber = Object.values(item.answers).sort()[3];
                    const { wise, warrior, wizard, lover } = item.answers;
                    warrior == bigNumber
                        ? (userArchetype.value = 'Guerrero')
                        : wise == bigNumber
                        ? (userArchetype.value = 'Sabio Rey')
                        : wizard == bigNumber
                        ? (userArchetype.value = 'Mago')
                        : lover == bigNumber
                        ? (userArchetype.value = 'Amante')
                        : (userArchetype.value = '');
                } else if (item.testTitle == 'Autoregistro') {
                    autoregistro.value.push(item);
                } else if (item.testTitle == 'Logro de Metas') {
                    metas.value.push(item);
                } else if (item.testTitle == 'Temperamento') {
                    temperamento.value.push(item);
                    const bigNumber = Object.values(item.answers).sort(
                        (a, b) => a - b
                    )[3];
                    const { sanguine, choleric, melancholic, phlegmatic } =
                        item.answers;
                    sanguine == bigNumber
                        ? (userTemper.value = 'Sanguineo')
                        : choleric == bigNumber
                        ? (userTemper.value = 'Colérico')
                        : melancholic == bigNumber
                        ? (userTemper.value = 'Melancólico')
                        : phlegmatic == bigNumber
                        ? (userTemper.value = 'Flemático')
                        : (userTemper.value = '');
                } else {
                    historial.value.push(item);
                }
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    //Utilitys
    const cleanData = () => {
        anamnesis.value = [];
        temperamento.value = [];
        metas.value = [];
        autoregistro.value = [];
        arquetipo.value = [];
        historial.value = [];
        userArchetype.value = '';
        userTemper.value = '';
    };

    return {
        createdTestResults,
        createTestResults,
        getAllTestResults,
        allTestResults,
        getAllUserTestResults,
        userTestResults,
        anamnesis,
        arquetipo,
        autoregistro,
        metas,
        temperamento,
        historial,
        userArchetype,
        userTemper,
        cleanData,
    };
});
