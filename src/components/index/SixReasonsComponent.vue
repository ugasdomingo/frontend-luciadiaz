<template>
    <q-img src="img/fondo-1.jpg" alt="background 1" class="img-bg-1">
        <div class="column absolute-full flex-center text-container">
            <h3 class="titles q-my-xs">
                ¿Tienes una meta que deseas inmensamente?
            </h3>
            <p class="text-weight-light">
                ¿Te gustaría saber qué es eso en tu mente que puede evitar que
                la alcances?
            </p>
            <q-btn
                color="primary"
                glossy
                label="Descúbrelo sin costo alguno"
                to="seis-razones"
                style="width: 40%; margin-top: 16px"
                class="text-center"
            />
        </div>
    </q-img>
</template>

<style scoped>
.text-container {
    width: 100%;
    height: 70vh;
}
.img-bg-1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1080px) {
    h3 {
        font-size: 2em;
        text-align: center;
        line-height: 1.5em;
        padding: 0px;
        margin: 0px;
    }
    p {
        font-size: 1em;
        text-align: center;
        width: 80%;
    }
    .text-container {
        height: 40vh;
        padding: 4px;
    }
}
</style>
