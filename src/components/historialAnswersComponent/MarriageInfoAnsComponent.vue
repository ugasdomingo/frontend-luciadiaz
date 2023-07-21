<script setup lang="ts">
defineProps({
    answers: Object,
});
</script>

<template>
    <h5>{{ answers?.testTitle }}</h5>
    <ul>
        <li>¿Casado o pareja?: {{ answers?.answers?.marriage || 'SI' }}</li>
        <li>Nombre: {{ answers?.answers?.coupleName }}</li>
        <li>Edad: {{ answers?.answers?.coupleAge }}</li>
        <li>Oficio: {{ answers?.answers?.coupleJob }}</li>
        <li>Grado Formación: {{ answers?.answers?.coupleFormation }}</li>
        <li>Tiempo casados: {{ answers?.answers?.marriageTime }}</li>
        <li>Tiempo novios: {{ answers?.answers?.fianceeTime }}</li>
        <li>Tiempo conocerce: {{ answers?.answers?.meetTime }}</li>
        <li>Matrimonio anterior: {{ answers?.answers?.exMarriage }}</li>
        <li>
            Hijos Mat. anterior: {{ answers?.answers?.exMarriageChildrens }}
        </li>
        <li>Ex-Matrimonio pareja: {{ answers?.answers?.coupleExMarriage }}</li>
        <li>Hijos pareja: {{ answers?.answers?.coupleExMarriageChildrens }}</li>
        <li>
            Satis. Matrimonio actual: {{ answers?.answers?.satisfactionLevel }}
        </li>
        <li>Satis. Comunicación: {{ answers?.answers?.coupleComunication }}</li>
        <li>
            Satis. Responsabilidades Hogar: {{ answers?.answers?.coupleRoles }}
        </li>
        <li>Satis. Afecto recibido: {{ answers?.answers?.coupleAtention }}</li>
        <li>Satis. Relaciones sexuales: {{ answers?.answers?.coupleSex }}</li>
        <li>
            Satis. Activ. sociales juntos: {{ answers?.answers?.coupleSocial }}
        </li>
        <li>Satis. Recreación y tiempo: {{ answers?.answers?.coupleTime }}</li>
        <li>Satis. Manejo Finanzas: {{ answers?.answers?.coupleFinance }}</li>
        <li>
            Satis. Métodos crianza hijos: {{ answers?.answers?.coupleChildren }}
        </li>
        <li>Satis. Familia política: {{ answers?.answers?.coupleFamily }}</li>
    </ul>
</template>
