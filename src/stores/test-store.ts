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

            userTestResults.value = res.data.testsResults;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        createdTestResults,
        createTestResults,
        getAllTestResults,
        allTestResults,
        getAllUserTestResults,
        userTestResults,
    };
});
