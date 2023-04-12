<template>
    <ArchetypeShowResultsComponent
        v-if="testStores.arquetipo[0] != undefined"
    />
    <ArchetypeFormComponent v-else />
</template>

<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';
//Import Component
import ArchetypeFormComponent from 'src/components/archetypeComponents/ArchetypeFormComponent.vue';
import ArchetypeShowResultsComponent from 'src/components/archetypeComponents/ArchetypeShowResultsComponent.vue';

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
