//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const useSixReasonsStore = defineStore('sixReasons', () => {
    const userStore = useUserStore();

    const sixReasons = ref('');
    const oneSixReasonsTest = ref();
    const isSixReasonsTest = ref('');

    const getOneSixReasonsTest = async (uid: any) => {
        try {
            const res = await api({
                url: '/six-reasons-test/sixReasons/' + uid,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            oneSixReasonsTest.value = res.data.sixReasonsTest.map(
                (item: any) => {
                    return {
                        date: new Date(item.date),
                        username: item.username,
                        objetive: item.objetive,
                        reason1: item.reasons[0],
                        reason2: item.reasons[1],
                        reason3: item.reasons[2],
                        reason4: item.reasons[3],
                        reason5: item.reasons[4],
                        reason6: item.reasons[5],
                        uid: item.uid,
                    };
                }
            );
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createSixReasons = async (
        reasons: string[],
        objetive: string,
        username: string
    ) => {
        try {
            const res = await api({
                url: '/six-reasons-test/sixReasons/',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    objetive,
                    reasons,
                    username,
                },
            });

            sixReasons.value = res.data.register;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const findSxReasonsTest = async () => {
        await userStore.self();
        await getOneSixReasonsTest(userStore.selfUid);
        if (oneSixReasonsTest.value != '') {
            isSixReasonsTest.value = '1';
        } else {
            isSixReasonsTest.value = '2';
        }
    };

    return {
        getOneSixReasonsTest,
        createSixReasons,
        findSxReasonsTest,
        oneSixReasonsTest,
        isSixReasonsTest,
        sixReasons,
    };
});
