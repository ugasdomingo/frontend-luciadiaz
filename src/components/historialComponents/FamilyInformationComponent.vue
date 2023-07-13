<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const family = ref(1);
const familyMentalHealth = ref('');
const familyType = ref('');
const familyName1 = ref('');
const familyName2 = ref('');
const familyName3 = ref('');
const familyName4 = ref('');
const familyAge1 = ref('');
const familyAge2 = ref('');
const familyAge3 = ref('');
const familyAge4 = ref('');
const familySatisfaction1 = ref('');
const familySatisfaction2 = ref('');
const familySatisfaction3 = ref('');
const familySatisfaction4 = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (family.value >= 1) {
        allResponses.familyName1 = familyName1.value;
        allResponses.familyAge1 = familyAge1.value;
        allResponses.familySatisfaction1 = familySatisfaction1.value;
    }
    if (family.value >= 2) {
        allResponses.familyName2 = familyName2.value;
        allResponses.familyAge2 = familyAge2.value;
        allResponses.familySatisfaction2 = familySatisfaction2.value;
    }
    if (family.value >= 3) {
        allResponses.familyName3 = familyName3.value;
        allResponses.familyAge3 = familyAge3.value;
        allResponses.familySatisfaction3 = familySatisfaction3.value;
    }
    if (family.value >= 4) {
        allResponses.familyName4 = familyName4.value;
        allResponses.familyAge4 = familyAge4.value;
        allResponses.familySatisfaction4 = familySatisfaction4.value;
    }

    allResponses.familyMentalHealth = familyMentalHealth.value;
    allResponses.familyType = familyType.value;

    await testStore.createTestResults('Información familiar', allResponses);
    utilsStore.historyAdvance = 6;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '6');
};
</script>

<template>
    <p>Pasos 5/13</p>
    <h2>Información familiar</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-input
            v-model="familyMentalHealth"
            label="Antecedentes Familiares"
            hint="¿Existen o han existido problemas mentales o emocionales en su familia?, por favor descríbalos"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="familyType"
            label="Relación familiar"
            hint="¿Cómo describiría el tipo de relaciones que predominan en su familia? (es una familia muy unida, es una familia muy distante, es una familia muy conflictiva, etc.)"
            type="text"
            class="q-my-md"
        />
        <p class="q-mt-xl">Escriba su realción con sus padres y hermanos</p>
        <div>
            <q-input
                v-model="familyName1"
                label="Nombre del familiar"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="familyAge1"
                label="Edad del familiar"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="familySatisfaction1"
                label="Nivel de satisfacción con el familiar"
                type="text"
                class="q-my-md"
                hint="Satisfacción de la relación con cada uno de ellos = 1: Insatisfecho - 10: Completamente satisfecho"
            />
        </div>
        <div v-if="family >= 2">
            <q-input
                v-model="familyName2"
                label="Nombre del familiar"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="familyAge2"
                label="Edad del familiar"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="familySatisfaction2"
                label="Nivel de satisfacción con el familiar"
                type="text"
                class="q-my-md"
                hint="Satisfacción de la relación con cada uno de ellos = 1: Insatisfecho - 10: Completamente satisfecho"
            />
        </div>
        <div v-if="family >= 3">
            <q-input
                v-model="familyName3"
                label="Nombre del familiar"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="familyAge3"
                label="Edad del familiar"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="familySatisfaction3"
                label="Nivel de satisfacción con el familiar"
                type="text"
                class="q-my-md"
                hint="Satisfacción de la relación con cada uno de ellos = 1: Insatisfecho - 10: Completamente satisfecho"
            />
        </div>
        <div v-if="family >= 4">
            <q-input
                v-model="familyName4"
                label="Nombre del familiar"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="familyAge4"
                label="Edad del familiar"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="familySatisfaction4"
                label="Nivel de satisfacción con el familiar"
                type="text"
                class="q-my-md"
                hint="Satisfacción de la relación con cada uno de ellos = 1: Insatisfecho - 10: Completamente satisfecho"
            />
        </div>
        <q-btn
            label="Agregar un familiar"
            @click="family++"
            v-if="family < 4"
            class="bg-secondary text-white q-my-md"
        />
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
