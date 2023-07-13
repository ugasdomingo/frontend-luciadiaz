<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const basicFormation = ref(false);
const institution = ref('');
const programComplete = ref('');
const profesionalFormation = ref(false);
const university = ref('');
const titulation = ref('');
const academicPerformance = ref('');
const isStudent = ref(false);
const academicSatisfaction = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (basicFormation.value) {
        allResponses.basicFormation = {
            institution: institution.value,
            programComplete: programComplete.value,
        };
    } else {
        allResponses.basicFormation = 'Ninguna';
    }

    if (profesionalFormation.value) {
        allResponses.profesionalFormation = {
            university: university.value,
            titulation: titulation.value,
        };
    } else {
        allResponses.profesionalFormation = 'Ninguna';
    }

    if (isStudent.value) {
        allResponses.academicSatisfaction = academicSatisfaction.value;
    } else {
        allResponses.academicSatisfaction = 'No estudio actualmente';
    }

    allResponses.academicPerformance = academicPerformance.value;

    await testStore.createTestResults('Información Académica', allResponses);
    utilsStore.historyAdvance = 9;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '9');
};
</script>

<template>
    <p>Pasos 8/13</p>
    <h2>Información Académica</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-toggle v-model="basicFormation" label="¿Posee educación básica?" />
        <div v-if="basicFormation">
            <q-input
                v-model="institution"
                label="Institución"
                type="text"
                class="q-mb-md"
            />
            <q-input
                v-model="programComplete"
                label="¿Estudios completados?"
                hint="Si no logró completar sus estudios, indique el grado alcanzado"
                type="text"
                class="q-mb-md"
            />
        </div>
        <q-toggle
            v-model="profesionalFormation"
            label="¿Posee educación profesional?"
        />
        <div v-if="profesionalFormation">
            <q-input
                v-model="university"
                label="Universidad"
                type="text"
                class="q-mb-md"
            />
            <q-input
                v-model="titulation"
                label="¿Titulación completada?"
                hint="Si no logró completar sus estudios, indique el grado alcanzado"
                type="text"
                class="q-mb-md"
            />
        </div>
        <q-input
            v-model="academicPerformance"
            label="¿Cómo considera su desempeño académico?"
            hint="Del 1 al 10, siendo 1 el más bajo y 10 el más alto"
            type="text"
            class="q-mb-md"
        />
        <q-toggle v-model="isStudent" label="¿Es estudiante actualmente?" />
        <div v-if="isStudent">
            <q-input
                v-model="academicSatisfaction"
                label="¿Cómo se siente con su desempeño académico?"
                hint="Del 1 al 10, siendo 1 el más bajo y 10 el más alto"
                type="text"
                class="q-mb-md"
            />
        </div>
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
