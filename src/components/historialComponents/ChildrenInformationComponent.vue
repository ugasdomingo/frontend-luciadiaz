<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useTestStore } from 'src/stores/test-store';
import { ref } from 'vue';

//Activate tools
const utilsStore = useUtilsStore();
const testStore = useTestStore();

//Get form data
const childrens = ref(false);
const childrensNames = ref('');
const childrensAges = ref('');
const childrensSatisfaction = ref('');

//Handle Submit
const handleSubmit = async () => {
    let allResponses = {} as any;

    if (childrens.value) {
        allResponses.childrensNames = childrensNames.value;
        allResponses.childrensAges = childrensAges.value;
        allResponses.childrensSatisfaction = childrensSatisfaction.value;
    } else {
        allResponses.childrens = 'No tiene hijos';
    }

    await testStore.createTestResults('Información de los hijos', allResponses);
    utilsStore.historyAdvance = 5;
    localStorage.removeItem('historial');
    localStorage.setItem('historial', '5');
};
</script>

<template>
    <p>Pasos 4/13</p>
    <h2>Información de los hijos</h2>
    <q-form @submit.prevent="handleSubmit" class="q-mb-md column">
        <q-toggle v-model="childrens" label="¿Tienes hijos?" />
        <div v-if="childrens">
            <q-input
                v-model="childrensNames"
                label="Nombre/es de tus hijos"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="childrensAges"
                label="Edad/es de tus hijos:"
                type="text"
                class="q-my-md"
            />
            <q-input
                v-model="childrensSatisfaction"
                label="Nivel de satisfacción con cada uno de ellos:"
                type="text"
                class="q-my-md"
                hint="Satisfacción de la relación con cada uno de ellos = 1: Insatisfecho - 10: Completamente satisfecho"
            />
        </div>
        <q-btn
            label="Enviar"
            type="submit"
            class="bg-primary text-white q-my-md"
        />
    </q-form>
</template>
