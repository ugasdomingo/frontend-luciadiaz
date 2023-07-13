<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const marriage = ref(false);
const coupleName = ref('');
const coupleAge = ref('');
const coupleJob = ref('');
const coupleFormation = ref('');
const marriageTime = ref('');
const fianceeTime = ref('');
const meetTime = ref('');
const exMarriage = ref('');
const exMarriageChildrens = ref('');
const coupleExMarriage = ref('');
const coupleExMarriageChildrens = ref('');
const satisfactionLevel = ref('');

//Data of Last Question
const coupleComunication = ref('');
const coupleRoles = ref('');
const coupleAtention = ref('');
const coupleSex = ref('');
const coupleSocial = ref('');
const coupleTime = ref('');
const coupleFinance = ref('');
const coupleChildren = ref('');
const coupleFamily = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (marriage.value) {
        allResponses.coupleName = coupleName.value;
        allResponses.coupleAge = coupleAge.value;
        allResponses.coupleJob = coupleJob.value;
        allResponses.coupleFormation = coupleFormation.value;
        allResponses.marriageTime = marriageTime.value;
        allResponses.fianceeTime = fianceeTime.value;
        allResponses.meetTime = meetTime.value;
        allResponses.exMarriage = exMarriage.value;
        allResponses.exMarriageChildrens = exMarriageChildrens.value;
        allResponses.coupleExMarriage = coupleExMarriage.value;
        allResponses.coupleExMarriageChildrens =
            coupleExMarriageChildrens.value;
        allResponses.satisfactionLevel = satisfactionLevel.value;
        allResponses.coupleComunication = coupleComunication.value;
        allResponses.coupleRoles = coupleRoles.value;
        allResponses.coupleAtention = coupleAtention.value;
        allResponses.coupleSex = coupleSex.value;
        allResponses.coupleSocial = coupleSocial.value;
        allResponses.coupleTime = coupleTime.value;
        allResponses.coupleFinance = coupleFinance.value;
        allResponses.coupleChildren = coupleChildren.value;
        allResponses.coupleFamily = coupleFamily.value;
    } else {
        allResponses.matrimonio = 'No vive en pareja';
    }

    await testStore.createTestResults('Información Matrimonial', allResponses);
    utilsStore.historyAdvance = 4;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '4');
};

const options = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
];
</script>

<template>
    <p>Pasos 3/13</p>
    <h2>Información Matrimonial</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md">
        <q-toggle
            v-model="marriage"
            label="¿está casado[a] o convive permanentemente con alguien en	una	relación estable de pareja?"
        />
        <div v-if="marriage">
            <q-input
                v-model="coupleName"
                label="Nombre de tu pareja:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="coupleAge"
                label="Edad:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="coupleJob"
                label="Ocupación:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="coupleFormation"
                label="Nivel Académico:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="marriageTime"
                label="Tiempo de Matrimonio:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="fianceeTime"
                label="Tiempo de Noviazgo:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="meetTime"
                label="Tiempo de Conocerse:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="exMarriage"
                label="Matrimonios anteriores suyos:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="exMarriageChildrens"
                label="Hijos suyos de matrimonios anteriores:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="coupleExMarriage"
                label="Matrimonios anteriores de su pareja:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="coupleExMarriageChildrens"
                label="Hijos de su pareja en matrimonios anteriores:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="satisfactionLevel"
                label="En escala del 1 al 10 ¿cuál es su nivel general de satisfacción en el matrimonio actualmente?"
                type="text"
                class="q-my-md"
                hint="1: Insatisfecho - 10: Completamente satisfecho"
            />
            <p class="text-info">
                En escala del 1 al 10 seleccione cuál es su grado de
                satisfacción en las siguientes áreas específcas del matrimonio
            </p>
            <div class="q-pa-sm rounded-borders text-info">
                Comunicación con su pareja
                <q-option-group
                    name="couple_comunication"
                    v-model="coupleComunication"
                    :options="options"
                    color="info"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Roles y responsabilidades en el hogar
                <q-option-group
                    name="couple_roles"
                    v-model="coupleRoles"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Manifestaciones afectivas de su pareja
                <q-option-group
                    name="couple_atention"
                    v-model="coupleAtention"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Relaciones sexuales
                <q-option-group
                    name="couple_sex"
                    v-model="coupleSex"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Actividades sociales compartidas
                <q-option-group
                    name="couple_social"
                    v-model="coupleSocial"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Recreación y tiempo libre
                <q-option-group
                    name="couple_time"
                    v-model="coupleTime"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Manejo de finanzas
                <q-option-group
                    name="couple_finance"
                    v-model="coupleFinance"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Métodos de crianza de los hijos
                <q-option-group
                    name="couple_children"
                    v-model="coupleChildren"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
            <div class="q-pa-sm rounded-borders text-info">
                Relaciones con familia política
                <q-option-group
                    name="couple_family"
                    v-model="coupleFamily"
                    :options="options"
                    color="primary"
                    inline
                />
            </div>
        </div>
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
