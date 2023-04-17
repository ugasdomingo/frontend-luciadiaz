<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';

//Activate tools
const testStore = useTestStore();

defineProps({
    name: String,
});
</script>

<template>
    <div class="column flex-center reasons-results">
        <div class="results">
            <h3 class="q-my-none">Carta de ti para ti:</h3>
            <p class="text-weight-regular q-py-xl">
                Yo,
                {{ name }}, tengo la meta de
                {{ testStore.metas[0]?.answers?.objetive }}. <br />Porque
                conscientemente quiero
                {{ testStore.metas[0]?.answers?.reason1 }},<br />
                ya que bloqueo en mi
                {{ testStore.metas[0]?.answers?.reason3 }},<br />
                además quisiera
                {{ testStore.metas[0]?.answers?.reason4 }}, <br />ya que rechazo
                {{ testStore.metas[0]?.answers?.reason6 }}.
            </p>
        </div>
        <h6 style="width: 70%">
            Si tienes dudas sobre tus resultados de Arquetipo, puedes escribirme
            por WhatsApp o agendar una cita para que tratemos el tema en
            profundidad:
        </h6>
        <q-btn label="Agendar Cita" color="primary" to="citas" />
    </div>
</template>

<style lang="scss" scoped>
p {
    font-size: 2.5em;
}
.results {
    background: $positive;
    border-radius: 24px;
    padding: 8px;
}
.reasons-results {
    padding: 2em 1em;
}

@media screen and (max-width: 760px) {
    p {
        font-size: 1.5em;
        text-align: start;
    }
    .results {
        width: 95%;
        padding: 0;
    }
    .reasons-results {
        padding: 0;
    }
}
</style>
