<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>Religión: {{ answers?.answers?.religion }}</li>
        <li>Nivel de Fé: {{ answers?.answers?.feith }}</li>
        <li>Prácticante: {{ answers?.answers?.religiousPractice }}</li>
    </ul>
</template>
