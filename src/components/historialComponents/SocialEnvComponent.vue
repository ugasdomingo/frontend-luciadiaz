<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const socialFrecuency = ref('');
const socialSatisfaction = ref('');
//Persons who you live with
const livingMembers = ref(1);
const livingMemberName1 = ref('');
const livingMemberName2 = ref('');
const livingMemberName3 = ref('');
const livingMemberName4 = ref('');
const livingMemberAge1 = ref('');
const livingMemberAge2 = ref('');
const livingMemberAge3 = ref('');
const livingMemberAge4 = ref('');
const livingMemberRelationship1 = ref('');
const livingMemberRelationship2 = ref('');
const livingMemberRelationship3 = ref('');
const livingMemberRelationship4 = ref('');
//Most important person in your life
const importantPerson = ref(1);
const importantPersonName1 = ref('');
const importantPersonName2 = ref('');
const importantPersonName3 = ref('');
const importantPersonName4 = ref('');
const importantPersonAge1 = ref('');
const importantPersonAge2 = ref('');
const importantPersonAge3 = ref('');
const importantPersonAge4 = ref('');
const importantPersonRelationship1 = ref('');
const importantPersonRelationship2 = ref('');
const importantPersonRelationship3 = ref('');
const importantPersonRelationship4 = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (livingMembers.value >= 1) {
        allResponses.livingMemberName1 = livingMemberName1.value;
        allResponses.livingMemberAge1 = livingMemberAge1.value;
        allResponses.livingMemberRelationship1 =
            livingMemberRelationship1.value;
    }
    if (livingMembers.value >= 2) {
        allResponses.livingMemberName2 = livingMemberName2.value;
        allResponses.livingMemberAge2 = livingMemberAge2.value;
        allResponses.livingMemberRelationship2 =
            livingMemberRelationship2.value;
    }
    if (livingMembers.value >= 3) {
        allResponses.livingMemberName3 = livingMemberName3.value;
        allResponses.livingMemberAge3 = livingMemberAge3.value;
        allResponses.livingMemberRelationship3 =
            livingMemberRelationship3.value;
    }
    if (livingMembers.value >= 4) {
        allResponses.livingMemberName4 = livingMemberName4.value;
        allResponses.livingMemberAge4 = livingMemberAge4.value;
        allResponses.livingMemberRelationship4 =
            livingMemberRelationship4.value;
    }
    if (importantPerson.value >= 1) {
        allResponses.importantPersonName1 = importantPersonName1.value;
        allResponses.importantPersonAge1 = importantPersonAge1.value;
        allResponses.importantPersonRelationship1 =
            importantPersonRelationship1.value;
    }
    if (importantPerson.value >= 2) {
        allResponses.importantPersonName2 = importantPersonName2.value;
        allResponses.importantPersonAge2 = importantPersonAge2.value;
        allResponses.importantPersonRelationship2 =
            importantPersonRelationship2.value;
    }
    if (importantPerson.value >= 3) {
        allResponses.importantPersonName3 = importantPersonName3.value;
        allResponses.importantPersonAge3 = importantPersonAge3.value;
        allResponses.importantPersonRelationship3 =
            importantPersonRelationship3.value;
    }
    if (importantPerson.value >= 4) {
        allResponses.importantPersonName4 = importantPersonName4.value;
        allResponses.importantPersonAge4 = importantPersonAge4.value;
        allResponses.importantPersonRelationship4 =
            importantPersonRelationship4.value;
    }

    allResponses.socialFrecuency = socialFrecuency.value;
    allResponses.socialSatisfaction = socialSatisfaction.value;

    await testStore.createTestResults('Ambiente Social', allResponses);
    utilsStore.historyAdvance = 8;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '8');
};
</script>

<template>
    <p>Pasos 7/13</p>
    <h2>Ambiente Social</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-input
            v-model="socialFrecuency"
            label="Frecuencia de actividades sociales"
            hint="Del 1 al 10 ¿Con qué frecuencia realizas actividades sociales? (Ej. reuniones con amigos, fiestas, etc.)"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="socialSatisfaction"
            label="Satisfacción en actividades sociales"
            hint="Del 1 al 10 ¿Cuál es su nivel de satisfacción en sus actividades sociales?"
            type="text"
            class="q-my-md"
        />
        <p>¿Con quién vives en la actualidad?</p>
        <q-input
            v-model="livingMemberName1"
            label="Nombre de la persona"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="livingMemberAge1"
            label="Edad de la persona"
            type="number"
            class="q-my-md"
        />
        <q-input
            v-model="livingMemberRelationship1"
            label="Relación con la persona"
            type="text"
            class="q-my-md"
        />
        <div v-if="livingMembers >= 2">
            <q-input
                v-model="livingMemberName2"
                label="Nombre de la persona "
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="livingMemberAge2"
                label="Edad de la persona "
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="livingMemberRelationship2"
                label="Relación con la persona "
                type="text"
                class="q-my-md"
            />
        </div>
        <div v-if="livingMembers >= 3">
            <q-input
                v-model="livingMemberName3"
                label="Nombre de la persona"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="livingMemberAge3"
                label="Edad de la persona"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="livingMemberRelationship3"
                label="Relación con la persona"
                type="text"
                class="q-my-md"
            />
        </div>
        <div v-if="livingMembers >= 4">
            <q-input
                v-model="livingMemberName4"
                label="Nombre de la persona"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="livingMemberAge4"
                label="Edad de la persona"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="livingMemberRelationship4"
                label="Relación con la persona"
                type="text"
                class="q-my-md"
            />
        </div>
        <q-btn
            v-if="livingMembers < 4"
            label="Agregar persona con la que vives"
            @click="livingMembers++"
            class="bg-secondary text-white q-my-md"
        />
        <p>¿Qué personas son importantes para ti?</p>
        <q-input
            v-model="importantPersonName1"
            label="Nombre de la persona"
            type="text"
            class="q-my-md"
        />
        <q-input
            v-model="importantPersonAge1"
            label="Edad de la persona"
            type="number"
            class="q-my-md"
        />
        <q-input
            v-model="importantPersonRelationship1"
            label="Relación con la persona"
            type="text"
            class="q-my-md"
        />
        <div v-if="importantPerson >= 2">
            <q-input
                v-model="importantPersonName2"
                label="Nombre de la persona"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="importantPersonAge2"
                label="Edad de la persona"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="importantPersonRelationship2"
                label="Relación con la persona"
                type="text"
                class="q-my-md"
            />
        </div>
        <div v-if="importantPerson >= 3">
            <q-input
                v-model="importantPersonName3"
                label="Nombre de la persona"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="importantPersonAge3"
                label="Edad de la persona"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="importantPersonRelationship3"
                label="Relación con la persona"
                type="text"
                class="q-my-md"
            />
        </div>
        <div v-if="importantPerson >= 4">
            <q-input
                v-model="importantPersonName4"
                label="Nombre de la persona"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="importantPersonAge4"
                label="Edad de la persona"
                type="number"
                class="q-my-md"
            />
            <q-input
                v-model="importantPersonRelationship4"
                label="Relación con la persona"
                type="text"
                class="q-my-md"
            />
        </div>
        <q-btn
            v-if="importantPerson < 4"
            label="Agregar persona importante"
            @click="importantPerson++"
            class="bg-secondary text-white q-mt-md"
        />
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
