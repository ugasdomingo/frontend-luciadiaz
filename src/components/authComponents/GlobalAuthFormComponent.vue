<script lang="ts" setup>
//Import Components
import { useUserStore } from 'src/stores/user-store';

const userStore = useUserStore();
</script>

<template>
    <div v-if="!userStore.token">
        <q-input
            v-model="userStore.name"
            dark
            type="text"
            label="Nombre Completo"
            :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
        />
        <q-input
            v-model="userStore.email"
            label="Email"
            type="text"
            dark
            :rules="[
                (val) =>
                    (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                    'Formato email incorrecto',
            ]"
        />
        <q-input
            v-model="userStore.phone"
            type="text"
            dark
            label="Teléfono"
            :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
        />
        <q-input
            v-model="userStore.password"
            label="Contraseña"
            type="password"
            dark
            :rules="[
                (val) =>
                    (val && val.length > 5) || 'Contraseña mínimo 6 carácteres',
            ]"
        >
            <template v-slot:hint>
                Si ya tienes una cuenta, usa tu contraseña
            </template>
        </q-input>
    </div>
</template>
