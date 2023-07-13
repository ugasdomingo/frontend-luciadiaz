<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const isWorking = ref(false);
const job = ref('');
const enterprise = ref('');
const jobDescription = ref('');
const jobTime = ref('');
const previousJob = ref(false);
const previousJobDescription = ref('');
const previousJobReason = ref('');
const selfGrow = ref('');
const jobsPayment = ref('');
const jobsEnvironment = ref('');
const streesLevel = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (isWorking.value) {
        allResponses.isWorking = {
            job: job.value,
            enterprise: enterprise.value,
            jobDescription: jobDescription.value,
            jobTime: jobTime.value,
        };
    } else {
        allResponses.isWorking = 'No trabajo actualmente';
    }

    if (previousJob.value) {
        allResponses.previousJob = {
            previousJobDescription: previousJobDescription.value,
            previousJobReason: previousJobReason.value,
        };
    } else {
        allResponses.previousJob = 'No he tenido empleos anteriores';
    }

    allResponses.selfGrow = selfGrow.value;
    allResponses.jobsPayment = jobsPayment.value;
    allResponses.jobsEnvironment = jobsEnvironment.value;
    allResponses.streesLevel = streesLevel.value;

    await testStore.createTestResults('Información Laboral', allResponses);
    utilsStore.historyAdvance = 10;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '10');
};
</script>

<template>
    <p>Pasos 9/13</p>
    <h2>Información Laboral</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-toggle v-model="isWorking" label="¿Trabajas actualmente?" />
        <div v-if="isWorking" class="q-mb-md">
            <q-input v-model="job" label="Puesto de trabajo" type="text" />
            <q-input v-model="enterprise" label="Empresa" type="text" />
            <q-input
                v-model="jobDescription"
                label="Descripción del puesto"
                type="text"
            />
            <q-input v-model="jobTime" label="Horario laboral" type="text" />
            <q-toggle
                v-model="previousJob"
                label="¿Has tenido empleos anteriores?"
                class="q-my-md"
            />
            <div v-if="previousJob" class="q-mb-md">
                <q-input
                    v-model="previousJobDescription"
                    label="Descripción del puesto"
                    type="text"
                />
                <q-input
                    v-model="previousJobReason"
                    label="Razón de salida"
                    type="text"
                />
            </div>
            <p>
                Indique su nivel de satisfacción en las siguientes áreas de su
                trabajo
            </p>
            <q-input
                v-model="selfGrow"
                label="Desarrollo personal"
                type="text"
                hint="Del 1 al 10, siendo 1 el mínimo y 10 el máximo"
            />
            <q-input
                v-model="jobsPayment"
                label="Remuneración económica"
                type="text"
                hint="Del 1 al 10, siendo 1 el mínimo y 10 el máximo"
            />
            <q-input
                v-model="jobsEnvironment"
                label="Ambiente Laboral"
                type="text"
                hint="Del 1 al 10, siendo 1 el mínimo y 10 el máximo"
            />
            <q-input
                v-model="streesLevel"
                label="¿Cuál es su nivel de estrés?"
                type="text"
                hint="Del 1 al 10, siendo 1 el mínimo y 10 el máximo"
            />
        </div>
        <q-btn
            type="submit"
            label="Enviar"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
