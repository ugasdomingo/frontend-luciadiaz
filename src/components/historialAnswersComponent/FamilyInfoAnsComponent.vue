<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>
            Antecedentes Familiares:
            {{ answers?.answers?.familyMentalHealth || 'NO' }}
        </li>
        <li>Relación familiar: {{ answers?.answers?.familyType }}</li>

        <!-- Satisfacción familiar 1 -->
        <li>Nombre del Familiar: {{ answers?.answers?.familyName1 }}</li>
        <li>Edad: {{ answers?.answers?.familyAge1 }}</li>
        <li>Nivel satisfacción: {{ answers?.answers?.familySatisfaction1 }}</li>

        <!-- Satisfacción familiar 2 -->
        <li>Nombre del Familiar: {{ answers?.answers?.familyName2 }}</li>
        <li>Edad: {{ answers?.answers?.familyAge2 }}</li>
        <li>Nivel satisfacción: {{ answers?.answers?.familySatisfaction2 }}</li>

        <!-- Satisfacción familiar 3 -->
        <li>Nombre del Familiar: {{ answers?.answers?.familyName3 }}</li>
        <li>Edad: {{ answers?.answers?.familyAge3 }}</li>
        <li>Nivel satisfacción: {{ answers?.answers?.familySatisfaction3 }}</li>

        <!-- Satisfacción familiar 4 -->
        <li>Nombre del Familiar: {{ answers?.answers?.familyName4 }}</li>
        <li>Edad: {{ answers?.answers?.familyAge4 }}</li>
        <li>Nivel satisfacción: {{ answers?.answers?.familySatisfaction4 }}</li>
    </ul>
</template>
