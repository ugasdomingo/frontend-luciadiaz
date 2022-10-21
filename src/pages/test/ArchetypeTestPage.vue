<template>
    <div v-if="arquetipoStore.isArqueTypeTest == ''">
        <h2>Cargando...</h2>
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
