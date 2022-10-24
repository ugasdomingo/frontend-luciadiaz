<script lang="ts" setup>
// Import Tools
import { useTemperamentoStore } from 'stores/temperamento-store';
import { ref } from 'vue';

// Setup Tools
const temperamentoStore = useTemperamentoStore();
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5">
            <h3>Hola, tus resultados son</h3>
            <div class="results">
                <h4>
                    Sanguineo:
                    {{ temperamentoStore.allTemperamentos[0].sanguine }}
                </h4>
                <h4>
                    Colérico:
                    {{ temperamentoStore.allTemperamentos[0].choleric }}
                </h4>
                <h4>
                    Flemático:
                    {{ temperamentoStore.allTemperamentos[0].phlegmatic }}
                </h4>
                <h4>
                    Melancólico:
                    {{ temperamentoStore.allTemperamentos[0].melancholic }}
                </h4>
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
