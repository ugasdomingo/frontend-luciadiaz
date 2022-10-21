<template>
    <q-page class="column">
        <h3 class="text-primary text-center">Todos los Registros</h3>
        <div class="row justify-center">
            <template v-for="users of userStore.allUsers" :key="users.id">
                <AutoregistroList :users="users" class="q-ma-lg" />
            </template>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { useUserStore } from 'src/stores/user-store';

//Component
import AutoregistroList from 'components/autoregistro/AutoregistroListComponent.vue';

const userStore = useUserStore();

userStore.getAllUsers();
</script>

<style scoped></style>
