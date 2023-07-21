<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>
            Básica:
            {{ answers?.answers?.basicFormation.institution }},
            {{ answers?.answers?.basicFormation.programComplete }}
        </li>
        <li>
            Profesional:
            {{ answers?.answers?.profesionalFormation.university }},
            {{ answers?.answers?.profesionalFormation.titulation }}
        </li>
        <li>
            Desempeño Academico: {{ answers?.answers?.academicPerformance }}
        </li>
        <li>
            ¿Estudiando Actualmente?: {{ answers?.answers?.isStudent || 'SI' }}
        </li>
        <li>
            Satisfacción Academica: {{ answers?.answers?.academicSatisfaction }}
        </li>
    </ul>
</template>
