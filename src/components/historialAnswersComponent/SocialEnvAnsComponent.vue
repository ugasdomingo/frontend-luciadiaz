<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>
            Frec. actividades sociales: {{ answers?.answers?.socialFrecuency }}
        </li>
        <li>
            Satis. actividades sociales:
            {{ answers?.answers?.socialSatisfaction }}
        </li>
        <!-- Persons who you live with -->
        <li>Personas con las que vive:</li>
        <li>Nombre: {{ answers?.answers?.livingMemberName1 }}</li>
        <li>Edad: {{ answers?.answers?.livingMemberAge1 }}</li>
        <li>Relación: {{ answers?.answers?.livingMemberRelationship1 }}</li>
        <li>Nombre: {{ answers?.answers?.livingMemberName2 }}</li>
        <li>Edad: {{ answers?.answers?.livingMemberAge2 }}</li>
        <li>Relación: {{ answers?.answers?.livingMemberRelationship2 }}</li>
        <li>Nombre: {{ answers?.answers?.livingMemberName3 }}</li>
        <li>Edad: {{ answers?.answers?.livingMemberAge3 }}</li>
        <li>Relación: {{ answers?.answers?.livingMemberRelationship3 }}</li>
        <li>Nombre: {{ answers?.answers?.livingMemberName4 }}</li>
        <li>Edad: {{ answers?.answers?.livingMemberAge4 }}</li>
        <li>Relación: {{ answers?.answers?.livingMemberRelationship4 }}</li>
    </ul>
</template>
