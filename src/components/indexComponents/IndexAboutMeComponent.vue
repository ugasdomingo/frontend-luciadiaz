<script lang="ts" setup></script>

<template>
    <div class="citas-container">
        <div class="">
            <img
                src="img/fondo-lucia2.png"
                alt="Lucia"
                class="col-5 img-about-me"
            />
        </div>
        <div class="info-about-me">
            <h2 class="titles q-mb-md">¿Quieres saber más de mi?</h2>
            <p class="text-white q-mt-none">
                Tengo más de 5 años ejerciendo como psicóloga independiente,
                también he sido profesoria universitaria y he laborado como
                psicóloga escolar y maestra para instituciones de educación
                básica. Pero eso es sólo mi experiencia te invito a dar click en
                el botón para saber más de mi.
            </p>
            <q-btn label="Saber más de Lucia" class="button-about-me" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.citas-container {
    width: 100%;
    height: 100%;
    display: flex;
    background-image: linear-gradient(
        to right,
        rgba(9, 20, 141, 0.1),
        rgba(9, 30, 141, 0.9)
    );
}
.info-about-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}
.button-about-me {
    width: 30%;
    color: $white;
    border-color: $white;
}
.img-about-me {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}
@media screen and (max-width: 760px) {
    .citas-container {
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(
            to bottom,
            rgba(9, 20, 141, 0.1),
            rgba(9, 30, 141, 0.9)
        );
        padding: 0 4px 8px;
    }
    .info-about-me {
        width: 100%;
    }
    .button-about-me {
        width: 100%;
        border: solid 1px $white;
    }
}
</style>
