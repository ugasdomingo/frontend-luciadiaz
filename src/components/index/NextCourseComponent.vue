<template>
    <div class="row background-container col-12">
        <div class="row col-12 col-md-6 justify-evenly">
            <img
                src="img/certificado-best-dad.png"
                alt="portada"
                class="image"
            />
        </div>
        <div class="second-container column col-12 col-md-5 justify-center">
            <h4 class="q-mt-none q-pl-none text-white text-left">
                Guía para ser el Mejor Papá del Mundo
            </h4>
            <p class="text-white text-h6">
                En esta guía tu peque te irá narrando cómo ve el mundo en cada
                etapa de su crecimiento, te enseñará cómo debes prepararte que
                necesitas para darle lo que necesita y sobre todo te enseñará a
                ser el mejor papá del mundo.
            </p>
            <q-btn
                label="Más información"
                to="/best-dad"
                class="bg-accent"
                style="width: 50%; margin: 4px 0px"
            ></q-btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.image {
    max-width: 350px;
    min-width: 150px;
    padding: 4px 0;
    border-radius: 32px;
}
.background-container {
    background-image: url('../../../public/img/best-dad-portada.png');
    background-size: cover;
    padding: 10em 0;
}

@media screen and (max-width: 1080px) {
    .second-container {
        margin: 24px 8px 8px 12px;
    }
    .background-container {
        padding: 5em 0;
    }
}
</style>
