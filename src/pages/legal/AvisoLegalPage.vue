<template>
    <q-page class="column col-12 items-center">
        <div style="width: 60%">
            <h2>Aviso Legal</h2>
            <p>{{ dataAvisoLegal.parrafo1 }}</p>
            <ul>
                <li>
                    Denominación Social:
                    <span class="text-bold">
                        {{ dataAvisoLegal.denominacionSocial }}</span
                    >
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
            <p>{{ dataAvisoLegal.parrafo2 }}</p>
            <h4>Propiedad Intelectual</h4>
            <p>{{ dataAvisoLegal.parrafo3 }}</p>
            <p>{{ dataAvisoLegal.parrafo4 }}</p>
            <p>{{ dataAvisoLegal.parrafo5 }}</p>
            <p>{{ dataAvisoLegal.parrafo6 }}</p>
            <p>{{ dataAvisoLegal.parrafo7 }}</p>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { dataAvisoLegal } from './dataLegal';
</script>
