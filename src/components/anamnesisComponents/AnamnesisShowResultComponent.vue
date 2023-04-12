<script lang="ts" setup>
//Import tools
import { anamnesisQuestions } from './anamnesisQuestions';

defineProps({
    respuestas: Object,
});
</script>

<template>
    <ul>
        <li>{{ anamnesisQuestions[2].label }}: {{ respuestas?.pregunta1 }}</li>
        <li>{{ anamnesisQuestions[3].label }}: {{ respuestas?.pregunta2 }}</li>
        <li>{{ anamnesisQuestions[4].label }}: {{ respuestas?.pregunta3 }}</li>
        <li>{{ anamnesisQuestions[5].label }}: {{ respuestas?.pregunta4 }}</li>
        <li>{{ anamnesisQuestions[6].label }}: {{ respuestas?.pregunta5 }}</li>
        <li>{{ anamnesisQuestions[7].label }}: {{ respuestas?.pregunta6 }}</li>
        <li>{{ anamnesisQuestions[8].label }}: {{ respuestas?.pregunta7 }}</li>
        <li>{{ anamnesisQuestions[9].label }}: {{ respuestas?.pregunta8 }}</li>
        <li>{{ anamnesisQuestions[10].label }}: {{ respuestas?.pregunta9 }}</li>
        <li>
            {{ anamnesisQuestions[11].label }}: {{ respuestas?.pregunta10 }}
        </li>
        <li>
            {{ anamnesisQuestions[12].label }}: {{ respuestas?.pregunta11 }}
        </li>
        <li>
            {{ anamnesisQuestions[13].label }}: {{ respuestas?.pregunta12 }}
        </li>
        <li>
            {{ anamnesisQuestions[14].label }}: {{ respuestas?.pregunta13 }}
        </li>
        <li>
            {{ anamnesisQuestions[15].label }}: {{ respuestas?.pregunta14 }}
        </li>
        <li>
            {{ anamnesisQuestions[16].label }}: {{ respuestas?.pregunta15 }}
        </li>
        <li>
            {{ anamnesisQuestions[17].label }}: {{ respuestas?.pregunta16 }}
        </li>
        <li>
            {{ anamnesisQuestions[18].label }}: {{ respuestas?.pregunta17 }}
        </li>
        <li>
            {{ anamnesisQuestions[19].label }}: {{ respuestas?.pregunta18 }}
        </li>
        <li>
            {{ anamnesisQuestions[20].label }}: {{ respuestas?.pregunta19 }}
        </li>
        <li>
            {{ anamnesisQuestions[21].label }}: {{ respuestas?.pregunta20 }}
        </li>
        <li>
            {{ anamnesisQuestions[22].label }}: {{ respuestas?.pregunta21 }}
        </li>
    </ul>
</template>
