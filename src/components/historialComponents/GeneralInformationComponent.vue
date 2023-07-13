<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const identification = ref('');
const address = ref('');
const birthDate = ref('');
const birthAddress = ref('');
const civilStatement = ref('');
const job = ref('');
const refferal = ref('');
const emergencyFamiliar = ref('');
const emergencyPhone = ref('');

//Handle submit
const handleSubmit = async () => {
    const allResponses = {
        identification: identification.value,
        address: address.value,
        birthDate: birthDate.value,
        birthAddress: birthAddress.value,
        civilStatement: civilStatement.value,
        job: job.value,
        refferal: refferal.value,
        emergencyFamiliar: emergencyFamiliar.value,
        emergencyPhone: emergencyPhone.value,
    };
    await testStore.createTestResults('Información General', allResponses);
    utilsStore.historyAdvance = 2;
    localStorage.setItem('historial', '2');
};
</script>

<template>
    <p>Pasos 1/13</p>
    <h2>Información General</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md">
        <q-input
            v-model="identification"
            label="Número de Identificación"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="address"
            label="Dirección Domicilio"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="birthDate"
            filled
            type="date"
            label="Fecha de nacimiento"
            class="q-my-md"
        />
        <q-input
            v-model="birthAddress"
            label="Lugar de Nacimiento"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="civilStatement"
            label="Estado Civil"
            type="text"
            class="q-my-md"
        />
        <q-input v-model="job" label="Ocupación" type="text" class="q-my-md" />
        <q-input
            v-model="refferal"
            label="¿Quién le sugirió consultar?"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="emergencyFamiliar"
            label="En caso de emergencia avisar a:"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="emergencyPhone"
            label="Númer de contacto"
            type="text"
            class="q-my-md"
        />
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
