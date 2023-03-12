<template>
    <div class="col-8 q-pr-xl">
        <h3 class="text-weight-regular">Bienvenidos a mi web</h3>
        <p class="text-h5 q-mb-xl">
            Primero que todo
            <span class="text-bold"> ¿me permites darte un regalo?</span>.
            <br />
            Regalo que te ayudará a lograr tu objetivo más deseado.
        </p>
        <div class="row">
            <q-btn
                label="Obtener mi regalo"
                color="primary"
                to="seis-razones"
            />
            <q-btn
                color="primary"
                glossy
                label="Agendar una Consulta"
                to="citas"
                class="agendar"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.agendar {
    margin-left: 12px;
}
@media screen and (max-width: 1080px) {
    .agendar {
        margin: 12px 0px;
    }
}
</style>
