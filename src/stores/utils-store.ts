import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useUtilsStore = defineStore('util', () => {
    const historyAdvance = ref(1);

    const getHistoryComplete = () => {
        const historial = localStorage.getItem('historial') || '1';

        historyAdvance.value = parseInt(historial);
    };
    return { historyAdvance, getHistoryComplete };
});
