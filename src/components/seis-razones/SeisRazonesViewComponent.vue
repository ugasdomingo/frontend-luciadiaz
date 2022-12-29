<script lang="ts" setup>
// Import Tools
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useSixReasonsStore } from 'src/stores/sixReasons-store';

// Setup Tools
const q$ = useQuasar();
const sixReasonsStore = useSixReasonsStore();

// Catch answers
const objetivo = ref('');
const fullname = ref('');
const r1 = ref('');
const r2 = ref('');
const r3 = ref('');
const r4 = ref('');
const r5 = ref('');
const r6 = ref('');

const handleSubmit = async () => {
    try {
        //Handle Responses
        const allResponses = [
            objetivo.value,
            r1.value,
            r2.value,
            r3.value,
            r4.value,
            r5.value,
            r6.value,
        ];
        // Funtion to count responses
        const setResults = (resp: string) => {
            return allResponses.filter((el) => el == resp).length;
        };

        // Find not answered questions
        const blanksQuestions = setResults('');

        // Operations
        if (blanksQuestions > 0) {
            q$.notify('Upps te quedaron razones por colocar');
        } else {
            const reasons = [
                r1.value,
                r2.value,
                r3.value,
                r4.value,
                r5.value,
                r6.value,
            ];

            const objetive = objetivo.value;
            const username = fullname.value;

            await sixReasonsStore.createSixReasons(reasons, objetive, username);
            sixReasonsStore.findSixReasonsTest();
        }
    } catch (error: any) {
        console.log('error', error);
        if (error.error) {
            alertDialogBackend(error.error);
        } else if (error.errors[0].msg) {
            alertDialogBackend(error.errors[0].msg);
        } else {
            alertDialogBackend();
        }
    }
};
const alertDialogBackend = (message = 'Error en el servidor') => {
    q$.dialog({
        title: 'Error',
        message,
    });
};
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5">
            <h3>Bienvenido(a) al Test de 6 Razones</h3>
            <p class="text-subtitle1">
                En este test descubrirás los obstáculos que percibe tu mente
                inconsciente para lograr el objetivo deseado.<br />
                <br />
                <span class="text-weight-bold text-subtitle1">
                    Escribe el objetivo que deseas lograr y 6 razones por las
                    que quieres lograr ese objetivo
                </span>
            </p>
            <q-form @submit.prevent="handleSubmit">
                <div class="question">
                    <q-input
                        v-model="fullname"
                        label="Escribe tu nombre y
                    apellido:"
                    />
                </div>
                <div class="question">
                    <q-input v-model="objetivo" label="¿Que quieres lograr?" />
                    <p>{{ objetivo }}</p>
                </div>
                <div class="question">
                    <q-input
                        class="input"
                        v-model="r1"
                        label="Primera Razón para lograr tu objetivo"
                    />
                    <q-input
                        class="input"
                        v-model="r2"
                        label="Segunda Razón para lograr tu objetivo"
                    />
                    <q-input
                        class="input"
                        v-model="r3"
                        label="Tercera Razón para lograr tu objetivo"
                    />
                    <q-input
                        class="input"
                        v-model="r4"
                        label="Cuarta Razón para lograr tu objetivo"
                    />
                    <q-input
                        class="input"
                        v-model="r5"
                        label="Quinta Razón para lograr tu objetivo"
                    />
                    <q-input
                        class="input"
                        v-model="r6"
                        label="Sexta Razón para lograr tu objetivo"
                    />
                </div>
                <div class="q-mb-md">
                    <q-btn
                        label="Guardar Test"
                        color="primary"
                        type="submit"
                    ></q-btn>
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<style lang="sass" scoped>
.question
    margin-bottom: 32px
    padding: 24px
    display: grid
    background: $positive
    border-radius: 24px

.question p
    font-weight: 500

.input
    margin-bottom: 24px
</style>
