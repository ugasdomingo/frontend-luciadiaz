<template>
    <div v-if="userStore.userRole === 'Admin'">
        <AdminDeskComponent />
    </div>
    <div v-else>
        <UsersDeskComponent />
    </div>
</template>

<script lang="ts" setup>
//Import tools
import { useUserStore } from 'src/stores/user-store';

//Import Components
import AdminDeskComponent from 'src/components/deskComponents/AdminDeskComponent.vue';
import UsersDeskComponent from 'src/components/deskComponents/UsersDeskComponent.vue';

//Activate tools
const userStore = useUserStore();
userStore.getAllUsers();
</script>

<style scoped></style>
