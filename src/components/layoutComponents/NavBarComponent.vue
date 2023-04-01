<script lang="ts" setup>
//Import tools
import { useUserStore } from '../../stores/user-store';

//Activate tools
const userStores = useUserStore();
</script>

<template>
    <q-btn-group>
        <q-btn color="green" to="/" glossy label="Inicio" />
        <q-btn color="green" to="/test" glossy label="Test Gratuitos" />
        <q-btn
            color="green"
            to="/psicologia"
            glossy
            label="Psicología para ti"
        />
        <q-btn
            color="primary"
            v-if="!userStores.token"
            to="/login"
            glossy
            label="Iniciar Sesión"
        />
        <q-btn
            color="accent"
            v-if="userStores.token"
            to="/mi-escritorio"
            glossy
            label="Escritorio"
        />
    </q-btn-group>
</template>

<style lang="scss" scoped></style>
