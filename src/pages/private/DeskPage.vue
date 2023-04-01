<template>
    <div v-if="userStore.userRole === 'Admin'">
        <h1>Desk Admin Page</h1>
        <BooksFormComponet />
    </div>
    <div v-else>
        <h1>Mi Escritorio</h1>
    </div>
</template>

<script lang="ts" setup>
//Import tools
import { useUserStore } from 'src/stores/user-store';

//Import Components
import BooksFormComponet from 'src/components/booksComponents/BooksFormComponet.vue';

//Activate tools
const userStore = useUserStore();
</script>

<style scoped></style>
