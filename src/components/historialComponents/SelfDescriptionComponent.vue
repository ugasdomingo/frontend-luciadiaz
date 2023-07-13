<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const phisicalDescription = ref('');
const thingsLikeToDo = ref('');
const thingsGetNervous = ref('');
const reactionsWhenAngry = ref('');
const reactionsWhenNervous = ref('');
const reactionsWhenSad = ref('');
const personalQualities = ref('');
const personalLimits = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    allResponses.phisicalDescription = phisicalDescription.value;
    allResponses.thingsLikeToDo = thingsLikeToDo.value;
    allResponses.thingsGetNervous = thingsGetNervous.value;
    allResponses.reactionsWhenAngry = reactionsWhenAngry.value;
    allResponses.reactionsWhenNervous = reactionsWhenNervous.value;
    allResponses.reactionsWhenSad = reactionsWhenSad.value;
    allResponses.personalQualities = personalQualities.value;
    allResponses.personalLimits = personalLimits.value;

    await testStore.createTestResults('Autodescripción', allResponses);
    utilsStore.historyAdvance = 12;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '12');
};
</script>

<template>
    <p>Pasos 11/13</p>
    <h2>Autodescrpción</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-input
            v-model="phisicalDescription"
            label="Descripción física"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="thingsLikeToDo"
            label="Cosas que me gustan hacer"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="thingsGetNervous"
            label="Cosas que me ponen nervioso"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="reactionsWhenAngry"
            label="Reacciones cuando estoy enojado"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="reactionsWhenNervous"
            label="Reacciones cuando estoy nervioso"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="reactionsWhenSad"
            label="Reacciones cuando estoy triste"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="personalQualities"
            label="Cualidades personales"
            type="textarea"
            class="q-mb-md"
        />
        <q-input
            v-model="personalLimits"
            label="Límites personales"
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
