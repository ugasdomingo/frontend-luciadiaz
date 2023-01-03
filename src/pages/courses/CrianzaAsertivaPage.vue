<template>
    <q-page>
        <div class="column">
            <div class="row col-12 justify-evenly">
                <q-card class="col-12 col-md-6 q-my-xl q-pa-xl">
                    <q-img
                        src="https://res.cloudinary.com/minteados/image/upload/v1672669186/Cursos/Presencial_1_h4vvwz.png"
                    ></q-img>
                </q-card>
                <q-card class="col-12 col-md-4 q-my-xl">
                    <q-card-section><h3>Crianza Asertiva</h3></q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Presencial</h6>
                        <p>
                            Fecha de Inicio:
                            <span>04 de Febrero - 09:00 am</span>
                            <br />
                            Duración: <span>8 horas</span>
                            <br />
                            Inversión: <span>80 euros</span>
                            <br />
                            Ubicación: <span>Calle Doctor Castelo, Madrid</span>
                            <br />
                        </p>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Online</h6>
                        <p>
                            Clases: <span>21 y 28 de Enero - 14:00 Madrid</span>
                            <br />
                            Duración: <span>8 horas (4 horas cada clase)</span>
                            <br />
                            Inversión: <span>70 euros</span>
                            <br />
                        </p>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <img
                            src="https://res.cloudinary.com/minteados/image/upload/v1672669276/Cursos/Presencial_2_shoo3x.png"
                            alt="Description"
                            style="width: 70%; min-width: 150px"
                        />
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
