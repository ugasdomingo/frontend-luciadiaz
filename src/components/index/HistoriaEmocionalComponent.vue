<template>
    <div class="row col-12 q-py-xl">
        <div class="row col-12 col-md-7 justify-center">
            <img
                src="https://res.cloudinary.com/minteados/image/upload/v1674225761/Cursos/Flayer_mujeres_n4wphs.jpg"
                alt="portada"
                class="image"
            />
        </div>
        <div class="second-container column col-12 col-md-4 justify-center">
            <h4 class="q-mt-none q-pl-none text-primary text-left">
                Taller Presencial
            </h4>
            <p class="text-primary text-h6">
                Una hermosa formación donde revisarás tu vida y tus vivencias
                para conseguir esa grandiosa transformación que deseas en ti. Tu
                eres Maravillosa, lo sabes, vamos a sacarlo.
            </p>
            <q-btn
                label="Más información"
                to="/historia-emocional"
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

@media screen and (max-width: 1080px) {
    .second-container {
        margin: 24px 8px 8px 12px;
    }
}
</style>
