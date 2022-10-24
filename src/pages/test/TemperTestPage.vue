<template>
    <div v-if="temperamentoStore.isTemperamentoTest == ''">
        <h2>Cargando...</h2>
    </div>
    <div v-else>
        <div v-if="temperamentoStore.isTemperamentoTest == '1'">
            <TemperamentoDoneComponent />
        </div>
        <div v-else>
            <TemperamentoViewComponent />
        </div>
    </div>
</template>

<script lang="ts" setup>
// Import Tools
import { useTemperamentoStore } from 'stores/temperamento-store';

//Import Components
import TemperamentoViewComponent from 'components/temperamento/TemperamentoViewComponent.vue';
import TemperamentoDoneComponent from 'components/temperamento/TemperamentoDoneComponent.vue';

// Setup Tools
const temperamentoStore = useTemperamentoStore();
temperamentoStore.findTemperamentoTest();
</script>
