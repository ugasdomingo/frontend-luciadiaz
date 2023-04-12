<script lang="ts" setup>
//Import tools
import { useUserStore } from '../../stores/user-store';

//Activate tools
const userStores = useUserStore();
</script>

<template>
    <q-btn-group class="group-menu">
        <q-btn class="botton-group" to="/" glossy label="Inicio" />
        <q-btn class="botton-group" to="/tests" glossy label="Test Gratuitos" />
        <q-btn
            class="botton-group"
            to="/psicologia"
            glossy
            label="Psicología para ti"
        />
        <q-btn
            class="botton-final"
            v-if="!userStores.token"
            to="/login"
            glossy
            label="Iniciar Sesión"
        />
        <q-btn
            class="botton-final"
            v-if="userStores.token"
            to="/mi-escritorio"
            glossy
            label="Escritorio"
        />
    </q-btn-group>
</template>

<style lang="scss" scoped>
.botton-group {
    background-color: $azul;
}
.botton-final {
    background-color: $green;
}

@media screen and (max-width: 760px) {
    .group-menu {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: $white;
    }
}
</style>
