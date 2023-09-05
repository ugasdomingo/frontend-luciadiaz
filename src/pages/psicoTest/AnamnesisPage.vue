<template>
    <AnamnesisShowResultsComponent
        v-if="testStores.anamnesis[0] != undefined"
    />
    <AnamnesisFormComponent v-else />
</template>

<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';

//Import Component
import AnamnesisFormComponent from 'src/components/anamnesisComponents/AnamnesisFormComponent.vue';
import AnamnesisShowResultsComponent from 'src/components/anamnesisComponents/AnamnesisShowResultComponent.vue';

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
console.log(testStores.anamnesis[0]);
</script>
