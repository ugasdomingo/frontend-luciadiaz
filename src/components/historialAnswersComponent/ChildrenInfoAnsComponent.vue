<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>¿Tienes hijos?: {{ answers?.answers?.childrens || 'SI' }}</li>
        <li>Nombres: {{ answers?.answers?.childrensNames }}</li>
        <li>Edades: {{ answers?.answers?.childrensAges }}</li>
        <li>
            Satis. Relación con ellos:
            {{ answers?.answers?.childrensSatisfaction }}
        </li>
    </ul>
</template>
