<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
//Actual hobbies
const actualHobbies = ref(1);
const actualHobbies1 = ref('');
const actualHobbies2 = ref('');
const actualHobbies3 = ref('');
const actualHobbiesFrec1 = ref('');
const actualHobbiesFrec2 = ref('');
const actualHobbiesFrec3 = ref('');
const actualHobbiesSatis1 = ref('');
const actualHobbiesSatis2 = ref('');
const actualHobbiesSatis3 = ref('');
//Previous hobbies
const previousHobbies = ref(1);
const previousHobbies1 = ref('');
const previousHobbies2 = ref('');
const previousHobbies3 = ref('');
const previousHobbiesFrec1 = ref('');
const previousHobbiesFrec2 = ref('');
const previousHobbiesFrec3 = ref('');
const previousHobbiesSatis1 = ref('');
const previousHobbiesSatis2 = ref('');
const previousHobbiesSatis3 = ref('');
//Wanted hobbies
const wantedHobbies = ref(1);
const wantedHobbies1 = ref('');
const wantedHobbies2 = ref('');
const wantedHobbies3 = ref('');
const wantedHobbiesFrec1 = ref('');
const wantedHobbiesFrec2 = ref('');
const wantedHobbiesFrec3 = ref('');
const wantedHobbiesSatis1 = ref('');
const wantedHobbiesSatis2 = ref('');
const wantedHobbiesSatis3 = ref('');

const actualSatisfaction = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (actualHobbies.value == 1) {
        allResponses.actualHobbies = {
            actualHobbies1: actualHobbies1.value,
            actualHobbiesFrec1: actualHobbiesFrec1.value,
            actualHobbiesSatis1: actualHobbiesSatis1.value,
        };
    }

    if (actualHobbies.value == 2) {
        allResponses.actualHobbies = {
            actualHobbies1: actualHobbies1.value,
            actualHobbiesFrec1: actualHobbiesFrec1.value,
            actualHobbiesSatis1: actualHobbiesSatis1.value,
            actualHobbies2: actualHobbies2.value,
            actualHobbiesFrec2: actualHobbiesFrec2.value,
            actualHobbiesSatis2: actualHobbiesSatis2.value,
        };
    }

    if (actualHobbies.value == 3) {
        allResponses.actualHobbies = {
            actualHobbies1: actualHobbies1.value,
            actualHobbiesFrec1: actualHobbiesFrec1.value,
            actualHobbiesSatis1: actualHobbiesSatis1.value,
            actualHobbies2: actualHobbies2.value,
            actualHobbiesFrec2: actualHobbiesFrec2.value,
            actualHobbiesSatis2: actualHobbiesSatis2.value,
            actualHobbies3: actualHobbies3.value,
            actualHobbiesFrec3: actualHobbiesFrec3.value,
            actualHobbiesSatis3: actualHobbiesSatis3.value,
        };
    }

    if (previousHobbies.value == 1) {
        allResponses.previousHobbies = {
            previousHobbies1: previousHobbies1.value,
            previousHobbiesFrec1: previousHobbiesFrec1.value,
            previousHobbiesSatis1: previousHobbiesSatis1.value,
        };
    }

    if (previousHobbies.value == 2) {
        allResponses.previousHobbies = {
            previousHobbies1: previousHobbies1.value,
            previousHobbiesFrec1: previousHobbiesFrec1.value,
            previousHobbiesSatis1: previousHobbiesSatis1.value,
            previousHobbies2: previousHobbies2.value,
            previousHobbiesFrec2: previousHobbiesFrec2.value,
            previousHobbiesSatis2: previousHobbiesSatis2.value,
        };
    }

    if (previousHobbies.value == 3) {
        allResponses.previousHobbies = {
            previousHobbies1: previousHobbies1.value,
            previousHobbiesFrec1: previousHobbiesFrec1.value,
            previousHobbiesSatis1: previousHobbiesSatis1.value,
            previousHobbies2: previousHobbies2.value,
            previousHobbiesFrec2: previousHobbiesFrec2.value,
            previousHobbiesSatis2: previousHobbiesSatis2.value,
            previousHobbies3: previousHobbies3.value,
            previousHobbiesFrec3: previousHobbiesFrec3.value,
            previousHobbiesSatis3: previousHobbiesSatis3.value,
        };
    }

    if (wantedHobbies.value == 1) {
        allResponses.wantedHobbies = {
            wantedHobbies1: wantedHobbies1.value,
            wantedHobbiesFrec1: wantedHobbiesFrec1.value,
            wantedHobbiesSatis1: wantedHobbiesSatis1.value,
        };
    }

    if (wantedHobbies.value == 2) {
        allResponses.wantedHobbies = {
            wantedHobbies1: wantedHobbies1.value,
            wantedHobbiesFrec1: wantedHobbiesFrec1.value,
            wantedHobbiesSatis1: wantedHobbiesSatis1.value,
            wantedHobbies2: wantedHobbies2.value,
            wantedHobbiesFrec2: wantedHobbiesFrec2.value,
            wantedHobbiesSatis2: wantedHobbiesSatis2.value,
        };
    }

    if (wantedHobbies.value == 3) {
        allResponses.wantedHobbies = {
            wantedHobbies1: wantedHobbies1.value,
            wantedHobbiesFrec1: wantedHobbiesFrec1.value,
            wantedHobbiesSatis1: wantedHobbiesSatis1.value,
            wantedHobbies2: wantedHobbies2.value,
            wantedHobbiesFrec2: wantedHobbiesFrec2.value,
            wantedHobbiesSatis2: wantedHobbiesSatis2.value,
            wantedHobbies3: wantedHobbies3.value,
            wantedHobbiesFrec3: wantedHobbiesFrec3.value,
            wantedHobbiesSatis3: wantedHobbiesSatis3.value,
        };
    }

    await testStore.createTestResults(
        'Afficiones, Intereses y Recreación',
        allResponses
    );
    utilsStore.historyAdvance = 11;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '11');
};
</script>

<template>
    <p>Pasos 10/13</p>
    <h2>Aficiones,Intereses y Recreación</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <p>
            Escriba sus hobbies y activades que le gusta hacer en su tiempo
            libre. (Lestura, Música, Arte, Deporte, otros)
        </p>
        <q-input v-model="actualHobbies1" label="Hobbie" type="text" />
        <q-input
            v-model="actualHobbiesFrec1"
            label="Frecuencia"
            type="text"
            hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
        />
        <q-input
            v-model="actualHobbiesSatis1"
            label="Satisfacción"
            type="text"
            hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
        />
        <div v-if="actualHobbies >= 2" class="q-my-md">
            <q-input v-model="actualHobbies2" label="Hobbie 2" type="text" />
            <q-input
                v-model="actualHobbiesFrec2"
                label="Frecuencia"
                type="text"
                hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
            />
            <q-input
                v-model="actualHobbiesSatis2"
                label="Satisfacción"
                type="text"
                hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
            />
        </div>
        <div v-if="actualHobbies >= 3" class="q-my-md">
            <q-input v-model="actualHobbies3" label="Hobbie 3" type="text" />
            <q-input
                v-model="actualHobbiesFrec3"
                label="Frecuencia"
                type="text"
                hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
            />
            <q-input
                v-model="actualHobbiesSatis3"
                label="Satisfacción"
                type="text"
                hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
            />
        </div>
        <q-btn
            label="Agregar Hobbie"
            @click="actualHobbies++"
            class="bg-secondary text-white q-my-md"
        />
        <p class="q-my-md">
            Escriba los hobbies y actividades que tenía en el pasado y
            actualmente ya no tiene
        </p>
        <q-input v-model="previousHobbies1" label="Hobbie" type="text" />
        <q-input
            v-model="previousHobbiesFrec1"
            label="Frecuencia"
            type="text"
            hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
        />
        <q-input
            v-model="previousHobbiesSatis1"
            label="Satisfacción"
            type="text"
            hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
        />
        <div v-if="previousHobbies >= 2" class="q-my-md">
            <q-input v-model="previousHobbies2" label="Hobbie 2" type="text" />
            <q-input
                v-model="previousHobbiesFrec2"
                label="Frecuencia"
                type="text"
                hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
            />
            <q-input
                v-model="previousHobbiesSatis2"
                label="Satisfacción"
                type="text"
                hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
            />
        </div>
        <div v-if="previousHobbies >= 3" class="q-my-md">
            <q-input v-model="previousHobbies3" label="Hobbie 3" type="text" />
            <q-input
                v-model="previousHobbiesFrec3"
                label="Frecuencia"
                type="text"
                hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
            />
            <q-input
                v-model="previousHobbiesSatis3"
                label="Satisfacción"
                type="text"
                hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
            />
        </div>
        <q-btn
            label="Agregar Hobbie"
            @click="previousHobbies++"
            class="bg-secondary text-white q-my-md"
        />
        <p class="q-my-md">
            Escriba los hobbies y actividades que le gustaría tener en el futuro
            y que no realiza actualmente
        </p>
        <q-input v-model="wantedHobbies1" label="Hobbie" type="text" />
        <q-input
            v-model="wantedHobbiesFrec1"
            label="Frecuencia"
            type="text"
            hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
        />
        <q-input
            v-model="wantedHobbiesSatis1"
            label="Satisfacción"
            type="text"
            hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
        />
        <div v-if="wantedHobbies >= 2" class="q-my-md">
            <q-input v-model="wantedHobbies2" label="Hobbie 2" type="text" />
            <q-input
                v-model="wantedHobbiesFrec2"
                label="Frecuencia"
                type="text"
                hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
            />
            <q-input
                v-model="wantedHobbiesSatis2"
                label="Satisfacción"
                type="text"
                hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
            />
        </div>
        <div v-if="wantedHobbies >= 3" class="q-my-md">
            <q-input v-model="wantedHobbies3" label="Hobbie 3" type="text" />
            <q-input
                v-model="wantedHobbiesFrec3"
                label="Frecuencia"
                type="text"
                hint="Del 1 al 5, siendo 1 Diariamente y 5 Mensualmente o menos"
            />
            <q-input
                v-model="wantedHobbiesSatis3"
                label="Satisfacción"
                type="text"
                hint="Del 1 al 5, siendo 1 Muy Satisfecho y 5 Nada Satisfecho"
            />
        </div>
        <q-btn
            label="Agregar Hobbie"
            @click="wantedHobbies++"
            class="bg-secondary text-white q-my-md"
        />
        <q-input
            v-model="actualSatisfaction"
            label="Satisfacción con sus hobbies y actividades"
            type="text"
            hint="Del 1 al 10, siendo 1 Muy Satisfecho y 10 Nada Satisfecho"
        />
        <q-btn
            label="Enviar"
            class="bg-primary text-white q-my-md"
            type="submit"
        />
    </q-form>
</template>
