<template>
    <div
        class="column flex-center"
        style="width: 100%; height: 100vh"
        v-if="arquetipoStore.isArqueTypeTest == ''"
    >
        <q-spinner-pie color="primary" size="10em" />
    </div>
    <div v-else>
        <div v-if="arquetipoStore.isArqueTypeTest == '1'">
            <ArquetipoDoneComponent />
        </div>
        <div v-else>
            <ArquetipoViewComponent />
        </div>
    </div>
</template>

<script lang="ts" setup>
// Import Tools
import { useArquetipoStore } from 'stores/arquetipo-store';

//Import Components
import ArquetipoViewComponent from 'components/arquetipo/ArquetipoViewComponent.vue';
import ArquetipoDoneComponent from 'components/arquetipo/ArquetipoDoneComponent.vue';

// Setup Tools
const arquetipoStore = useArquetipoStore();
arquetipoStore.findArchetypeTest();
</script>
