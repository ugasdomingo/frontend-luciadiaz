<script lang="ts" setup></script>

<template>
    <div class="row items-center justify-evenly citas-container">
        <div class="column">
            <h2 class="titles q-mb-md">Agenda una Consulta</h2>
            <h6 class="text-white text-end q-mt-none">
                Online o Presencial en Madrid
            </h6>
        </div>
        <q-btn label="Agendar Ahora" class="button-citas" to="citas" />
    </div>
</template>

<style lang="scss" scoped>
.citas-container {
    width: 100%;
    height: 100%;
    padding: 0 0 8px;
    background-image: linear-gradient(
        to right,
        rgba(9, 20, 141, 0.1),
        rgba(9, 30, 141, 0.9)
    );
}
.button-citas {
    color: $white;
    font-size: 1.3em;
    font-weight: 300;
    background-color: none;
    border: solid 1px $white;
}
</style>
