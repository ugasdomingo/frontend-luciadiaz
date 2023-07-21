<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>¿Enfermedad?: {{ answers?.answers?.enfermedad }}</li>
        <li>Nombre Enferemedad: {{ answers?.answers?.enfermedad1 }}</li>
        <li>Fecha Padecimiento: {{ answers?.answers?.fechaEnf1 }}</li>
        <!-- Medicamento -->
        <li>¿Medicamento?: {{ answers?.answers?.medicamento }}</li>
        <li>Nombre Medicamento: {{ answers?.answers?.medicamento1 }}</li>
        <!-- Tratamiento -->
        <li>¿Tratamiento?: {{ answers?.answers?.tratamiento }}</li>
        <li>Motivo: {{ answers?.answers?.motivo1 }}</li>
        <li>Duración: {{ answers?.answers?.tiempoTrat1 }}</li>
        <li>Fecha: {{ answers?.answers?.fechaTrat1 }}</li>
    </ul>
</template>
