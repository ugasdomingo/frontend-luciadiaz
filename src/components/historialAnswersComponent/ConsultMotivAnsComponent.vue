<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>
            Motivación de consulta: {{ answers?.answers?.consultMotivation }}
        </li>
        <li>
            ¿Desde cuándo los padece?:
            {{ answers?.answers?.consultProblemsTime }}
        </li>
        <li>
            Cree origen de sus problemas:
            {{ answers?.answers?.consultProblemsOrigin }}
        </li>
        <li>
            Qué o quién hace que los problemas mejoren:
            {{ answers?.answers?.consultProblemsBetter }}
        </li>
        <li>
            Qué o quién hace que los problemas empeoren:
            {{ answers?.answers?.consultProblemsWorse }}
        </li>
        <li>
            Solicitado ayuda ¿Ha resultado?:
            {{ answers?.answers?.consultProblemsHelpAsked }}
        </li>
    </ul>
</template>
