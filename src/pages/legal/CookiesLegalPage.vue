<template>
    <q-page class="column col-12 items-center">
        <div style="width: 60%">
            <h2>Política de Cookies</h2>
            <p>{{ dataCookies.parrafo1 }}</p>
            <p>{{ dataCookies.parrafo2 }}</p>
            <p>{{ dataCookies.parrafo3 }}</p>
            <p>{{ dataCookies.parrafo4 }}</p>
            <p>{{ dataCookies.parrafo5 }}</p>

            <!-- Segunda Parte -->
            <h4>{{ dataCookies.title1 }}</h4>
            <p>{{ dataCookies.parrafoX }}</p>
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

            <!-- Tercera Parte -->
            <h4>{{ dataCookies.title2 }}</h4>
            <p>{{ dataCookies.parrafo6 }}</p>
            <p>{{ dataCookies.parrafo7 }}</p>
            <p>{{ dataCookies.parrafo8 }}</p>
            <p>{{ dataCookies.parrafo9 }}</p>
            <p>{{ dataCookies.parrafo10 }}</p>
            <p>{{ dataCookies.parrafo11 }}</p>
            <p>{{ dataCookies.parrafo12 }}</p>
            <p>{{ dataCookies.parrafo13 }}</p>

            <!-- Cuarta Parte -->
            <h4>{{ dataCookies.title3 }}</h4>

            <!-- Quinta Parte -->
            <h4>{{ dataCookies.title4 }}</h4>
            <p>{{ dataCookies.parrafo14 }}</p>
            <p>{{ dataCookies.parrafo15 }}</p>

            <!-- Sexta Parte -->
            <h4>{{ dataCookies.title5 }}</h4>
            <p>{{ dataCookies.parrafo16 }}</p>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { dataCookies, dataAvisoLegal } from './dataLegal';
</script>
