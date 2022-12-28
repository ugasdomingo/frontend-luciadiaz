<script lang="ts" setup>
// Import Tools
import { useSixReasonsStore } from 'src/stores/sixReasons-store';

// Setup Tools
const sixReasonsStore = useSixReasonsStore();
const response = sixReasonsStore.oneSixReasonsTest[0];
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-8 col-md-7 q-pb-xl">
            <h3>Carta de ti para ti:</h3>
            <div class="results">
                <p class="text-weight-regular q-pa-xl" style="font-size: 2em">
                    Yo, {{ sixReasonsStore.oneSixReasonsTest[0].username }},
                    tengo la meta de
                    {{ sixReasonsStore.oneSixReasonsTest[0].objetive }}.
                    <br />Porque conscientemente quiero
                    {{ sixReasonsStore.oneSixReasonsTest[0].reason1 }},<br />
                    ya que bloqueo en mi
                    {{ sixReasonsStore.oneSixReasonsTest[0].reason3 }},<br />
                    además quisiera
                    {{ sixReasonsStore.oneSixReasonsTest[0].reason4 }}, <br />ya
                    que rechazo
                    {{ sixReasonsStore.oneSixReasonsTest[0].reason6 }}.
                </p>
            </div>
            <h6>
                Si tienes dudas sobre esta carta de tu inconsciente, puedes
                escribirme por WhatsApp o agendar una cita para que tratemos el
                tema en profundidad:
            </h6>
            <q-btn label="Agendar Cita" color="primary" to="citas" />
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
