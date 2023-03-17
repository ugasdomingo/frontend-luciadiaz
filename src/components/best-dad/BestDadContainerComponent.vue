<template>
    <q-page>
        <div class="column">
            <div class="row col-12 justify-evenly best-container">
                <q-card class="col-12 col-md-6 q-my-xl q-pa-xl img-container">
                    <q-img src="img/generica-boy.png" class="img-1"></q-img>
                    <q-card-section>
                        <p>
                            Hola papá, mi querido lector. Quiero darte la
                            bienvenida a este recorrido en las etapas evolutivas
                            de tu hijo/a.<br /><br />
                            En estás siguientes páginas podrás entender desde la
                            mirada de tu peque cuáles son sus necesidades
                            cognitivas y socioemocionales según su edad en la
                            primera y segunda infancia. <br /><br />
                            Entendiendo, desde la teoría de Jean Piaget,
                            psicólogo, cual es el acompañamiento más eficaz que
                            podrás darle a tu hijo/a. Cómo resultado, podrás
                            convertirte en el mejor papá del mundo. Puesto que,
                            desde el amor, comprensión y conocimiento enseñarás
                            a tu hijo el concepto del mundo, las personas y si
                            mismo/a. Adelante, disfruta de este viaje.
                        </p>
                        <p>Con amor, Lucia Diaz.</p>
                    </q-card-section>
                    <q-img src="img/generica-girl.png" class="img-1"></q-img>
                </q-card>
                <q-card class="col-12 col-md-4 q-my-xl">
                    <q-card-section>
                        <h3>El Mejor Papá del Mundo</h3>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Proceso de Compra:</h6>
                        <ul>
                            <li>
                                <strong>1- </strong>Selecciona digital o impreso
                                y dale "Buy now".
                            </li>
                            <li>
                                <strong>2- </strong>Usa él método de pago de tu
                                preferencia.
                            </li>
                            <li>
                                <strong>3- </strong>Al confirmar el pago, serás
                                dirigido al formulario.
                            </li>
                            <li>
                                <strong>4- </strong>Completa el formulario
                                incluyendo una foto de papá con su hijo/a.
                            </li>
                            <li>
                                <strong>5- </strong>La entraga digital se
                                realizará en menos de 24 horas, para las
                                entregas impresas nos pondremos en contacto
                                contigo.
                            </li>
                        </ul>
                        <p class="text-grey">
                            Entrega impreso en el centro de Madrid, otras
                            ciudades y zonas es necesario agregar los gastos de
                            envío.
                        </p>
                        <PersonalizeBestDadPaypalComponent />
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <img
                            src="img/certificado-best-dad.png"
                            alt="Description"
                            class="img-2"
                        />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import GenericBestDadPaypalComponent from './GenericBestDadPaypalComponent.vue';
import PersonalizeBestDadPaypalComponent from './PersonalizeBestDadPaypalComponent.vue';
</script>

<style lang="scss" scoped>
span {
    font-weight: 600;
}
h6 {
    margin-bottom: 4px;
}
p {
    font-size: large;
}

.img-2 {
    width: 70%;
    min-width: 250px;
}
@media screen and (max-width: 1080px) {
    h3 {
        padding: 12px 0;
        margin: 0;
    }
    .best-container {
        justify-content: center;
    }
    .img-container {
        padding: 12px 0;
    }
    .img-1 {
        width: 100%;
        min-width: 250px;
        padding: 0;
    }
}
</style>
