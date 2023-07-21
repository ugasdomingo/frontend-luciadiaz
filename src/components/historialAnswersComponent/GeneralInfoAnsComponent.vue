<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>Doc. Identificación: {{ answers?.answers?.identification }}</li>
        <li>Dirección: {{ answers?.answers?.address }}</li>
        <li>Nacimiento: {{ answers?.answers?.birthDate }}</li>
        <li>Lugar Nacimiento: {{ answers?.answers?.birthAddress }}</li>
        <li>Estado Civíl: {{ answers?.answers?.civilStatement }}</li>
        <li>Oficio: {{ answers?.answers?.job }}</li>
        <li>Invitado por: {{ answers?.answers?.refferal }}</li>
        <li>Familiar Emer.: {{ answers?.answers?.emergencyFamiliar }}</li>
        <li>Contacto Emer.: {{ answers?.answers?.emergencyPhone }}</li>
    </ul>
</template>
