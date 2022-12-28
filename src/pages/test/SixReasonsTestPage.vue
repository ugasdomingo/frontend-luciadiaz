<template>
    <div v-if="sixReasonsStore.isSixReasonsTest == ''">
        <h2>Cargando...</h2>
    </div>
    <div v-else>
        <div v-if="sixReasonsStore.isSixReasonsTest == '1'">
            <SixReasonsDoneComponent />
        </div>
        <div v-else>
            <SixReasonsViewComponent />
        </div>
    </div>
</template>

<script lang="ts" setup>
// Import Tools
import { useSixReasonsStore } from 'src/stores/sixReasons-store';

//Import Components
import SixReasonsViewComponent from 'src/components/seis-razones/SeisRazonesViewComponent.vue';
import SixReasonsDoneComponent from 'src/components/seis-razones/SeisRazonesDoneComponent.vue';

// Setup Tools
const sixReasonsStore = useSixReasonsStore();
sixReasonsStore.findSxReasonsTest();
</script>
