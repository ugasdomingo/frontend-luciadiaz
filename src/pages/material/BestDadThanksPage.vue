<template>
    <div class="column col-12 q-pa-md text-white flex-center thanks-container">
        <div class="column col-12 flex-center">
            <h1>Gracias por tu compra</h1>

            <p>
                Deseo que seas el Mejor Papá del Mundo y regales una infancia
                maravillosa.
            </p>
            <p>
                Si compraste la versión impresa, por favor escribe a mi WhatsApp
                la dirección de envío
            </p>
            <q-btn
                class="q-my-xl"
                color="accent"
                text-color="primary"
                target="blank"
                href="https://wa.me/+34624721896"
                label="Escribir dirección de envío"
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
