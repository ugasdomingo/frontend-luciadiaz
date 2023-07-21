<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>Descripción física: {{ answers?.answers?.phisicalDescription }}</li>
        <li>Cosas que gusta hacer: {{ answers?.answers?.thingsLikeToDo }}</li>
        <li>
            Cosas que ponen nervioso: {{ answers?.answers?.thingsGetNervous }}
        </li>
        <li>Reacciones enojado: {{ answers?.answers?.reactionsWhenAngry }}</li>
        <li>
            Reacciones nervioso: {{ answers?.answers?.reactionsWhenNervous }}
        </li>
        <li>Reacciones triste: {{ answers?.answers?.reactionsWhenSad }}</li>
        <li>
            Cualidades personales: {{ answers?.answers?.personalQualities }}
        </li>
        <li>Límites personales: {{ answers?.answers?.personalLimits }}</li>
    </ul>
</template>
