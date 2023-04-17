<template>
    <ReasonsShowResultComponent
        v-if="testStores.arquetipo[0] != undefined"
        :name="userStore.userName.split(' ')[0]"
    />
    <ReasonsFormComponent v-else />
</template>

<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';
//Import Component
import ReasonsFormComponent from 'src/components/reasonsComponent/ReasonsFormComponent.vue';
import ReasonsShowResultComponent from 'src/components/reasonsComponent/ReasonsShowResultComponent.vue';

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
