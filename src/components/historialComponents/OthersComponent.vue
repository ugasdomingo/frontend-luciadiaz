<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();
const router = useRouter();

//Get form data
const respectFromOthers = ref('');
const sadnessTime = ref('');
const sexualDifficulties = ref('');
const friendshipDifficulties = ref('');
const loveRelationshipDifficulties = ref('');
const intenceFear = ref('');
const hardHeadche = ref('');
const alcoholismDifficulties = ref('');
const drugAddictionDifficulties = ref('');
const espectationsFromTherapy = ref('');
const otherUtilInformation = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    allResponses.respectFromOthers = respectFromOthers.value;
    allResponses.sadnessTime = sadnessTime.value;
    allResponses.sexualDifficulties = sexualDifficulties.value;
    allResponses.friendshipDifficulties = friendshipDifficulties.value;
    allResponses.loveRelationshipDifficulties =
        loveRelationshipDifficulties.value;
    allResponses.intenceFear = intenceFear.value;
    allResponses.hardHeadche = hardHeadche.value;
    allResponses.alcoholismDifficulties = alcoholismDifficulties.value;
    allResponses.drugAddictionDifficulties = drugAddictionDifficulties.value;
    allResponses.espectationsFromTherapy = espectationsFromTherapy.value;
    allResponses.otherUtilInformation = otherUtilInformation.value;

    await testStore.createTestResults('Otras Áreas de Ajuste', allResponses);
    utilsStore.historyAdvance = 0;
    localStorage.removeItem('historial');
    router.push('/mi-escritorio');
};
</script>

<template>
    <p>Pasos 13/13</p>
    <h2>Otras Áreas de Ajuste</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-input
            v-model="respectFromOthers"
            label="¿Dificultades para hacerce respetar?"
            type="text"
            hint="Dificultad para valer sus derechos o para impedir que otros lo traten injustamente o se aprovechen de usted?"
            class="q-mb-md"
        />
        <q-input
            v-model="sadnessTime"
            label="¿Periodos de profunda tristeza o depresión?"
            type="text"
        />
        <q-input
            v-model="sexualDifficulties"
            label="¿Algún tipo de dificultad sexual?"
            type="text"
        />
        <q-input
            v-model="friendshipDifficulties"
            label="¿Dificultades para hacer o mantener amistades?"
            type="text"
        />
        <q-input
            v-model="loveRelationshipDifficulties"
            label="¿Dificultades para hacer o mantener relaciones afectivas?"
            type="text"
        />
        <q-input
            v-model="intenceFear"
            label="¿Miedo intenso o ataques de pánico?"
            type="text"
        />
        <q-input
            v-model="hardHeadche"
            label="¿Dolores de cabeza intensos o frecuentes?"
            type="text"
        />
        <q-input
            v-model="alcoholismDifficulties"
            label="¿Dificultades con el alcohol?"
            type="text"
        />
        <q-input
            v-model="drugAddictionDifficulties"
            label="¿Dificultades con las drogas o las ha usado?"
            type="text"
        />
        <q-input
            v-model="espectationsFromTherapy"
            label="¿Qué espera de la terapia?"
            type="textarea"
        />
        <q-input
            v-model="otherUtilInformation"
            label="¿Otra información que considere útil?"
            type="textarea"
        />
        <q-btn
            type="submit"
            label="Enviar"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
