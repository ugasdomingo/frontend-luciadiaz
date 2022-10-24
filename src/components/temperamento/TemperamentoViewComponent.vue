<script lang="ts" setup>
// Import Tools
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useTemperamentoStore } from 'stores/temperamento-store';
import { dataTemperamento } from 'components/temperamento/dataTemperamiento';
// Setup Tools
const q$ = useQuasar();
const temperamentoStore = useTemperamentoStore();
const router = useRouter();

// Catch answers
const r1 = ref('');
const r2 = ref('');
const r3 = ref('');
const r4 = ref('');
const r5 = ref('');
const r6 = ref('');
const r7 = ref('');
const r8 = ref('');
const r9 = ref('');
const r10 = ref('');
const r11 = ref('');
const r12 = ref('');
const r13 = ref('');
const r14 = ref('');
const r15 = ref('');
const r16 = ref('');
const r17 = ref('');
const r18 = ref('');
const r19 = ref('');
const r20 = ref('');
const r21 = ref('');
const r22 = ref('');
const r23 = ref('');
const r24 = ref('');
const r25 = ref('');
const r26 = ref('');
const r27 = ref('');
const r28 = ref('');
const r29 = ref('');
const r30 = ref('');
const r31 = ref('');
const r32 = ref('');

const handleSubmit = async () => {
    try {
        //Handle Responses
        const allResponses = [
            r1.value,
            r2.value,
            r3.value,
            r4.value,
            r5.value,
            r6.value,
            r7.value,
            r8.value,
            r9.value,
            r10.value,
            r11.value,
            r12.value,
            r13.value,
            r14.value,
            r15.value,
            r16.value,
            r17.value,
            r18.value,
            r19.value,
            r20.value,
            r21.value,
            r22.value,
            r23.value,
            r24.value,
            r25.value,
            r26.value,
            r27.value,
            r28.value,
            r29.value,
            r30.value,
            r31.value,
            r32.value,
        ];
        // Funtion to count responses
        const setResults = (resp: string) => {
            return allResponses.filter((el) => el == resp).length;
        };

        // Find not answered questions
        const blanksQuestions = setResults('');

        // Operations
        if (blanksQuestions > 0) {
            q$.notify('Upps te quedaron preguntas sin responder');
        } else {
            const sanguine = setResults('a');
            const choleric = setResults('b');
            const melancholic = setResults('c');
            const phlegmatic = setResults('d');

            await temperamentoStore.createTemperamento(
                sanguine,
                choleric,
                melancholic,
                phlegmatic
            );
            temperamentoStore.findTemperamentoTest();
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
            <h3>Bienvenido(a) al Test de Arquetipos</h3>
            <p>
                Por favor selecciona la opción con la que más te identifique en
                cada caso
            </p>
            <q-form @submit.prevent="handleSubmit">
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[1].a }}
                    </q-radio>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[1].b }}
                    </q-radio>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[1].c }}
                    </q-radio>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[1].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[0].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="registro-buttom">
                    <q-btn
                        label="Guardar Test"
                        color="primary"
                        type="submit"
                    ></q-btn>
                </div>
            </q-form>
            <div class="answers">
                <p :class="{ active: r1 != '' }">1: {{ r1 }}</p>
                <p :class="{ active: r2 != '' }">2: {{ r2 }}</p>
                <p :class="{ active: r3 != '' }">3: {{ r3 }}</p>
                <p :class="{ active: r4 != '' }">4: {{ r4 }}</p>
                <p :class="{ active: r5 != '' }">5: {{ r5 }}</p>
                <p :class="{ active: r6 != '' }">6: {{ r6 }}</p>
                <p :class="{ active: r7 != '' }">7: {{ r7 }}</p>
                <p :class="{ active: r8 != '' }">8: {{ r8 }}</p>
                <p :class="{ active: r9 != '' }">9: {{ r9 }}</p>
                <p :class="{ active: r10 != '' }">10: {{ r10 }}</p>
                <p :class="{ active: r11 != '' }">11: {{ r11 }}</p>
                <p :class="{ active: r12 != '' }">12: {{ r12 }}</p>
                <p :class="{ active: r13 != '' }">13: {{ r13 }}</p>
                <p :class="{ active: r14 != '' }">14: {{ r14 }}</p>
                <p :class="{ active: r15 != '' }">15: {{ r15 }}</p>
                <p :class="{ active: r16 != '' }">16: {{ r16 }}</p>
                <p :class="{ active: r17 != '' }">17: {{ r17 }}</p>
                <p :class="{ active: r18 != '' }">18: {{ r18 }}</p>
                <p :class="{ active: r19 != '' }">19: {{ r19 }}</p>
                <p :class="{ active: r20 != '' }">20: {{ r20 }}</p>
                <p :class="{ active: r21 != '' }">21: {{ r21 }}</p>
                <p :class="{ active: r22 != '' }">22: {{ r22 }}</p>
                <p :class="{ active: r23 != '' }">23: {{ r23 }}</p>
                <p :class="{ active: r24 != '' }">24: {{ r24 }}</p>
                <p :class="{ active: r25 != '' }">25: {{ r25 }}</p>
                <p :class="{ active: r26 != '' }">26: {{ r26 }}</p>
                <p :class="{ active: r27 != '' }">27: {{ r27 }}</p>
                <p :class="{ active: r28 != '' }">28: {{ r28 }}</p>
                <p :class="{ active: r29 != '' }">29: {{ r29 }}</p>
                <p :class="{ active: r30 != '' }">30: {{ r30 }}</p>
                <p :class="{ active: r31 != '' }">31: {{ r31 }}</p>
                <p :class="{ active: r32 != '' }">32: {{ r32 }}</p>
            </div>
        </div>
    </q-page>
</template>

<style lang="sass" scoped>
.question
    margin-bottom: 16px
    display: grid
    background: $positive
    padding: 8px
    border-radius: 24px

.question p
    font-weight: 500

.answers
    display: grid
    position: absolute
    top: 20vh
    right: 24px
    background: $primary
    color: $accent
    padding: 12px
    border-radius: 8px

.active
    color: white
    font-weight: 600
</style>
