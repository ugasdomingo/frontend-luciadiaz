<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>¿Trabaja actualmente?: {{ answers?.answers?.isWorking }}</li>
        <li>Trabajo anterior: {{ answers?.answers?.previousJob }}</li>
        <li>Satis. Desarrollo personal: {{ answers?.answers?.selfGrow }}</li>
        <li>
            Satis. Remuneración económica: {{ answers?.answers?.jobsPayment }}
        </li>
        <li>
            Satis. Ambiente Laboral: {{ answers?.answers?.jobsEnvironment }}
        </li>
        <li>Nivel de estrés: {{ answers?.answers?.streesLevel }}</li>
    </ul>
</template>
