<template>
    <div class="col-12 col-md-6 motivos-container">
        <h3>Motivo de Consulta</h3>
        <p class="text-h5 text-weight-light">
            Una sección para aprender y disfrutar con el éxito de algunos de mis
            pacientes, quienes superaron su motivo de consulta.
        </p>
        <q-btn
            color="primary"
            glossy
            label="Seguir viendo Motivos (Próximamente)"
            to="#"
        />
    </div>
    <div class="col-12 col-md-4 q-video motivos-container">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_elW-ZwIEUQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1080px) {
    h3 {
        margin: 4px 0px 16px;
    }
    .motivos-container {
        padding: 0px 0px 16px;
    }
}
</style>
