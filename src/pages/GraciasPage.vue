<template>
    <div class="column col-12 q-pa-md text-white flex-center thanks-container">
        <div class="column col-12 flex-center">
            <h1>Gracias por tu confianza</h1>

            <p>Deseo que aproveches y disfrutes esta formación al máximo.</p>

            <q-btn
                class="q-my-xl"
                color="white"
                text-color="primary"
                to="/"
                label="Volver a mi web"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    opacity: 0.4;
    font-size: 24px;
}
.thanks-container {
    height: 92vh;
    background-color: $primary;
}
@media screen and (max-width: 1080px) {
    .thanks-container {
        height: auto;
    }
}
</style>
