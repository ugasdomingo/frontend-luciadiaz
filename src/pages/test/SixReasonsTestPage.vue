<template>
    <div
        class="column flex-center"
        style="width: 100%; height: 100vh"
        v-if="sixReasonsStore.isSixReasonsTest == ''"
    >
        <q-spinner-pie color="primary" size="10em" />
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
sixReasonsStore.findSixReasonsTest();
</script>
