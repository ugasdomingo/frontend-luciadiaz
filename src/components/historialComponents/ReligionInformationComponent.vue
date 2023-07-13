<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const religion = ref('');
const feith = ref('');
const religiousPractice = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    allResponses.religion = religion.value;
    allResponses.feith = feith.value;
    allResponses.religiousPractice = religiousPractice.value;

    await testStore.createTestResults('Información Religiosa', allResponses);
    utilsStore.historyAdvance = 7;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '7');
};
</script>

<template>
    <p>Pasos 6/13</p>
    <h2>Información Religiosa</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-input
            v-model="religion"
            label="Religión:"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="feith"
            hint="Del 1 al 10 ¿Qué tan creyente eres?"
            label="Fe:"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="religiousPractice"
            hint="Del 1 al 10 ¿Qué tan practicante eres?"
            label="Práctica religiosa:"
            type="text"
            class="q-my-md"
        />
        <q-btn
            type="submit"
            label="Enviar"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
