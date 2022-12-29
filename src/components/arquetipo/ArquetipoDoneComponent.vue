<script lang="ts" setup>
// Import Tools
import { useArquetipoStore } from 'stores/arquetipo-store';

// Setup Tools
const arquetipoStore = useArquetipoStore();
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-8 col-md-7 q-pb-xl">
            <h3>Hola, tus resultados son:</h3>
            <div class="results">
                <h4>Sabio Rey: {{ arquetipoStore.allArquetipos[0].wise }}</h4>
                <h4>Guerrero: {{ arquetipoStore.allArquetipos[0].warrior }}</h4>
                <h4>Mago: {{ arquetipoStore.allArquetipos[0].wizard }}</h4>
                <h4>Amante: {{ arquetipoStore.allArquetipos[0].lover }}</h4>
            </div>
            <h6 class="text-center">
                El número mayor en los resultados es tu patrón dominante:
            </h6>
            <div class="row col-12">
                <div class="col explicacion">
                    <h6 class="q-ma-xs">Sabio Rey</h6>
                    <p>
                        Principalmente quiere
                        <span class="text-bold">tener razón</span>. Además:
                    </p>
                    <ul>
                        <li>Su máxima necesidad: la IMPORTANCIA.</li>
                        <li>
                            Es capaz de contemplar pasado, presente y futuro.
                        </li>
                        <li>Toma decisiones según la ÉTICA.</li>
                        <li>
                            Le gusta la precisión, piensa antes de actuar y
                            fundamenta sus decisiones.
                        </li>
                    </ul>
                </div>
                <div class="col explicacion">
                    <h6 class="q-ma-xs">Guerrero</h6>
                    <p>
                        Principalmente quiere
                        <span class="text-bold">tener control</span>. Además:
                    </p>
                    <ul>
                        <li>Su máxima necesidad: el CONTROL.</li>
                        <li>Enfocado en el presente.</li>
                        <li>Toma decisiones según lo PRÁCTICO.</li>
                        <li>
                            Le gusta el control, la rapidez, la efectividad y la
                            impulsividad.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row col-12">
                <div class="col explicacion">
                    <h6 class="q-ma-xs">Amante</h6>
                    <p>
                        Principalmente quiere
                        <span class="text-bold">evitar conflicto</span>. Y sus
                        cualidades son
                    </p>
                    <ul>
                        <li>Su máxima necesidad: el AMOR.</li>
                        <li>Enfocado en el pasado.</li>
                        <li>Toma decisiones según las RELACIONES.</li>
                        <li>
                            Le gusta compartir, buen negociador, evitar
                            conflictos, es sensible y buen escuchador
                        </li>
                    </ul>
                </div>
                <div class="col explicacion">
                    <h6 class="q-ma-xs">Mago</h6>
                    <p>
                        Principalmente quiere
                        <span class="text-bold">ser reconocido</span>. Y sus
                        cualidades son
                    </p>
                    <ul>
                        <li>Su máxima necesidad: la VARIEDAD.</li>
                        <li>Enfocado en el futuro.</li>
                        <li>Toma decisiones según lo EMOCIONAL.</li>
                        <li>
                            Le gusta visualizar oportunidades, vender, soñar,
                            las aventuras y la rapidez
                        </li>
                    </ul>
                </div>
            </div>
            <h6>
                Si tienes dudas sobre tus resultados de Arquetipo, puedes
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

.explicacion
    border: 1px solid black
    border-radius: 8px
    padding: 4px
    margin: 4px
    box-shadow: 1px 1px 10px
</style>
