<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const consultMotivation = ref('');
const consultProblemsTime = ref('');
const consultProblemsOrigin = ref('');
const consultProblemsBetter = ref('');
const consultProblemsWorse = ref('');
const consultProblemsHelpAsked = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    allResponses.consultMotivation = consultMotivation.value;
    allResponses.consultProblemsTime = consultProblemsTime.value;
    allResponses.consultProblemsOrigin = consultProblemsOrigin.value;
    allResponses.consultProblemsBetter = consultProblemsBetter.value;
    allResponses.consultProblemsWorse = consultProblemsWorse.value;
    allResponses.consultProblemsHelpAsked = consultProblemsHelpAsked.value;

    await testStore.createTestResults('Motivo de Consulta', allResponses);
    utilsStore.historyAdvance = 13;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '13');
};
</script>

<template>
    <p>Pasos 12/13</p>
    <h2>Motivo de Consulta</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-input
            v-model="consultMotivation"
            label="Motivación de consulta"
            hint="Razones, problemas o quejas que motivan la consulta"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="consultProblemsTime"
            label="¿Desde cuándo los padece?"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="consultProblemsOrigin"
            label="¿Cuál cree que es el origen de sus problemas?"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="consultProblemsBetter"
            label="Qué o quién hace que los problemas mejoren"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="consultProblemsWorse"
            label="Qué o quién hace que los problemas empeoren"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="consultProblemsHelpAsked"
            label="A quién has solicitado ayuda ¿Ha resultado?"
            type="textarea"
            class="q-mb-md"
        />
        <q-btn
            type="submit"
            label="Enviar"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
