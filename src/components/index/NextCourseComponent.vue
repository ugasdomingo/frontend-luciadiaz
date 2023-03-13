<template>
    <div class="background-container">
        <h3>Guía para ser El Mejor Papá del Mundo</h3>
        <p>
            En esta guía tu peque te irá narrando cómo ve el mundo en cada etapa
            de su crecimiento, te enseñará cómo debes prepararte que necesitas
            para darle lo que necesita y sobre todo te enseñará a ser el mejor
            papá del mundo.
        </p>
        <q-btn
            label="Comprar mi guía"
            to="/best-dad"
            class="best-dad-buttom"
        ></q-btn>
    </div>
</template>

<style lang="scss" scoped>
h3 {
    display: none;
}
p {
    display: none;
}
.background-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 90vh;
    background-image: url('../../../public/img/generica-boy.png');
    background-size: cover;
    padding: 1em 0;
}
.best-dad-buttom {
    color: white;
    background-color: $accent;
    width: 40%;
}

@media screen and (max-width: 1080px) {
    h3 {
        color: $primary;
        text-align: center;
    }
    .best-dad-buttom {
        width: 60%;
    }
    .background-container {
        height: 30vh;
    }
}
</style>
