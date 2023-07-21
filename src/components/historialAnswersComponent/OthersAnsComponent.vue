<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>
            ¿Dificultades para hacerce respetar?:
            {{ answers?.answers?.respectFromOthers }}
        </li>
        <li>
            ¿Periodos de profunda tristeza o depresión?:
            {{ answers?.answers?.sadnessTime }}
        </li>
        <li>
            ¿Algún tipo de dificultad sexual?:
            {{ answers?.answers?.sexualDifficulties }}
        </li>
        <li>
            ¿Dificultades para hacer o mantener amistades?:
            {{ answers?.answers?.friendshipDifficulties }}
        </li>
        <li>
            ¿Dificultades para hacer o mantener relaciones afectivas?:
            {{ answers?.answers?.loveRelationshipDifficulties }}
        </li>
        <li>
            ¿Miedo intenso o ataques de pánico?:
            {{ answers?.answers?.intenceFear }}
        </li>
        <li>
            ¿Dolores de cabeza intensos o frecuentes?:
            {{ answers?.answers?.hardHeadche }}
        </li>
        <li>
            ¿Dificultades con el alcohol?:
            {{ answers?.answers?.alcoholismDifficulties }}
        </li>
        <li>
            ¿Dificultades con las drogas o las ha usado?:
            {{ answers?.answers?.drugAddictionDifficulties }}
        </li>
        <li>
            ¿Qué espera de la terapia?:
            {{ answers?.answers?.espectationsFromTherapy }}
        </li>
        <li>
            ¿Otra información que considere útil?:
            {{ answers?.answers?.otherUtilInformation }}
        </li>
    </ul>
</template>
