<script lang="ts" setup>
// Import Tools
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useArquetipoStore } from 'stores/arquetipo-store';
import { dataArquetipos } from './dataArquetipos';

// Setup Tools
const q$ = useQuasar();
const arquetipoStore = useArquetipoStore();
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
            const wise = setResults('a');
            const warrior = setResults('b');
            const wizard = setResults('c');
            const lover = setResults('d');

            await arquetipoStore.createArquetipo(wise, warrior, wizard, lover);
            arquetipoStore.findArchetypeTest();
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
                    <p>{{ dataArquetipos[0].pregunta }}</p>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[0].a }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[0].b }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[0].c }}
                    </q-radio>
                    <q-radio
                        v-model="r1"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[0].d }}
                    </q-radio>
                </div>
                <!-- Pregunta Dos -->
                <div class="question">
                    <p>{{ dataArquetipos[1].pregunta }}</p>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[1].a }}
                    </q-radio>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[1].b }}
                    </q-radio>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[1].c }}
                    </q-radio>
                    <q-radio
                        v-model="r2"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[1].d }}
                    </q-radio>
                </div>
                <!-- Pregunta Tres -->
                <div class="question">
                    <p>{{ dataArquetipos[2].pregunta }}</p>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[2].a }}
                    </q-radio>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[2].b }}
                    </q-radio>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[2].c }}
                    </q-radio>
                    <q-radio
                        v-model="r3"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[2].d }}
                    </q-radio>
                </div>
                <!-- Pregunta Cuatro -->
                <div class="question">
                    <p>{{ dataArquetipos[3].pregunta }}</p>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[3].a }}
                    </q-radio>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[3].b }}
                    </q-radio>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[3].c }}
                    </q-radio>
                    <q-radio
                        v-model="r4"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[3].d }}
                    </q-radio>
                </div>
                <!-- Pregunta Cinco -->
                <div class="question">
                    <p>{{ dataArquetipos[4].pregunta }}</p>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[4].a }}
                    </q-radio>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[4].b }}
                    </q-radio>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[4].c }}
                    </q-radio>
                    <q-radio
                        v-model="r5"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[4].d }}
                    </q-radio>
                </div>
                <!-- Question Six -->
                <div class="question">
                    <p>{{ dataArquetipos[5].pregunta }}</p>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[5].a }}
                    </q-radio>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[5].b }}
                    </q-radio>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[5].c }}
                    </q-radio>
                    <q-radio
                        v-model="r6"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[5].d }}
                    </q-radio>
                </div>
                <!-- Question Seven -->
                <div class="question">
                    <p>{{ dataArquetipos[6].pregunta }}</p>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[6].a }}
                    </q-radio>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[6].b }}
                    </q-radio>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[6].c }}
                    </q-radio>
                    <q-radio
                        v-model="r7"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[6].d }}
                    </q-radio>
                </div>
                <!-- Question Eight -->
                <div class="question">
                    <p>{{ dataArquetipos[7].pregunta }}</p>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[7].a }}
                    </q-radio>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[7].b }}
                    </q-radio>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[7].c }}
                    </q-radio>
                    <q-radio
                        v-model="r8"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[7].d }}
                    </q-radio>
                </div>
                <!-- Question Nine -->
                <div class="question">
                    <p>{{ dataArquetipos[8].pregunta }}</p>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[8].a }}
                    </q-radio>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[8].b }}
                    </q-radio>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[8].c }}
                    </q-radio>
                    <q-radio
                        v-model="r9"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[8].d }}
                    </q-radio>
                </div>
                <!-- Question Ten -->
                <div class="question">
                    <p>{{ dataArquetipos[9].pregunta }}</p>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="a"
                    >
                        {{ dataArquetipos[9].a }}
                    </q-radio>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="b"
                    >
                        {{ dataArquetipos[9].b }}
                    </q-radio>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="c"
                    >
                        {{ dataArquetipos[9].c }}
                    </q-radio>
                    <q-radio
                        v-model="r10"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="d"
                    >
                        {{ dataArquetipos[9].d }}
                    </q-radio>
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
    position: fixed
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
