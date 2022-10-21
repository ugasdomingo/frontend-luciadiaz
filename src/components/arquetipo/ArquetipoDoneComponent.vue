<script lang="ts" setup>
// Import Tools
import { useArquetipoStore } from 'stores/arquetipo-store';
import { ref } from 'vue';

// Setup Tools
const arquetipoStore = useArquetipoStore();
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5">
            <h3>Hola, tus resultados son</h3>
            <div class="results">
                <h4>Sabio: {{ arquetipoStore.allArquetipos[0].wise }}</h4>
                <h4>Guerrero: {{ arquetipoStore.allArquetipos[0].warrior }}</h4>
                <h4>Mago: {{ arquetipoStore.allArquetipos[0].wizard }}</h4>
                <h4>Amante: {{ arquetipoStore.allArquetipos[0].lover }}</h4>
            </div>
        </div>
    </q-page>
</template>

<style lang="sass" scoped>
.results
    background: $positive
    padding: 8px
    border-radius: 24px
    display: grid
    place-content: center

.results h4
    padding: 4px
    margin:  4px
</style>
