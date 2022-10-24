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
                    <!-- Respuesta Siguiente 3 -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[2].a }}
                    </q-radio>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[2].b }}
                    </q-radio>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[2].c }}
                    </q-radio>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[2].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[3].a }}
                    </q-radio>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[3].b }}
                    </q-radio>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[3].c }}
                    </q-radio>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[3].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[4].a }}
                    </q-radio>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[4].b }}
                    </q-radio>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[4].c }}
                    </q-radio>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[4].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[5].a }}
                    </q-radio>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[5].b }}
                    </q-radio>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[5].c }}
                    </q-radio>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[5].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[6].a }}
                    </q-radio>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[6].b }}
                    </q-radio>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[6].c }}
                    </q-radio>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[6].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[7].a }}
                    </q-radio>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[7].b }}
                    </q-radio>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[7].c }}
                    </q-radio>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[7].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente 9-->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[8].a }}
                    </q-radio>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[8].b }}
                    </q-radio>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[8].c }}
                    </q-radio>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[8].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[9].a }}
                    </q-radio>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[9].b }}
                    </q-radio>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[9].c }}
                    </q-radio>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[9].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r11"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[10].a }}
                    </q-radio>
                    <q-radio
                        v-model="r11"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[10].b }}
                    </q-radio>
                    <q-radio
                        v-model="r11"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[10].c }}
                    </q-radio>
                    <q-radio
                        v-model="r11"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[10].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r12"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[11].a }}
                    </q-radio>
                    <q-radio
                        v-model="r12"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[11].b }}
                    </q-radio>
                    <q-radio
                        v-model="r12"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[11].c }}
                    </q-radio>
                    <q-radio
                        v-model="r12"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[11].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r13"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[12].a }}
                    </q-radio>
                    <q-radio
                        v-model="r13"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[12].b }}
                    </q-radio>
                    <q-radio
                        v-model="r13"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[12].c }}
                    </q-radio>
                    <q-radio
                        v-model="r13"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[12].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r14"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[13].a }}
                    </q-radio>
                    <q-radio
                        v-model="r14"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[13].b }}
                    </q-radio>
                    <q-radio
                        v-model="r14"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[13].c }}
                    </q-radio>
                    <q-radio
                        v-model="r14"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[13].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente 15 -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r15"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[14].a }}
                    </q-radio>
                    <q-radio
                        v-model="r15"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[14].b }}
                    </q-radio>
                    <q-radio
                        v-model="r15"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[14].c }}
                    </q-radio>
                    <q-radio
                        v-model="r15"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[14].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r16"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[15].a }}
                    </q-radio>
                    <q-radio
                        v-model="r16"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[15].b }}
                    </q-radio>
                    <q-radio
                        v-model="r16"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[15].c }}
                    </q-radio>
                    <q-radio
                        v-model="r16"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[15].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r17"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[16].a }}
                    </q-radio>
                    <q-radio
                        v-model="r17"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[16].b }}
                    </q-radio>
                    <q-radio
                        v-model="r17"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[16].c }}
                    </q-radio>
                    <q-radio
                        v-model="r17"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[16].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r18"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[17].a }}
                    </q-radio>
                    <q-radio
                        v-model="r18"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[17].b }}
                    </q-radio>
                    <q-radio
                        v-model="r18"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[17].c }}
                    </q-radio>
                    <q-radio
                        v-model="r18"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[17].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente 19 -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r19"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[18].a }}
                    </q-radio>
                    <q-radio
                        v-model="r19"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[18].b }}
                    </q-radio>
                    <q-radio
                        v-model="r19"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[18].c }}
                    </q-radio>
                    <q-radio
                        v-model="r19"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[18].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r20"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[19].a }}
                    </q-radio>
                    <q-radio
                        v-model="r20"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[19].b }}
                    </q-radio>
                    <q-radio
                        v-model="r20"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[19].c }}
                    </q-radio>
                    <q-radio
                        v-model="r20"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[19].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r21"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[20].a }}
                    </q-radio>
                    <q-radio
                        v-model="r21"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[20].b }}
                    </q-radio>
                    <q-radio
                        v-model="r21"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[20].c }}
                    </q-radio>
                    <q-radio
                        v-model="r21"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[20].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r22"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[21].a }}
                    </q-radio>
                    <q-radio
                        v-model="r22"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[21].b }}
                    </q-radio>
                    <q-radio
                        v-model="r22"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[21].c }}
                    </q-radio>
                    <q-radio
                        v-model="r22"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[21].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r23"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[22].a }}
                    </q-radio>
                    <q-radio
                        v-model="r23"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[22].b }}
                    </q-radio>
                    <q-radio
                        v-model="r23"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[22].c }}
                    </q-radio>
                    <q-radio
                        v-model="r23"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[22].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente 24 -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r24"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[23].a }}
                    </q-radio>
                    <q-radio
                        v-model="r24"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[23].b }}
                    </q-radio>
                    <q-radio
                        v-model="r24"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[23].c }}
                    </q-radio>
                    <q-radio
                        v-model="r24"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[23].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r25"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[24].a }}
                    </q-radio>
                    <q-radio
                        v-model="r25"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[24].b }}
                    </q-radio>
                    <q-radio
                        v-model="r25"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[24].c }}
                    </q-radio>
                    <q-radio
                        v-model="r25"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[24].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r26"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[25].a }}
                    </q-radio>
                    <q-radio
                        v-model="r26"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[25].b }}
                    </q-radio>
                    <q-radio
                        v-model="r26"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[25].c }}
                    </q-radio>
                    <q-radio
                        v-model="r26"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[25].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r27"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[26].a }}
                    </q-radio>
                    <q-radio
                        v-model="r27"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[26].b }}
                    </q-radio>
                    <q-radio
                        v-model="r27"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[26].c }}
                    </q-radio>
                    <q-radio
                        v-model="r27"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[26].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r28"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[27].a }}
                    </q-radio>
                    <q-radio
                        v-model="r28"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[27].b }}
                    </q-radio>
                    <q-radio
                        v-model="r28"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[27].c }}
                    </q-radio>
                    <q-radio
                        v-model="r28"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[27].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r29"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[28].a }}
                    </q-radio>
                    <q-radio
                        v-model="r29"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[28].b }}
                    </q-radio>
                    <q-radio
                        v-model="r29"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[28].c }}
                    </q-radio>
                    <q-radio
                        v-model="r29"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[28].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r30"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[29].a }}
                    </q-radio>
                    <q-radio
                        v-model="r30"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[29].b }}
                    </q-radio>
                    <q-radio
                        v-model="r30"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[29].c }}
                    </q-radio>
                    <q-radio
                        v-model="r30"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[29].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r31"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[30].a }}
                    </q-radio>
                    <q-radio
                        v-model="r31"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[30].b }}
                    </q-radio>
                    <q-radio
                        v-model="r31"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[30].c }}
                    </q-radio>
                    <q-radio
                        v-model="r31"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[30].d }}
                    </q-radio>
                    <!-- Respuesta Siguiente -->
                </div>
                <div class="question">
                    <q-radio
                        v-model="r32"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataTemperamento[31].a }}
                    </q-radio>
                    <q-radio
                        v-model="r32"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataTemperamento[31].b }}
                    </q-radio>
                    <q-radio
                        v-model="r32"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataTemperamento[31].c }}
                    </q-radio>
                    <q-radio
                        v-model="r32"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataTemperamento[31].d }}
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
