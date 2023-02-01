<template>
    <q-page>
        <div class="column">
            <div class="row col-12 justify-evenly">
                <q-card class="col-12 col-md-4 q-my-xl q-pa-xl">
                    <q-img
                        src="https://res.cloudinary.com/minteados/image/upload/v1675283845/Cursos/C%C3%B3mo_ser_pap%C3%A0s_y_no_morir_en_el_intento_qchyle.jpg"
                    ></q-img>
                </q-card>
                <q-card class="col-12 col-md-6 q-my-xl">
                    <q-card-section
                        ><h3>
                            Cómo ser padre sin morir en el intento
                        </h3></q-card-section
                    >
                    <q-separator inset />
                    <q-card-section>
                        <h6>Formación a Domicilio</h6>
                        <p>
                            La crianza de tus hijos(as) es el arte del caos y la
                            belleza. <br />En consulta, he visto innumerables
                            veces a padres que se dan el permiso de desbordarse
                            y de poder expresar que, a pesar de su experiencia,
                            sienten que muy pocas veces han logrado hacer algo
                            bien. <br /><br />¡Y eso es completamente normal y
                            sano! <br /><br />Porque te va a permitri ensanchar
                            tu vision de maternidad o de paternidad, y ese es el
                            paso crucial que necesita tu peque que des, para que
                            puedas desaprender lo que sabes y empieces a
                            aprender cosas nuevas. Cosas como la estimulación
                            correcta de tus peques, enseñar desde el respeto,
                            amar desde la libertad, entre otras. La pregunta es
                            <br /><br />¿Cómo ser padres y no morir en el
                            intento?<br /><br />
                            Tranquila(o), he creado una formación a domicilio
                            para acompañarte en le proceso, así juntos podremos
                            revisar la dinámica que llevas con tu peque para
                            diseñar un plan de acción que permita desarrollar
                            sus habilidades y las tuyas. ¿Cómo funciona esta
                            formación?<br /><br />Una vez agendado, te llegará
                            un correo con un formulario de preguntas sobre tu
                            peque que deberás imprimir y llenar antes del día
                            agendado. La información es confidencial y quedará
                            en tus manos.<br /><br />Y listo, nos vemos el dia
                            acordado para lograr cosas maravillosas con un café
                            en la mano.
                        </p>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Pasos a seguir:</h6>
                        <p>
                            Primero:
                            <span
                                >Reserva la hora y el día que más te
                                convenga</span
                            >
                            <br />
                            Segundo:
                            <span
                                >Usa el botón de Inscribirse para gestionar el
                                pago</span
                            >
                            <br />
                            Tercero:
                            <span
                                >Al confirmar el pago te enviaremos el resto del
                                material</span
                            >
                            <br />
                        </p>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <CitasPadresComponent />
                    </q-card-section>
                </q-card>
            </div>
            <div class="self-center q-mb-xl">
                <q-btn
                    label="Inscribirme en el curso"
                    color="primary"
                    @click="handleClick"
                ></q-btn>
            </div>
            <div v-if="toggle">
                <MethodsComponent />
            </div>
        </div>
    </q-page>
</template>

<script setup>
import MethodsComponent from 'src/components/enrollments/MethodsComponent.vue';
import CitasPadresComponent from 'src/components/CitasPadresComponent.vue';
import { ref } from 'vue';

const toggle = ref(false);

const handleClick = () => {
    toggle.value = !toggle.value;
};
</script>

<style lang="scss" scoped>
span {
    font-weight: 600;
}
h6 {
    margin-bottom: 4px;
}
</style>
