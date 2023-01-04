<template>
    <q-page class="column col-12 items-center">
        <div style="width: 60%">
            <h2>Políticas de Privacidad</h2>
            <h5>{{ dataPrivacidad.title1 }}</h5>
            <p>{{ dataPrivacidad.parrafo1 }}</p>

            <!-- Segunda Parte -->
            <h5>{{ dataPrivacidad.title2 }}</h5>
            <h6>{{ dataPrivacidad.subtitle2 }}</h6>
            <p>{{ dataPrivacidad.parrafo2 }}</p>
            <ul>
                <li>
                    Denominación Social:
                    <span class="text-bold">
                        {{ dataAvisoLegal.denominacionSocial }}</span
                    >
                </li>
                <li>
                    Denominación Comercial:
                    <span class="text-bold"> Psicoluciadiaz</span>
                </li>
                <li>
                    Número de FPV:
                    <span class="text-bold"> {{ dataAvisoLegal.fpv }}</span>
                </li>
                <li>
                    Domicilio:
                    <span class="text-bold">
                        {{ dataAvisoLegal.domicilio }}</span
                    >
                </li>
                <li>
                    Contacto:
                    <span class="text-bold">
                        {{ dataAvisoLegal.contacto }}</span
                    >
                </li>
            </ul>
            <p>{{ dataPrivacidad.parrafo3 }}</p>
            <p>{{ dataPrivacidad.parrafo4 }}</p>

            <!-- Tercera Parte -->
            <h6>{{ dataPrivacidad.subtitle3 }}</h6>
            <p>{{ dataPrivacidad.parrafo5 }}</p>
            <p>{{ dataPrivacidad.parrafo6 }}</p>
            <p>{{ dataPrivacidad.parrafo7 }}</p>

            <!-- Cuarta Parte -->
            <h6>{{ dataPrivacidad.subtitle4 }}</h6>
            <p>{{ dataPrivacidad.parrafo8 }}</p>
            <ul>
                <li>{{ dataPrivacidad.item1 }}</li>
                <li>{{ dataPrivacidad.item2 }}</li>
                <li>{{ dataPrivacidad.item3 }}</li>
                <li>{{ dataPrivacidad.item4 }}</li>
                <li>{{ dataPrivacidad.item5 }}</li>
            </ul>

            <!-- Quinta Parte -->
            <h6>{{ dataPrivacidad.subtitle5 }}</h6>
            <p>{{ dataPrivacidad.parrafo9 }}</p>
            <p>{{ dataPrivacidad.parrafo10 }}</p>
            <p>{{ dataPrivacidad.parrafo11 }}</p>

            <!-- Sexta Parte -->
            <h6>{{ dataPrivacidad.subtitle6 }}</h6>
            <p>{{ dataPrivacidad.parrafo12 }}</p>

            <!-- Septima Parte -->
            <h6>{{ dataPrivacidad.subtitle7 }}</h6>
            <p>{{ dataPrivacidad.parrafo13 }}</p>
            <p>{{ dataPrivacidad.parrafo14 }}</p>

            <!-- Octava Parte -->
            <h6>{{ dataPrivacidad.subtitle8 }}</h6>
            <p>{{ dataPrivacidad.parrafo15 }}</p>

            <!-- Novena Parte -->
            <h6>{{ dataPrivacidad.subtitle9 }}</h6>
            <p>{{ dataPrivacidad.parrafo16 }}</p>

            <!-- Decima Parte -->
            <h6>{{ dataPrivacidad.subtitle10 }}</h6>
            <p>{{ dataPrivacidad.parrafo17 }}</p>

            <!-- Decimo Primera Parte -->
            <h6>{{ dataPrivacidad.subtitle11 }}</h6>
            <p>{{ dataPrivacidad.parrafo18 }}</p>

            <!-- Decimo Segunda Parte -->
            <h6>{{ dataPrivacidad.subtitle12 }}</h6>
            <q-btn
                label="Ver cookies"
                color="primary"
                to="politica-cookies"
                class="q-mb-xl"
            ></q-btn>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { dataAvisoLegal, dataPrivacidad } from './dataLegal';
</script>

<style lang="scss" scoped>
h5 {
    color: $primary;
}
</style>
