<template>
    <div class="row background-container col-12 q-py-xl">
        <div class="row col-12 col-md-8 justify-evenly">
            <img
                src="https://res.cloudinary.com/minteados/image/upload/v1672669186/Cursos/Presencial_1_h4vvwz.png"
                alt="portada"
                class="image"
            />
            <img
                src="https://res.cloudinary.com/minteados/image/upload/v1672669276/Cursos/Presencial_2_shoo3x.png"
                alt="portada"
                class="image"
            />
        </div>
        <div class="second-container column col-12 col-md-4 justify-center">
            <h4 class="q-mt-none q-pl-none text-white text-left">
                Online y Presencial
            </h4>
            <p class="text-white text-h6">
                Descubre cómo el conseguir tu bienestar como Madre o como Padre
                le permite a tus hijos(as) desarrollar las cualidades más
                importantes para enfrentar la vida
            </p>
            <q-btn
                label="Más información"
                to="/crianza-asertiva"
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
    padding: 4px;
    border-radius: 32px;
}
.background-container {
    background-image: url('img/fondo.jpg');
    background-size: cover;
}

@media screen and (max-width: 1080px) {
    .second-container {
        margin: 24px 8px 8px 12px;
    }
}
</style>
