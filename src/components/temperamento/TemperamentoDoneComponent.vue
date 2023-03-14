<script lang="ts" setup>
// Import Tools
import { useTemperamentoStore } from 'stores/temperamento-store';
import { resultsTemperamento } from './resultsTemperamento';

// Setup Tools
const temperamentoStore = useTemperamentoStore();
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5 q-pb-md">
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
            <h6>
                Tu número mayor es tu temperamento dominante. La mayoría de las
                personas poseemos dos de los tempermentos y se combinan de la
                siguiente manera: melancólico flemático, colérico sanguineo,
                sanguíneo melancólico y asi. Aquí puedes ver las características
                principales de cada temperamento:
            </h6>
            <q-card class="q-my-xs">
                <q-card-section>
                    <h6 class="q-my-none">
                        Meláncólico: ({{ resultsTemperamento[0].slogan }})
                    </h6>
                </q-card-section>
                <q-card-section>
                    <ul>
                        <li>
                            <strong>Deseo: </strong>
                            {{ resultsTemperamento[0].deseo }}
                        </li>
                        <li>
                            <strong>Necesidades: </strong>
                            {{ resultsTemperamento[0].necesidades }}
                        </li>
                        <li>
                            <strong>Fuerzas Claves: </strong>
                            {{ resultsTemperamento[0].fuerzas }}
                        </li>
                        <li>
                            <strong>Debilidades Claves: </strong>
                            {{ resultsTemperamento[0].debilidades }}
                        </li>
                        <li>
                            <strong>Tiene miedo de: </strong>
                            {{ resultsTemperamento[0].miedo }}
                        </li>
                    </ul>
                </q-card-section>
            </q-card>
            <q-card class="q-my-md">
                <q-card-section>
                    <h6 class="q-my-none">
                        Flemático: ({{ resultsTemperamento[1].slogan }})
                    </h6>
                </q-card-section>
                <q-card-section>
                    <ul>
                        <li>
                            <strong>Deseo: </strong>
                            {{ resultsTemperamento[1].deseo }}
                        </li>
                        <li>
                            <strong>Necesidades: </strong>
                            {{ resultsTemperamento[1].necesidades }}
                        </li>
                        <li>
                            <strong>Fuerzas Claves: </strong>
                            {{ resultsTemperamento[1].fuerzas }}
                        </li>
                        <li>
                            <strong>Debilidades Claves: </strong>
                            {{ resultsTemperamento[1].debilidades }}
                        </li>
                        <li>
                            <strong>Tiene miedo de: </strong>
                            {{ resultsTemperamento[1].miedo }}
                        </li>
                    </ul>
                </q-card-section>
            </q-card>
            <q-card class="q-my-md">
                <q-card-section>
                    <h6 class="q-my-none">
                        Colérico: ({{ resultsTemperamento[2].slogan }})
                    </h6>
                </q-card-section>
                <q-card-section>
                    <ul>
                        <li>
                            <strong>Deseo: </strong>
                            {{ resultsTemperamento[2].deseo }}
                        </li>
                        <li>
                            <strong>Necesidades: </strong>
                            {{ resultsTemperamento[2].necesidades }}
                        </li>
                        <li>
                            <strong>Fuerzas Claves: </strong>
                            {{ resultsTemperamento[2].fuerzas }}
                        </li>
                        <li>
                            <strong>Debilidades Claves: </strong>
                            {{ resultsTemperamento[2].debilidades }}
                        </li>
                        <li>
                            <strong>Tiene miedo de: </strong>
                            {{ resultsTemperamento[2].miedo }}
                        </li>
                    </ul>
                </q-card-section>
            </q-card>
            <q-card class="q-my-md">
                <q-card-section>
                    <h6 class="q-my-none">
                        Sanguíneo: ({{ resultsTemperamento[3].slogan }})
                    </h6>
                </q-card-section>
                <q-card-section>
                    <ul>
                        <li>
                            <strong>Deseo: </strong>
                            {{ resultsTemperamento[3].deseo }}
                        </li>
                        <li>
                            <strong>Necesidades: </strong>
                            {{ resultsTemperamento[3].necesidades }}
                        </li>
                        <li>
                            <strong>Fuerzas Claves: </strong>
                            {{ resultsTemperamento[3].fuerzas }}
                        </li>
                        <li>
                            <strong>Debilidades Claves: </strong>
                            {{ resultsTemperamento[3].debilidades }}
                        </li>
                        <li>
                            <strong>Tiene miedo de: </strong>
                            {{ resultsTemperamento[3].miedo }}
                        </li>
                    </ul>
                </q-card-section>
            </q-card>
            <h6 class="q-pt-xl">
                Si tienes dudas sobre este test, puedes escribirme por WhatsApp
                o agendar una cita para que tratemos el tema en profundidad:
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
