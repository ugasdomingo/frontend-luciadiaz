<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <!-- HOBBIES ACTUALES -->
        <li>Actuales: {{ answers?.answers?.actualHobbies.actualHobbies1 }}</li>
        <li>
            Frecuencia Actuales:
            {{ answers?.answers?.actualHobbies.actualHobbiesFrec1 }}
        </li>
        <li>
            Satis. Actuales:
            {{ answers?.answers?.actualHobbies.actualHobbiesSatis1 }}
        </li>

        <!-- HOBBIES PASADOS -->
        <li>
            Pasados: {{ answers?.answers?.previousHobbies.previousHobbies1 }}
        </li>
        <li>
            Frecuencia Pasados:
            {{ answers?.answers?.previousHobbies.previousHobbiesFrec1 }}
        </li>
        <li>
            Satis. Pasados:
            {{ answers?.answers?.previousHobbies.previousHobbiesSatis1 }}
        </li>

        <!-- HOBBIES FUTUROS -->
        <li>Deseados: {{ answers?.answers?.wantedHobbies.wantedHobbies1 }}</li>
        <li>
            Frecuencia Deseados:
            {{ answers?.answers?.wantedHobbies.wantedHobbiesFrec1 }}
        </li>
        <li>
            Satis. Deseados:
            {{ answers?.answers?.wantedHobbies.wantedHobbiesSatis1 }}
        </li>
    </ul>
</template>
