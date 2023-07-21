<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const enfermedad = ref(false);
const enfermedad1 = ref('');
const fechaEnf1 = ref('');

const medicamento = ref(false);
const medicamento1 = ref('');
const dosis1 = ref('');
const tiempoMed1 = ref('');

const tratamiento = ref(false);
const tratamiento1 = ref('');
const motivo1 = ref('');
const tiempoTrat1 = ref('');
const fechaTrat1 = ref('');

//HandleSubmit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (enfermedad.value) {
        allResponses.enfermedad1 = enfermedad1.value;
        allResponses.fechaEnf1 = fechaEnf1.value;
    } else {
        allResponses.enfermedad = 'Ninguna';
    }

    if (medicamento.value) {
        allResponses.medicamento1 = medicamento1.value;
        allResponses.dosis1 = dosis1.value;
        allResponses.tiempoMed1 = tiempoMed1.value;
    } else {
        allResponses.medicamento = 'Ninguno';
    }

    if (tratamiento.value) {
        allResponses.tratamiento1 = tratamiento1.value;
        allResponses.motivo1 = motivo1.value;
        allResponses.tiempoTrat1 = tiempoTrat1.value;
        allResponses.fechaTrat1 = fechaTrat1.value;
    } else {
        allResponses.tratamiento = 'Ninguno';
    }

    await testStore.createTestResults('Antecedentes Médicos', allResponses);
    utilsStore.historyAdvance = 3;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '3');
};
</script>

<template>
    <p>Pasos 2/13</p>
    <h2>Antecedentes Médicos</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md">
        <p>Deje sin marcar si la respuesta es "NO"</p>
        <!-- ENFEREMEDAD SECTION -->
        <q-toggle
            v-model="enfermedad"
            label="¿Sufre o ha sufrido alguna enfermedad?"
        />
        <div v-if="enfermedad">
            <q-input
                v-model="enfermedad1"
                label="Enfermedad:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="fechaEnf1"
                filled
                type="date"
                label="Fecha de padecimiento"
                class="q-my-md"
            />
        </div>

        <!-- MEDICAMENTO SECTION -->
        <q-toggle
            v-model="medicamento"
            label="¿Recibe tratamiento con medicamentos?"
        />
        <div v-if="medicamento">
            <q-input
                v-model="medicamento1"
                label="Medicamento:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="dosis1"
                label="Dosis:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="tiempoMed1"
                label="Tiempo de uso:"
                type="text"
                class="q-my-md"
            />
        </div>

        <!-- TRATAMIENTO SECTION -->
        <q-toggle
            v-model="tratamiento"
            label="¿Ha recibido tratamiento psicológico o psiquiátrico anteriormente?"
        />
        <div v-if="tratamiento">
            <q-input
                v-model="tratamiento1"
                label="Tratamiento:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="motivo1"
                label="Motivo:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="tiempoTrat1"
                label="Tiempo de tratamiento:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="fechaTrat1"
                filled
                type="date"
                label="Fecha"
                class="q-my-md"
            />
        </div>
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
