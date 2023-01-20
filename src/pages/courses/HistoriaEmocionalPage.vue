<template>
    <q-page>
        <div>
            <div class="row col-12 justify-evenly">
                <q-card class="col-12 col-md-6 q-my-xl q-pa-xl">
                    <q-img
                        src="https://res.cloudinary.com/minteados/image/upload/v1674225761/Cursos/Flayer_mujeres_n4wphs.jpg"
                        style="width: 80%; min-width: 150px"
                    ></q-img>
                </q-card>
                <q-card class="col-12 col-md-4 q-my-xl">
                    <q-card-section
                        ><h3>Mi Historia Emocional</h3></q-card-section
                    >
                    <q-separator inset />
                    <q-card-section>
                        <h6>Presencial</h6>
                        <p>
                            Fecha de Inicio:
                            <span>18 de Febrero - 09:00 am</span>
                            <br />
                            Duración: <span>8 horas</span>
                            <br />
                            Inversión: <span>80 euros</span>
                            <br />
                            Ubicación:
                            <span>Calle de Doctor Castelo, Madrid</span>
                            <br />
                        </p>
                    </q-card-section>
                    <q-card-section> </q-card-section>
                </q-card>
            </div>
            <q-separator inset />
            <div class="column items-center" style="margin: 40px 0px">
                <q-btn
                    label="Inscribirme en el curso"
                    color="primary"
                    @click="handleClick"
                    class="q-px-xl"
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
