<script lang="ts" setup>
// Import Components
import ArquetipoFormsComponent from './ArquetipoFormsComponent.vue';
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5 q-pb-xl">
            <h3>Bienvenido(a) al Test de Arquetipos</h3>
            <p style="font-size: 1em">
                Este test tiene la finalidad de identificiar tus modelos y
                patornes de comportamiento, permitiendo trabajar de manera
                personalizada en tu plan de desarrollo personal. Llevándote a
                conocer más tus fortalezas y las áreas a potenciar en tu vida.
            </p>
            <p style="font-size: 1.2em">
                Por favor selecciona la opción con la que más te identifique en
                cada caso
            </p>
            <ArquetipoFormsComponent />
        </div>
    </q-page>
</template>
