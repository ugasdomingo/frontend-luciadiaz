<template>
    <div
        class="column flex-center"
        style="width: 100%; height: 100vh"
        v-if="temperamentoStore.isTemperamentoTest == ''"
    >
        <q-spinner-pie color="primary" size="10em" />
    </div>
    <div class="temper-container" v-else>
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

<style lang="scss" scoped>
@media screen and (max-width: 1080px) {
    .temper-container {
        padding: 8px;
    }
}
</style>
