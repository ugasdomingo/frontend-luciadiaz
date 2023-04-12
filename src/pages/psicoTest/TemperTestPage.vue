<template>
    <TemperShowResultsComponent
        v-if="testStores.temperamento[0] != undefined"
    />
    <TemperFormComponent v-else />
</template>

<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';
//Import Component
import TemperFormComponent from 'src/components/temperComponents/TemperFormComponent.vue';
import TemperShowResultsComponent from 'src/components/temperComponents/TemperShowResultsComponent.vue';

//Activate tools
const testStores = useTestStore();
const userStore = useUserStore();

const initialFuntion = async () => {
    if (userStore.token) {
        await userStore.self();
        await testStores.getAllUserTestResults(userStore.selfUid);
    }
};

initialFuntion();
</script>
