<script lang="ts" setup>
//Import tools

//Import Components

//Activate tools
</script>

<template>
    <div class="hero-container">
        <div class="text-hero-container">
            <h2 class="titles">¿Tienes una meta que deseas inmensamente?</h2>
            <p class="titles" style="opacity: 0.7; font-size: 1.2em">
                ¿Te gustaría saber qué es eso en tu mente que puede evitar que
                la alcances?
            </p>
            <q-btn
                label="Descúbrelo sin costo alguno"
                to="alcanzar-metas"
                class="hero-bottom"
            />
        </div>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/lgFFZj33egs?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin: 0 0 0.2em;
}
.hero-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
}
.text-hero-container {
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 50%;
}
.img-hero {
    width: 40%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}
.hero-bottom {
    border: solid 1px;
    background-color: none;
    color: $primary;
    width: 50%;
}
@media screen and (max-width: 760px) {
    //Gestión de Responsive ---------

    .hero-container {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        padding: 0px 4px;
    }
    .text-hero-container {
        display: flex;
        flex-direction: column;
        place-content: initial;
        width: 100%;
        height: 40%;
    }
    .img-hero {
        width: 100%;
        height: 60%;
    }
    .hero-bottom {
        width: 100%;
    }
}
</style>
